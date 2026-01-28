
import React from 'react';
import { Users, UserPlus, ChevronRight, TrendingUp, Award, Search } from 'lucide-react';

const MOCK_TEAM = [
  { id: 'u2', name: 'Sarah Jenkins', level: 1, referrals: 12, sales: 4500, avatar: 'SJ' },
  { id: 'u3', name: 'Mike Ross', level: 1, referrals: 5, sales: 1200, avatar: 'MR' },
  { id: 'u4', name: 'Luna Lovegood', level: 2, parent: 'Sarah Jenkins', referrals: 8, sales: 3100, avatar: 'LL' },
  { id: 'u5', name: 'Steve Rogers', level: 2, parent: 'Sarah Jenkins', referrals: 2, sales: 850, avatar: 'SR' },
  { id: 'u6', name: 'Peter Parker', level: 3, parent: 'Luna Lovegood', referrals: 1, sales: 250, avatar: 'PP' },
];

const TeamTree: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Team Network</h1>
          <p className="text-gray-400">Visualize your 5-level MLM hierarchy and overrides.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-sm transition-all shadow-lg shadow-indigo-600/20">
          <UserPlus size={18} />
          Invite Marketer
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <StatMiniCard icon={<Users />} label="Total Network" value="124" />
          <StatMiniCard icon={<TrendingUp />} label="Team Volume" value="$45,200" />
          <StatMiniCard icon={<Award />} label="Rank" value="Gold Producer" />
          
          <div className="glass p-6 rounded-2xl space-y-4">
            <h4 className="text-sm font-bold text-white">Network Filter</h4>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input 
                type="text" 
                placeholder="Find a member..." 
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm outline-none focus:border-indigo-500/50"
              />
            </div>
            <div className="space-y-2">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Levels</p>
              {[1, 2, 3, 4, 5].map((lvl) => (
                <label key={lvl} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 rounded border border-white/20 group-hover:border-indigo-500 transition-colors"></div>
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Level {lvl}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="glass rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Hierarchy Explorer</h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Active</span>
                <span className="flex items-center gap-1 ml-3"><div className="w-2 h-2 rounded-full bg-slate-600"></div> Idle</span>
              </div>
            </div>
            <div className="p-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-white/5">
                    <th className="pb-4 font-bold">Member</th>
                    <th className="pb-4 font-bold">Level</th>
                    <th className="pb-4 font-bold">Upline</th>
                    <th className="pb-4 font-bold text-right">Volume</th>
                    <th className="pb-4 font-bold text-right">Overrides</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {MOCK_TEAM.map((member) => (
                    <tr key={member.id} className="group hover:bg-white/5 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs border border-white/5">
                            {member.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{member.name}</p>
                            <p className="text-[10px] text-emerald-500 font-bold uppercase">{member.referrals} referrals</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          member.level === 1 ? 'bg-indigo-500/10 text-indigo-400' :
                          member.level === 2 ? 'bg-purple-500/10 text-purple-400' :
                          'bg-pink-500/10 text-pink-400'
                        }`}>
                          LVL {member.level}
                        </span>
                      </td>
                      <td className="py-4 text-xs text-gray-400">
                        {member.parent || 'Direct'}
                      </td>
                      <td className="py-4 text-right tabular-nums text-sm font-bold text-white">
                        ${member.sales.toLocaleString()}
                      </td>
                      <td className="py-4 text-right tabular-nums text-sm font-bold text-indigo-400">
                        ${(member.sales * 0.005).toFixed(2)}
                      </td>
                      <td className="py-4 text-right">
                        <button className="p-2 text-gray-600 hover:text-white transition-colors">
                          <ChevronRight size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-white/5 text-center">
              <button className="text-xs text-indigo-400 font-bold hover:underline">View Full Interactive Tree</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatMiniCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="glass p-4 rounded-2xl flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{label}</p>
      <p className="text-lg font-bold text-white tabular-nums">{value}</p>
    </div>
  </div>
);

export default TeamTree;
