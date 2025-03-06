import React, { useState } from 'react';
import { 
  ArrowDownUp,
  ArrowRight,
  Download,
  FileText,
  Filter,
  Plus,
  TrendingDown,
  TrendingUp,
  Clock,
  PieChart,
  ChevronRight
} from 'lucide-react';

export default function CashFlow() {
  const [activeTab, setActiveTab] = useState('forecast');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Cash Flow Management</h1>
          <p className="text-gray-500">Monitor, analyze, and forecast your organization's cash flows</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] text-gray-700 flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button className="px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] text-gray-700 flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="px-4 py-2 rounded-xl bg-[#6d7b92] text-white shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:bg-[#5d6b82] flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction
          </button>
        </div>
      </div>

      {/* Cash Flow Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Total Inflows",
            value: "$2,845,290",
            change: "+12.5%",
            trend: "up",
            icon: <TrendingUp className="h-6 w-6 text-green-600" />,
            color: "text-green-600",
          },
          {
            title: "Total Outflows",
            value: "$1,985,120",
            change: "+8.3%",
            trend: "up",
            icon: <TrendingDown className="h-6 w-6 text-red-600" />,
            color: "text-red-600",
          },
          {
            title: "Net Cash Flow",
            value: "$860,170",
            change: "+24.7%",
            trend: "up",
            icon: <ArrowDownUp className="h-6 w-6 text-[#6d7b92]" />,
            color: "text-[#6d7b92]",
          },
        ].map((metric, index) => (
          <div
            key={index}
            className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]"
          >
            <div className="flex items-center justify-between">
              <div
                className={`h-12 w-12 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center ${metric.color}`}
              >
                {metric.icon}
              </div>
              {metric.trend === "up" && (
                <div className="flex items-center text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>{metric.change}</span>
                </div>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-sm">{metric.title}</h3>
              <p className={`text-2xl font-bold mt-1 ${metric.color}`}>{metric.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cash Flow Forecast Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            period: "30 Days",
            inflow: "$1,245,000",
            outflow: "$985,600",
            net: "$259,400",
            trend: "up",
          },
          {
            period: "60 Days",
            inflow: "$2,580,000",
            outflow: "$2,125,000",
            net: "$455,000",
            trend: "up",
          },
          {
            period: "90 Days",
            inflow: "$3,950,000",
            outflow: "$3,450,000",
            net: "$500,000",
            trend: "up",
          },
        ].map((forecast, index) => (
          <div
            key={index}
            className="rounded-xl bg-[#e0e5ec] p-4 shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff]"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium">{forecast.period}</h4>
              {forecast.trend === "up" ? (
                <TrendingUp className="h-5 w-5 text-green-600" />
              ) : (
                <TrendingDown className="h-5 w-5 text-red-600" />
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Inflows:</span>
                <span className="text-green-600 font-medium">{forecast.inflow}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Outflows:</span>
                <span className="text-red-600 font-medium">{forecast.outflow}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Net:</span>
                <span className="text-blue-600 font-medium">{forecast.net}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inflows Categories */}
        <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <h4 className="font-medium mb-4 text-green-600">Inflows by Category</h4>
          <div className="h-[200px] mb-4 rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center">
            <PieChart className="h-24 w-24 text-[#6d7b92]" />
          </div>
          <div className="space-y-3">
            {[
              { category: "Sales Revenue", amount: "$1,450,000", percentage: "51%" },
              { category: "Accounts Receivable", amount: "$685,290", percentage: "24%" },
              { category: "Investment Income", amount: "$425,000", percentage: "15%" },
              { category: "Other Income", amount: "$285,000", percentage: "10%" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`h-3 w-3 rounded-full bg-green-${(index + 3) * 100} mr-2`}></div>
                  <span className="text-sm">{item.category}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium">{item.amount}</span>
                  <span className="text-xs text-gray-500 ml-2">({item.percentage})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outflows Categories */}
        <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
          <h4 className="font-medium mb-4 text-red-600">Outflows by Category</h4>
          <div className="h-[200px] mb-4 rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center">
            <PieChart className="h-24 w-24 text-[#6d7b92]" />
          </div>
          <div className="space-y-3">
            {[
              { category: "Operating Expenses", amount: "$875,120", percentage: "44%" },
              { category: "Accounts Payable", amount: "$545,000", percentage: "27%" },
              { category: "Payroll", amount: "$385,000", percentage: "19%" },
              { category: "Capital Expenditures", amount: "$180,000", percentage: "10%" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`h-3 w-3 rounded-full bg-red-${(index + 3) * 100} mr-2`}></div>
                  <span className="text-sm">{item.category}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium">{item.amount}</span>
                  <span className="text-xs text-gray-500 ml-2">({item.percentage})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Recent Transactions</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] p-4">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Transaction</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Category</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Amount</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Account</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Customer Payment - Acme Corp",
                  date: "May 15, 2023",
                  category: "Accounts Receivable",
                  amount: "+$245,000.00",
                  account: "Operating Account",
                },
                {
                  name: "Supplier Payment - Tech Solutions",
                  date: "May 14, 2023",
                  category: "Accounts Payable",
                  amount: "-$125,000.00",
                  account: "Operating Account",
                },
                {
                  name: "Payroll Transfer",
                  date: "May 12, 2023",
                  category: "Payroll",
                  amount: "-$385,000.00",
                  account: "Payroll Account",
                },
                {
                  name: "Investment Income",
                  date: "May 10, 2023",
                  category: "Investment Income",
                  amount: "+$85,290.00",
                  account: "Investment Account",
                },
              ].map((transaction, index) => (
                <tr key={index} className="border-b last:border-b-0 hover:bg-[#e6ebf2]">
                  <td className="py-4 px-6 font-medium">{transaction.name}</td>
                  <td className="py-4 px-6">{transaction.date}</td>
                  <td className="py-4 px-6">{transaction.category}</td>
                  <td className={`py-4 px-6 ${
                    transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"
                  }`}>
                    {transaction.amount}
                  </td>
                  <td className="py-4 px-6">{transaction.account}</td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-2 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cash Flow Chart */}
      <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Cash Flow Analysis</h2>
          <div className="flex space-x-2 mt-3 md:mt-0">
            <button className="px-4 py-2 rounded-lg bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] text-[#6d7b92]">
              Daily
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
              Weekly
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
              Monthly
            </button>
          </div>
        </div>
        <div className="h-[400px] rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center">
          <p className="text-gray-500">Chart will be implemented here</p>
        </div>
      </div>

      {/* Cash Flow Alerts */}
      <div className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]">
        <h2 className="text-lg font-bold mb-4">Cash Flow Alerts</h2>
        <div className="space-y-4">
          {[
            {
              title: "Potential Cash Shortfall",
              description: "Projected cash balance may fall below minimum threshold in 45 days",
              severity: "high",
            },
            {
              title: "Large Outflow Scheduled",
              description: "Upcoming payment of $450,000 to Vendor XYZ on June 15, 2023",
              severity: "medium",
            },
            {
              title: "Receivable Overdue",
              description: "Customer ABC payment of $125,000 is 15 days overdue",
              severity: "medium",
            },
          ].map((alert, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 ${
                alert.severity === "high"
                  ? "bg-red-100"
                  : alert.severity === "medium"
                    ? "bg-yellow-100"
                    : "bg-green-100"
              }`}
            >
              <div className="flex items-start">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                    alert.severity === "high"
                      ? "bg-red-200 text-red-600"
                      : alert.severity === "medium"
                        ? "bg-yellow-200 text-yellow-600"
                        : "bg-green-200 text-green-600"
                  }`}
                >
                  {alert.severity === "high" ? (
                    <TrendingDown className="h-4 w-4" />
                  ) : alert.severity === "medium" ? (
                    <Clock className="h-4 w-4" />
                  ) : (
                    <TrendingUp className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      alert.severity === "high"
                        ? "text-red-800"
                        : alert.severity === "medium"
                          ? "text-yellow-800"
                          : "text-green-800"
                    }`}
                  >
                    {alert.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      alert.severity === "high"
                        ? "text-red-600"
                        : alert.severity === "medium"
                          ? "text-yellow-600"
                          : "text-green-600"
                    }`}
                  >
                    {alert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}