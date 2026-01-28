
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ShoppingBag, DollarSign, Wallet, Link as LinkIcon, Building2, EyeOff } from 'lucide-react';
import { MOCK_SALES_ANONYMIZED } from '../constants';

const linkData = [
  { linkId: 'LNK-AST-9922', sales: 156, volume: 8400 },
  { linkId: 'LNK-SRH-1102', sales: 92, volume: 4200 },
  { linkId: 'LNK-MKR-5541', sales: 45, volume: 1800 },
  { linkId: 'LNK-LUN-3321', sales: 30, volume: 1200 },
  { linkId: 'LNK-STV-8820', sales: 12, volume: 450 },
];

const COLORS = ['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#e0e7ff'];

const ProductOwnerDashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Vortex Corp Ecosystem</h1>
          <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold w-fit">
            <EyeOff size={14} />
            <span>Marketer Identities Protected</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="glass px-6 py-3 rounded-2xl border-l-4 border-l-emerald-500">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Total GTV</p>
            <p className="text-xl font-bold text-white">$142,500.00</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={<LinkIcon />} label="Active Traffic Links" value="142" trend="Anonymized" />
        <StatCard icon={<ShoppingBag />} label="Conversion Count" value="842" trend="+14%" />
        <StatCard icon={<Wallet />} label="Net Capital Inflow" value="$128,450" trend="+12%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Link ID Performance (Volume)</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={linkData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="linkId" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }} 
                />
                <Bar dataKey="volume" radius={[4, 4, 0, 0]}>
                  {linkData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass p-6 rounded-2xl space-y-6">
          <h3 className="text-lg font-bold text-white">Disbursement Policy</h3>
          <div className="p-4 rounded-xl bg-white/5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">Marketer Reward Pool</span>
              <span className="text-xs font-bold text-white">2.00%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">MLM Structure Depth</span>
              <span className="text-xs font-bold text-indigo-400">5 Levels</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">Platform Fee</span>
              <span className="text-xs font-bold text-white">1.00%</span>
            </div>
          </div>
          <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/5 transition-all">
            Update Reward Splits
          </button>
        </div>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/2">
          <h3 className="text-lg font-bold text-white">Anonymized Link Audit</h3>
          <span className="text-[10px] text-gray-500 font-bold uppercase">Audit Mode: Restricted</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-white/5">
                <th className="p-6 font-bold">Sales Source (Link ID)</th>
                <th className="p-6 font-bold">Purchased Product</th>
                <th className="p-6 font-bold text-right">Gross Sale</th>
                <th className="p-6 font-bold text-right">Commission Split</th>
                <th className="p-6 font-bold">Status</th>
                <th className="p-6 font-bold">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_SALES_ANONYMIZED.map((sale) => (
                <tr key={sale.id} className="hover:bg-white/2 transition-colors">
                  <td className="p-6 text-xs font-mono text-indigo-400">{sale.linkId}</td>
                  <td className="p-6 text-sm font-bold text-white">{sale.product}</td>
                  <td className="p-6 text-sm font-bold text-white text-right">${sale.price}</td>
                  <td className="p-6 text-sm font-bold text-indigo-400 text-right">${sale.commission}</td>
                  <td className="p-6">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      sale.status === 'PAID' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {sale.status === 'PAID' ? 'DISBURSED' : 'PROCESSING'}
                    </span>
                  </td>
                  <td className="p-6 text-xs text-gray-500 font-mono">{sale.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; trend: string }> = ({ icon, label, value, trend }) => (
  <div className="glass p-6 rounded-2xl">
    <div className="flex items-center justify-between mb-4">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 shadow-inner">
        {icon}
      </div>
      <span className="text-[10px] font-bold text-gray-500 uppercase">{trend}</span>
    </div>
    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</p>
    <p className="text-2xl font-bold text-white mt-1 tabular-nums">{value}</p>
  </div>
);

export default ProductOwnerDashboard;
