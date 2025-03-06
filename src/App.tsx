import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  BarChart3,
  Wallet,
  CreditCard,
  LineChart,
  Shield,
  ArrowRightCircle,
  Building2,
  Globe,
  Users,
  LogIn,
  Lock,
  Clock,
  DollarSign,
  PieChart,
  TrendingUp
} from "lucide-react";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/DashboardHome';
import BankAccounts from './pages/BankAccounts';
import CashFlow from './pages/CashFlow';

const features = [
  {
    icon: <Wallet className="h-8 w-8 text-[#6d7b92]" />,
    title: "Cash Management",
    description: "Centralized view of all cash positions and forecasting capabilities."
  },
  {
    icon: <Globe className="h-8 w-8 text-[#6d7b92]" />,
    title: "Global Banking",
    description: "Connect with banks worldwide through secure API integrations."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-[#6d7b92]" />,
    title: "Investment Management", 
    description: "Track and manage investments with real-time market data integration."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-[#6d7b92]" />,
    title: "Payment Processing",
    description: "Streamline domestic and international payment workflows."
  },
  {
    icon: <LineChart className="h-8 w-8 text-[#6d7b92]" />,
    title: "Financial Analytics",
    description: "Gain insights with comprehensive reporting and analytics."
  },
  {
    icon: <Shield className="h-8 w-8 text-[#6d7b92]" />,
    title: "Risk Management",
    description: "Identify and mitigate financial risks with advanced tools."
  }
];

const testimonials = [
  {
    quote: "TreasuryPro has transformed how we manage our global treasury operations.",
    author: "Sarah Johnson",
    title: "CFO, Global Enterprises Inc."
  },
  {
    quote: "The integration capabilities with our ERP system made implementation seamless. We've seen a 40% reduction in manual processing time.",
    author: "Michael Chen",
    title: "Treasury Director, Tech Innovations"
  },
  {
    quote: "The risk management tools have given us unprecedented visibility into our FX exposures. A game-changer for our multinational operations.",
    author: "Emma Rodriguez",
    title: "VP of Finance, Worldwide Retail"
  }
];

function App() {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="bank-accounts" element={<BankAccounts />} />
          <Route path="cash-flow" element={<CashFlow />} />
          {/* Other dashboard routes will be added here */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <div className="min-h-screen bg-[#e0e5ec]">
            {/* Hero Section */}
            <nav className="bg-[#e0e5ec] border-b">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <Link to="/" className="flex items-center space-x-2">
                      <div className="h-10 w-10 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-[#6d7b92]" />
                      </div>
                      <span className="text-xl font-bold">TreasuryPro</span>
                    </Link>
                  </div>
                  <div className="hidden md:flex space-x-8">
                    {["Features", "Solutions", "Pricing", "Resources"].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-[#e0e5ec] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all duration-200"
                      >
                        {item}
                      </a>
                    ))}
                    <Link
                      to="/login"
                      className="px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all duration-200"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="px-4 py-2 rounded-xl bg-[#6d7b92] text-white shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:bg-[#5d6b82] transition-all duration-200"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            <main>
              <div className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                          <span className="block">Modern Treasury Management</span>
                          <span className="block text-[#6d7b92]">for the Digital Age</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                          Streamline your treasury operations with our comprehensive workstation. 
                          Manage cash, investments, and risk all in one place.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                          <button className="px-8 py-6 rounded-xl bg-[#6d7b92] text-white shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:bg-[#5d6b82] transition-all duration-200">
                            Request Demo
                          </button>
                          <button className="px-8 py-6 rounded-xl bg-[#e0e5ec] text-gray-700 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] border-0 transition-all duration-200">
                            Learn More
                          </button>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[10px_10px_20px_#bec3c9,-10px_-10px_20px_#ffffff]">
                      <img
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        alt="Treasury dashboard preview"
                        className="rounded-xl w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e6ebf2]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="lg:text-center">
                    <h2 className="text-base text-[#6d7b92] font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      Everything you need to manage treasury
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                      Our platform provides all the tools you need to manage your organization's financial operations efficiently.
                    </p>
                  </div>

                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all duration-300"
                      >
                        <div className="h-14 w-14 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center mb-4">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e0e5ec]">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by Financial Leaders</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      See what treasury professionals are saying about our platform.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="rounded-xl bg-[#e0e5ec] p-6 shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff]"
                      >
                        <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <div className="h-12 w-12 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] flex items-center justify-center mr-4">
                            <Users className="h-6 w-6 text-[#6d7b92]" />
                          </div>
                          <div>
                            <p className="font-bold">{testimonial.author}</p>
                            <p className="text-sm text-gray-500">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        } />
      </Routes>
  );
}

export default App;