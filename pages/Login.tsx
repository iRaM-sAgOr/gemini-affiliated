
import React, { useState } from 'react';
import { UserRole } from '../types';
import { ShieldCheck, User, Briefcase } from 'lucide-react';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
      <div className="max-w-md w-full glass p-8 rounded-3xl space-y-8">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(79,70,229,0.4)]">
            <span className="font-bold text-3xl text-white">A</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Affilia<span className="text-indigo-400">MLM</span></h1>
          <p className="text-gray-400 text-sm">Welcome to the hybrid marketing engine.</p>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center">Select your access portal</p>
          
          <button 
            onClick={() => onLogin(UserRole.MARKETER)}
            className="w-full group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <User size={24} />
            </div>
            <div>
              <p className="font-bold text-white">Marketer Access</p>
              <p className="text-xs text-gray-500">Promote products and manage your team tree.</p>
            </div>
          </button>

          <button 
            onClick={() => onLogin(UserRole.PRODUCT_OWNER)}
            className="w-full group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="font-bold text-white">Product Owner Access</p>
              <p className="text-xs text-gray-500">Track sales performance and marketer reach.</p>
            </div>
          </button>

          <button 
            onClick={() => onLogin(UserRole.ADMIN)}
            className="w-full group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="font-bold text-white">Admin Console</p>
              <p className="text-xs text-gray-500">Global platform oversight and financial control.</p>
            </div>
          </button>
        </div>

        <div className="pt-4 text-center">
          <p className="text-xs text-gray-600 italic">Secure production-grade simulation environment</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
