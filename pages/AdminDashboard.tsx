
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ShieldCheck, Users, Activity, CreditCard, Settings, AlertTriangle, Building2, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { MOCK_COMPANY_REVENUE, MOCK_SALES_HISTORY } from '../constants';

const data = [
  { name: 'W1', gtv: 40000, revenue: 400 },
  { name: 'W2', gtv: 65000, revenue: 650 },
  { name: 'W3', gtv: 52000, revenue: 520 },
  { name: 'W4', gtv: 85000, revenue: 850 },
  { name: 'W5', gtv: 98000, revenue: 980 },
  { name: 'W6', gtv: 124000, revenue: 1240 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Platform Administration</h1>
          <p className="text-gray-400">Global system health and financial monitoring.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          All Systems Operational
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatTile icon={<Activity />} label="Total GTV" value="$2.4M" color="border-indigo-500" />
        <StatTile icon={<CreditCard />} label="Platform Fees (1%)" value="$24,105" color="border-emerald-500" />
        <StatTile icon={<Users />} label="Registered Users" value="12,402" color="border-blue-500" />
        <StatTile icon={<AlertTriangle />} label="Pending Disputes" value="4" color="border-red-500" />
      </div>

      {/* Revenue per Company/Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass p-6 rounded-2xl flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Building2 size={20} className="text-indigo-400" />
              Company Revenue Breakdown
            </h3>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Across {MOCK_COMPANY_REVENUE.length} Entities</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-white/5">
                  <th className="pb-4 font-bold">Company</th>
                  <th className="pb-4 font-bold text-right">Items Sold</th>
                  <th className="pb-4 font-bold text-right">Volume</th>
                  <th className="pb-4 font-bold text-right">Platform Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {MOCK_COMPANY_REVENUE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/2 transition-colors">
                    <td className="py-4 font-bold text-white text-sm">{item.company}</td>
                    <td className="py-4 text-right text-gray-400 text-sm">{item.items}</td>
                    <td className="py-4 text-right text-white font-mono text-sm font-bold">${item.volume.toLocaleString()}</td>
                    <td className="py-4 text-right text-indigo-400 font-bold font-mono text-sm">${item.platformFee.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="mt-6 text-xs text-indigo-400 font-bold hover:underline self-start">Generate Detailed PDF Report</button>
        </div>

        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Growth Velocity</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="adminGTV" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }} />
                <Area type="monotone" dataKey="gtv" stroke="#8b5cf6" strokeWidth={3} fill="url(#adminGTV)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Global Transaction / Commission History */}
      <div className="glass rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5 bg-white/2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock size={20} className="text-indigo-400" />
            <h3 className="text-lg font-bold text-white">Global Commission Audit Log</h3>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 hover:text-white transition-colors">Filter: All</button>
            <button className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-lg text-xs text-red-400 hover:bg-red-500/20 transition-colors">Show Dues Only</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-white/5">
                <th className="p-6 font-bold">Log ID</th>
                <th className="p-6 font-bold">Date & Time</th>
                <th className="p-6 font-bold">Beneficiary (Marketer)</th>
                <th className="p-6 font-bold">Company / Product</th>
                <th className="p-6 font-bold text-right">Commission</th>
                <th className="p-6 font-bold">Payment Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_SALES_HISTORY.map((log) => (
                <tr key={log.id} className="hover:bg-white/2 transition-colors">
                  <td className="p-6 text-sm font-mono text-gray-600">#{log.id.toUpperCase()}</td>
                  <td className="p-6 text-xs text-gray-400">{log.date}</td>
                  <td className="p-6">
                    <div className="text-sm font-bold text-white">{log.marketer}</div>
                  </td>
                  <td className="p-6">
                    <div className="text-sm text-white">{log.company}</div>
                    <div className="text-[10px] text-gray-500 uppercase">{log.product}</div>
                  </td>
                  <td className="p-6 text-right font-mono font-bold text-indigo-400">${log.commission.toFixed(2)}</td>
                  <td className="p-6">
                    {log.status === 'PAID' ? (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase w-fit">
                        <CheckCircle2 size={12} />
                        Disbursed
                      </span>
                    ) : log.status === 'DUE' ? (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold uppercase w-fit">
                        <AlertCircle size={12} />
                        Payment Due
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase w-fit">
                        <Clock size={12} />
                        Processing
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white">Platform Configuration</h3>
          <Settings className="text-gray-500" size={20} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ConfigControl label="Platform Fee" value="1.00%" />
          <ConfigControl label="Marketer Reward Pool" value="2.00%" />
          <ConfigControl label="MLM Levels" value="5" />
          <ConfigControl label="Geometric Decay Rate" value="0.25" />
          <ConfigControl label="Payout Threshold" value="$50.00" />
          <ConfigControl label="Staking Multiplier" value="1.2x" />
        </div>
      </div>
    </div>
  );
};

const StatTile: React.FC<{ icon: React.ReactNode; label: string; value: string; color: string }> = ({ icon, label, value, color }) => (
  <div className={`glass p-6 rounded-2xl border-b-4 ${color}`}>
    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 mb-4 shadow-inner">
      {icon}
    </div>
    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</p>
    <p className="text-2xl font-bold text-white mt-1 tabular-nums">{value}</p>
  </div>
);

const ConfigControl: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group hover:border-indigo-500/30 transition-all cursor-pointer">
    <span className="text-sm text-gray-400 group-hover:text-gray-300">{label}</span>
    <span className="text-sm font-bold text-indigo-400 group-hover:text-indigo-300">{value}</span>
  </div>
);

export default AdminDashboard;
