import React, { useEffect, useState } from 'react';
import { Plus, Building2, DollarSign, ExternalLink, Filter, Download } from 'lucide-react';
import { supabase } from '../lib/supabase';
import AddBankAccountModal from '../components/AddBankAccountModal';
import { cn } from '../lib/utils';

type BankAccount = {
  id: string;
  name: string;
  bank_name: string;
  account_number: string;
  balance: number;
  currency: string;
  account_type: string;
};

export default function BankAccounts() {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('bank_accounts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAccounts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch accounts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleAddSuccess = () => {
    fetchAccounts();
  };

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bank Accounts</h1>
          <p className="text-gray-500">Manage your bank accounts and connections</p>
        </div>
        <div className="flex space-x-3">
          <button
            className="px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] text-gray-700 flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-[#6d7b92] text-white shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:bg-[#5d6b82] flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Bank Account
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Balance</p>
              <p className="text-2xl font-bold">
                ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-[#6d7b92]" />
            </div>
          </div>
        </div>
        
        <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Accounts</p>
              <p className="text-2xl font-bold">{accounts.length}</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
              <Building2 className="h-6 w-6 text-[#6d7b92]" />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Banks</p>
              <p className="text-2xl font-bold">
                {new Set(accounts.map(a => a.bank_name)).size}
              </p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
              <Building2 className="h-6 w-6 text-[#6d7b92]" />
            </div>
          </div>
        </div>
      </div>

      {/* Accounts Table */}
      <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Account Details</h2>
          <button className="p-2 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
            <Filter className="h-4 w-4" />
          </button>
        </div>

        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <div className="text-gray-500">Loading accounts...</div>
          </div>
        )}
        
        {error && (
          <div className="p-4 text-red-600 rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] mb-4">
            {error}
          </div>
        )}

        <div className="overflow-x-auto rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] p-4">
          <table className="w-full">
            <thead className="bg-[#e0e5ec]">
              <tr className="bg-gray-50 border-b">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Account Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Bank</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Account Number</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Type</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-600">Balance</th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.id} className="border-b last:border-b-0 hover:bg-[#e6ebf2] transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">{account.name}</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{account.bank_name}</td>
                  <td className="py-4 px-6 text-gray-600">****{account.account_number.slice(-4)}</td>
                  <td className="py-4 px-6 text-gray-600">{account.account_type}</td>
                  <td className="py-4 px-6 text-right">
                    <span className="font-medium text-gray-900">
                      ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-center">
                      <button className="p-2 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] text-gray-600">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Bank Account Modal */}
      <AddBankAccountModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSuccess={handleAddSuccess}
      />
    </div>
  );
}