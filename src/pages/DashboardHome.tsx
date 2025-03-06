import React from 'react';
import { 
  BarChart3, 
  ArrowUpRight, 
  ArrowDownRight, 
  DollarSign,
  LineChart,
  FileText,
  Filter,
  Download,
  Globe,
  TrendingUp
} from 'lucide-react';

export default function DashboardHome() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] border-0">
            <Download className="mr-2 h-4 w-4 inline-block" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Cash</p>
              <p className="text-2xl font-bold">$2.4M</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-[#6d7b92]" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">+3.5%</span>
            <span className="text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Investments</p>
              <p className="text-2xl font-bold">$8.2M</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-[#6d7b92]" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">+12.3%</span>
            <span className="text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Liabilities</p>
              <p className="text-2xl font-bold">$1.8M</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
              <ArrowDownRight className="h-6 w-6 text-[#6d7b92]" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <ArrowDownRight className="h-4 w-4 text-red-500" />
            <span className="text-red-500 font-medium">-2.1%</span>
            <span className="text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Net Position</p>
              <p className="text-2xl font-bold">$8.8M</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-[#6d7b92]" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">+5.7%</span>
            <span className="text-gray-500 ml-2">from last month</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">Payment to Vendor {i}</p>
                  <p className="text-sm text-gray-500">March {i + 10}, 2025</p>
                </div>
                <span className="text-red-600">-$12,500</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <h2 className="text-lg font-semibold mb-4">Cash Flow Forecast</h2>
          <div className="h-64 flex items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]">
            <p className="text-gray-500">Chart will be implemented here</p>
          </div>
        </div>
      </div>
    </div>
  );
}