import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Wallet,
  LineChart,
  Shield,
  Settings,
  Users,
  Building2,
  LogOut,
  Landmark,
  Bell,
  Search,
  User,
  MessageSquare,
  FileText,
  Calendar,
  TrendingUp,
  RefreshCw,
  Globe
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { cn } from '../lib/utils';

export default function Dashboard() {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <div className="flex h-screen bg-[#e0e5ec]">
      {/* Sidebar */}
      <div 
        className={cn(
          "bg-[#e0e5ec] border-r border-sidebar-border transition-all duration-300 shadow-[5px_0px_10px_#bec3c9]",
          isExpanded ? 'w-64' : 'w-20'
        )}
      >
        <div className="p-4 flex items-center justify-between border-b border-sidebar-border">
          <div className={cn("flex items-center", !isExpanded && 'justify-center')}>
            <div className="h-10 w-10 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-[#6d7b92]" />
            </div>
            <span className={cn(
              "ml-2 font-semibold text-xl transition-opacity duration-300",
              isExpanded ? 'opacity-100' : 'opacity-0 hidden'
            )}>
              TreasuryPro
            </span>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="rounded-lg p-2 bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]"
          >
            {isExpanded ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {[
              { icon: <Wallet />, label: "Overview", path: "/dashboard" },
              { icon: <BarChart3 />, label: "Cash Flow", path: "/dashboard/cash-flow" },
              { icon: <Landmark />, label: "Banking", path: "/dashboard/bank-accounts" },
              { icon: <LineChart />, label: "Investments", path: "/dashboard/investments" },
              { icon: <FileText />, label: "Reports", path: "/dashboard/reports" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center p-2 rounded-lg text-gray-700 transition-all",
                    "bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]",
                    location.pathname === item.path && "shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] text-[#6d7b92]"
                  )}
                >
                  {React.cloneElement(item.icon, { className: "h-6 w-6" })}
                  <span className={cn(
                    "ml-3 transition-opacity duration-300",
                    isExpanded ? 'opacity-100' : 'opacity-0 hidden'
                  )}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Treasury</h3>
            <ul className="mt-2 space-y-2">
              {[
                { icon: <TrendingUp />, label: "Forecasting", path: "/dashboard/forecasting" },
                { icon: <RefreshCw />, label: "FX Management", path: "/dashboard/fx" },
                { icon: <Users />, label: "Bank Relations", path: "/dashboard/bank-relations" },
                { icon: <Calendar />, label: "Scheduling", path: "/dashboard/scheduling" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center p-2 rounded-lg text-gray-700 transition-all",
                      "bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]",
                      location.pathname === item.path && "shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] text-[#6d7b92]"
                    )}
                  >
                    {React.cloneElement(item.icon, { className: "h-6 w-6" })}
                    <span className={cn(
                      "ml-3 transition-opacity duration-300",
                      isExpanded ? 'opacity-100' : 'opacity-0 hidden'
                    )}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Settings</h3>
            <ul className="mt-2 space-y-2">
              {[
                { icon: <User />, label: "Profile", path: "/dashboard/profile" },
                { icon: <Settings />, label: "Preferences", path: "/dashboard/preferences" },
                { icon: <Building2 />, label: "Company", path: "/dashboard/company" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center p-2 rounded-lg text-gray-700 transition-all",
                      "bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]",
                      location.pathname === item.path && "shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] text-[#6d7b92]"
                    )}
                  >
                    {React.cloneElement(item.icon, { className: "h-6 w-6" })}
                    <span className={cn(
                      "ml-3 transition-opacity duration-300",
                      isExpanded ? 'opacity-100' : 'opacity-0 hidden'
                    )}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute bottom-4 w-full left-0 px-4">
            <button
              onClick={handleLogout}
              className={cn(
                "flex items-center p-2 rounded-lg w-full text-red-600 transition-all",
                "bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]",
                !isExpanded && 'justify-center'
              )}
            >
              <LogOut className="h-6 w-6" />
              <span className={cn(
                "ml-3 transition-opacity duration-300",
                isExpanded ? 'opacity-100' : 'opacity-0 hidden'
              )}>
                Logout
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-[#e0e5ec] border-b border-gray-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] z-10">
          <div className="h-full px-4 flex items-center justify-between">
            <div className="relative rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] hidden md:block w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full h-10 pl-10 pr-4 bg-transparent border-0 focus:outline-none"
              />
            </div>

            <div className="flex items-center space-x-4">
              <button className="rounded-lg p-2 bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              <button className="rounded-lg p-2 bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff]">
                <MessageSquare className="h-5 w-5" />
              </button>

              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
                  <User className="h-6 w-6 text-[#6d7b92]" />
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium">Alex Morgan</div>
                  <div className="text-xs text-gray-500">Treasury Manager</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}