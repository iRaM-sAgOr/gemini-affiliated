
import React, { useState } from 'react';
import { Building2, Search, Filter, Sparkles, ExternalLink, Link as LinkIcon, Info } from 'lucide-react';
import { MOCK_COMPANIES } from '../constants';
import { getSmartProductInsights } from '../services/geminiService';

const Marketplace: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [insights, setInsights] = useState<any>(null);
  const [loadingInsights, setLoadingInsights] = useState(false);

  const fetchInsights = async (company: any) => {
    setSelectedCompany(company);
    setLoadingInsights(true);
    // Get insights based on company profile
    const data = await getSmartProductInsights(company.name, company.industry);
    setInsights(data);
    setLoadingInsights(false);
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Partner Directory</h1>
          <p className="text-gray-400">Promote entire companies and earn on their whole catalog.</p>
        </div>
        <div className="flex gap-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400 text-xs font-bold">
          <Info size={14} />
          <span>Commission flows through 5 network layers</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {MOCK_COMPANIES.map((company) => (
            <div 
              key={company.id} 
              className={`glass rounded-2xl overflow-hidden group transition-all duration-300 border-2 ${
                selectedCompany?.id === company.id ? 'border-indigo-500/50 scale-[0.98]' : 'border-transparent hover:border-white/10'
              }`}
            >
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-inner">
                  <img src={company.logoUrl} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{company.name}</h3>
                  <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest">{company.industry}</p>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">{company.description}</p>
                <div className="w-full grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-tighter">
                  <div className="bg-white/5 p-2 rounded-lg text-gray-400">2% Platform Pool</div>
                  <div className="bg-indigo-500/10 p-2 rounded-lg text-indigo-400">5-Lvl MLM Enabled</div>
                </div>
                <button 
                  onClick={() => fetchInsights(company)}
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
                >
                  <LinkIcon size={16} />
                  Promote Company
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-6 h-fit sticky top-28 space-y-6">
          {!selectedCompany ? (
            <div className="py-20 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 mx-auto flex items-center justify-center text-gray-600">
                <Building2 size={32} />
              </div>
              <div>
                <p className="text-white font-bold">Select a Partner</p>
                <p className="text-sm text-gray-500">Pick a company to generate your universal affiliate link and AI strategy.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="text-indigo-400" size={20} />
                  Strategy Assistant
                </h3>
              </div>

              {loadingInsights ? (
                <div className="py-12 flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
                  <p className="text-sm text-gray-400 italic">Analyzing {selectedCompany.name}...</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Growth Hooks</p>
                    <div className="space-y-3">
                      {insights?.hooks.map((hook: string, i: number) => (
                        <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                          "{hook}"
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Demographic Focus</p>
                    <p className="text-sm text-gray-300 leading-relaxed bg-white/5 p-3 rounded-lg">
                      {insights?.targetDemographic}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 space-y-4">
                    <p className="text-[10px] text-gray-500 font-bold uppercase">Your Universal Link</p>
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-between">
                      <span className="text-xs text-gray-400 font-mono truncate">affilia.mlm/c/{selectedCompany.id}-usr1</span>
                      <button className="text-indigo-400 hover:text-indigo-300 text-[10px] font-bold uppercase ml-2">Copy</button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
