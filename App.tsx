
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link as RouterLink, useLocation, Navigate } from 'react-router-dom';
import { Bell, Search, User as UserIcon, LogOut, ChevronRight, Menu, X, Sparkles } from 'lucide-react';
import { MENU_ITEMS, MOCK_USER_MARKETER, MOCK_USER_OWNER, MOCK_USER_ADMIN } from './constants';
import { UserRole } from './types';

// Page Imports
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import TeamTree from './pages/TeamTree';
import AffiliateLinks from './pages/AffiliateLinks';
import ProductOwnerDashboard from './pages/ProductOwnerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogin = (role: UserRole) => {
    if (role === UserRole.MARKETER) setUser(MOCK_USER_MARKETER);
    else if (role === UserRole.PRODUCT_OWNER) setUser(MOCK_USER_OWNER);
    else if (role === UserRole.ADMIN) setUser(MOCK_USER_ADMIN);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const roleMenu = MENU_ITEMS[user.role as keyof typeof MENU_ITEMS] || [];

  return (
    <HashRouter>
      <div className="flex min-h-screen bg-slate-950 text-gray-100 selection:bg-indigo-500 selection:text-white">
        {/* Sidebar */}
        <aside 
          className={`fixed inset-y-0 left-0 z-50 w-64 glass transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between h-20 px-6 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.5)]">
                <span className="font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Affilia<span className="text-indigo-400">MLM</span></span>
            </div>
            <button className="lg:hidden text-gray-400" onClick={() => setIsSidebarOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="px-6 py-4">
            <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 w-fit">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{user.role.replace('_', ' ')}</span>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            {roleMenu.map((item: any) => (
              <NavLink key={item.path} to={item.path} icon={item.icon} label={item.label} />
            ))}
          </nav>

          <div className="absolute bottom-0 w-full p-4 border-t border-white/5">
            <div 
              onClick={handleLogout}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-red-500/10 transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {user.name.split(' ').map((n:any) => n[0]).join('')}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-white truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
              <LogOut size={16} className="text-gray-500 group-hover:text-red-400" />
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
          {/* Header */}
          <header className="sticky top-0 z-30 h-20 glass border-b border-white/5 px-4 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                className="lg:hidden p-2 text-gray-400 hover:text-white"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu size={24} />
              </button>
              <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 w-96">
                <Search size={18} className="text-gray-500" />
                <input 
                  type="text" 
                  placeholder={`Search ${user.role.toLowerCase()} tools...`}
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-6">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs text-gray-400 font-medium">Available Funds</span>
                <span className="text-lg font-bold text-white tabular-nums">${user.walletBalance.toLocaleString()}</span>
              </div>
              <div className="h-8 w-px bg-white/10"></div>
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell size={22} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-slate-950"></span>
              </button>
            </div>
          </header>

          <div className="p-4 lg:p-8">
            <Routes>
              {user.role === UserRole.MARKETER && (
                <>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/team" element={<TeamTree />} />
                  <Route path="/links" element={<AffiliateLinks />} />
                </>
              )}
              {user.role === UserRole.PRODUCT_OWNER && (
                <>
                  <Route path="/" element={<ProductOwnerDashboard />} />
                  <Route path="/products" element={<div className="p-12 text-center text-gray-500">Inventory Management Console</div>} />
                  <Route path="/sales" element={<div className="p-12 text-center text-gray-500">Extended Sales Audit Logs</div>} />
                </>
              )}
              {user.role === UserRole.ADMIN && (
                <>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/users" element={<div className="p-12 text-center text-gray-500">Global User Directory & Perms</div>} />
                </>
              )}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </HashRouter>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to === '/' && location.pathname === '');

  return (
    <RouterLink
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
        isActive 
          ? 'bg-indigo-600/10 text-indigo-400 font-semibold shadow-[inset_0_0_10px_rgba(79,70,229,0.05)]' 
          : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
      }`}
    >
      <div className={`${isActive ? 'text-indigo-400' : 'text-gray-500 group-hover:text-gray-300'}`}>
        {icon}
      </div>
      <span className="text-sm">{label}</span>
      {isActive && <div className="ml-auto w-1 h-4 bg-indigo-500 rounded-full"></div>}
    </RouterLink>
  );
};

export default App;
