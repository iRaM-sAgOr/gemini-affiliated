
import React from 'react';
import { Link as LinkIcon, Copy, Trash2, ExternalLink, QrCode } from 'lucide-react';

const AffiliateLinks: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">My Links</h1>
        <p className="text-gray-400">Track and manage your unique promotion paths.</p>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5 bg-white/2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-white">Active Campaigns</h3>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-bold transition-all">
              Create New Link
            </button>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-5 rounded-2xl border border-white/5 hover:border-indigo-500/30 bg-white/2 transition-all group">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-white/5 overflow-hidden flex-shrink-0">
                  <img src={`https://picsum.photos/seed/l${i}/100/100`} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-white">Holiday Tech Promo - Product {i}</h4>
                    <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase">Active</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 bg-slate-900/50 rounded-lg border border-white/5 w-fit max-w-full">
                    <LinkIcon size={14} className="text-gray-500 flex-shrink-0" />
                    <span className="text-xs text-gray-400 truncate font-mono">https://affilia.mlm/x/usr1-campaign-00{i}-v2</span>
                    <button className="text-indigo-400 hover:text-indigo-300 ml-2">
                      <Copy size={14} />
                    </button>
                  </div>
                  <div className="flex items-center gap-6 pt-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="text-white font-bold">{i * 12 + 4}</span> clicks
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="text-emerald-500 font-bold">{i + 2}</span> conversions
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="text-indigo-400 font-bold">{((i+2)/(i*12+4)*100).toFixed(1)}%</span> rate
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col gap-2">
                  <button className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all" title="View Stats">
                    <ExternalLink size={18} />
                  </button>
                  <button className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all" title="QR Code">
                    <QrCode size={18} />
                  </button>
                  <button className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all" title="Delete">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffiliateLinks;
