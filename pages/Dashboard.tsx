
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, ShoppingBag, ArrowUpRight, ArrowDownRight, Zap } from 'lucide-react';
// Import MOCK_USER_MARKETER instead of MOCK_USER
import { MOCK_USER_MARKETER } from '../constants';
import { getGrowthStrategy } from '../services/geminiService';

const data = [
  { name: 'Mon', selling: 400, percentage: 240 },
  { name: 'Tue', selling: 300, percentage: 139 },
  { name: 'Wed', selling: 900, percentage: 980 },
  { name: 'Thu', selling: 390, percentage: 390 },
  { name: 'Fri', selling: 480, percentage: 480 },
  { name: 'Sat', selling: 700, percentage: 380 },
  { name: 'Sun', selling: 1100, percentage: 430 },
];

const Dashboard: React.FC = () => {
  const [aiStrategy, setAiStrategy] = useState<string>("Analyzing your performance...");

  useEffect(() => {
    const fetchStrategy = async () => {
      // Use MOCK_USER_MARKETER for analytics insights
      const strategy = await getGrowthStrategy(MOCK_USER_MARKETER.walletBalance, 12);
      setAiStrategy(strategy);
    };
    fetchStrategy();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Welcome & AI Insight */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Power Dashboard</h1>
          {/* Welcome the user with MOCK_USER_MARKETER details */}
          <p className="text-gray-400">Welcome back, {MOCK_USER_MARKETER.name}. Your network is growing.</p>
        </div>
        <div className="max-w-md p-4 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex gap-4 items-start shadow-[0_0_30px_rgba(99,102,241,0.1)]">
          <div className="mt-1 bg-indigo-500 rounded-full p-1 text-white shadow-lg shadow-indigo-500/50">
            <Zap size={14} fill="currentColor" />
          </div>
          <div>
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">AI Growth Insight</p>
            <p className="text-sm text-gray-200 italic leading-relaxed">"{aiStrategy}"</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<DollarSign className="text-emerald-400" />} 
          label="Selling Income" 
          value="$1,245.50" 
          trend="+12.5%" 
          trendUp={true} 
        />
        <StatCard 
          icon={<Zap className="text-indigo-400" />} 
          label="Percentage Income" 
          value="$842.20" 
          trend="+5.2%" 
          trendUp={true} 
        />
        <StatCard 
          icon={<Users className="text-blue-400" />} 
          label="Direct Referrals" 
          value="48" 
          trend="-2.1%" 
          trendUp={false} 
        />
        <StatCard 
          icon={<ShoppingBag className="text-purple-400" />} 
          label="Total Orders" 
          value="156" 
          trend="+8.4%" 
          trendUp={true} 
        />
      </div>

      {/* Main Chart */}
      <div className="glass p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-bold text-white">Earnings Analytics</h3>
            <p className="text-xs text-gray-500">Weekly breakdown of direct vs override income</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
              <span className="text-xs text-gray-400">Selling</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-xs text-gray-400">Overrides</span>
            </div>
          </div>
        </div>
        
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSelling" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPercentage" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#64748b', fontSize: 12}} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#64748b', fontSize: 12}}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                itemStyle={{ fontSize: '12px' }}
              />
              <Area 
                type="monotone" 
                dataKey="selling" 
                stroke="#6366f1" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorSelling)" 
              />
              <Area 
                type="monotone" 
                dataKey="percentage" 
                stroke="#a855f7" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorPercentage)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Recent Sales</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden">
                  <img src={`https://picsum.photos/seed/s${i}/100/100`} alt="prod" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">Quantum X Headset</p>
                  <p className="text-xs text-gray-500">2 mins ago • SKU-00{i}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">$14.50</p>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold uppercase tracking-tighter">CONFIRMED</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Top Performers in Downline</h3>
          <div className="space-y-4">
            {['Sarah Jenkins', 'Mike Ross', 'Luna Lovegood', 'Steve Rogers'].map((name, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5">
                <div className="w-10 h-10 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-sm">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-gray-500">Level {i + 1} • {12 - i} sales this week</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-indigo-400">+$240.00</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Override</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  trend: string; 
  trendUp: boolean 
}> = ({ icon, label, value, trend, trendUp }) => (
  <div className="glass p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shadow-inner">
        {icon}
      </div>
      <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${trendUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
        {trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {trend}
      </div>
    </div>
    <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">{label}</p>
    <p className="text-2xl font-bold text-white mt-1 tabular-nums tracking-tight">{value}</p>
  </div>
);

export default Dashboard;
