import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, SortDesc, TrendingUp, ArrowRight } from 'lucide-react';
import { PUZZLES } from '../constants';

export const Puzzles: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="font-label text-secondary uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Tactical Refinement</span>
          <h2 className="font-headline italic text-5xl md:text-7xl text-on-surface leading-tight mb-6">Master the Art of the Exchange</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed font-light">Explore our curated collection of over 50,000 puzzles. From the subtle endgame squeeze to the explosive kingside sacrifice.</p>
        </div>
        <div className="w-full md:w-80 space-y-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search themes (e.g. Pin, Fork)"
              className="w-full bg-surface-container-lowest text-on-surface border-none rounded-xl py-4 pl-12 pr-4 focus:ring-1 focus:ring-primary/20 placeholder:text-outline/50 transition-all font-body text-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={18} />
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-surface-container-high hover:bg-surface-container-highest transition-colors py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase">
              <Filter size={16} /> Filter
            </button>
            <button className="flex-1 bg-surface-container-high hover:bg-surface-container-highest transition-colors py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase">
              <SortDesc size={16} /> Sort
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Featured Puzzle */}
        <div className="md:col-span-8 group cursor-pointer">
          <div className="bg-surface-container-low rounded-xl overflow-hidden relative border border-outline-variant/10">
            <div className="flex flex-col lg:flex-row h-full">
              {/* Board Preview */}
              <div className="w-full lg:w-1/2 aspect-square p-8 bg-surface-container-lowest">
                <div className="grid grid-cols-8 grid-rows-8 w-full h-full rounded shadow-2xl overflow-hidden border-4 border-surface-container-high">
                  {Array.from({ length: 64 }).map((_, i) => {
                    const row = Math.floor(i / 8);
                    const col = i % 8;
                    const isDark = (row + col) % 2 === 1;
                    return (
                      <div 
                        key={i} 
                        className={`${isDark ? 'bg-primary-container' : 'bg-tertiary-fixed-dim'} relative`}
                      >
                        {isDark && <div className="absolute inset-0 opacity-10 radial-pattern" />}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Info */}
              <div className="p-8 flex flex-col justify-between lg:w-1/2 bg-surface-container-low">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase">Featured</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px] font-bold tracking-widest uppercase">Expert</span>
                  </div>
                  <h3 className="font-headline italic text-3xl text-on-surface mb-2">The Sicilian Trap</h3>
                  <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">A high-stakes tactical sequence from the 1974 Championship. Black to move and find the crushing blow.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                    <span className="text-outline text-[10px] uppercase tracking-widest">Difficulty</span>
                    <span className="text-secondary font-headline italic text-2xl">2150 ELO</span>
                  </div>
                  <div className="flex justify-between items-end pb-4">
                    <span className="text-outline text-[10px] uppercase tracking-widest">Success Rate</span>
                    <span className="text-on-surface font-headline italic text-2xl">14.2%</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl group-hover:shadow-lg transition-all active:scale-95">
                    SOLVE PUZZLE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-surface-container rounded-xl p-6 border border-outline-variant/5">
            <h4 className="font-label text-on-surface uppercase tracking-widest text-xs font-bold mb-6">Quick Filters</h4>
            <div className="grid grid-cols-1 gap-3">
              <FilterItem label="Easy Challenge" count="1.2k+" color="bg-green-500" />
              <FilterItem label="Medium Pursuit" count="Current" color="bg-secondary" active />
              <FilterItem label="Grandmaster Hard" count="432" color="bg-error" />
            </div>
          </div>

          <div className="bg-primary-container/20 rounded-xl p-6 border border-primary/10 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-headline italic text-2xl text-primary mb-2">Puzzle Streak</h4>
              <p className="text-on-primary-container text-xs uppercase tracking-[0.2em] font-bold mb-4">Current High: 14</p>
              <button className="text-primary font-bold text-xs tracking-widest uppercase hover:underline flex items-center gap-1">
                View History <ArrowRight size={12} />
              </button>
            </div>
            <TrendingUp className="absolute -right-4 -bottom-4 text-8xl text-primary opacity-5 rotate-12" size={120} />
          </div>
        </div>

        {/* Puzzle List */}
        <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {PUZZLES.map(puzzle => (
            <div key={puzzle.id} className="bg-surface-container-low rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer group p-5">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded bg-surface-container-lowest flex-shrink-0 p-2 border border-outline-variant/5">
                  <div className="grid grid-cols-4 grid-rows-4 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className={(Math.floor(i / 4) + (i % 4)) % 2 === 1 ? 'bg-primary-container' : 'bg-tertiary-fixed-dim'} />
                    ))}
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-headline italic text-xl text-on-surface">{puzzle.title}</h5>
                      <span className="text-outline font-label text-[10px] mt-1">#{puzzle.id}</span>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${
                      puzzle.difficulty === 'Hard' ? 'text-error' : 
                      puzzle.difficulty === 'Medium' ? 'text-secondary' : 'text-primary'
                    }`}>
                      {puzzle.difficulty} • {puzzle.elo} ELO
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-outline text-[10px] uppercase font-bold tracking-widest">Success {puzzle.successRate}</span>
                    <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const FilterItem = ({ label, count, color, active }: any) => (
  <button className={`flex items-center justify-between p-4 bg-surface-container-low rounded-xl border transition-all group ${
    active ? 'border-primary/40' : 'border-transparent hover:border-primary/20'
  }`}>
    <div className="flex items-center gap-3">
      <span className={`w-2 h-2 rounded-full ${color}`} />
      <span className={`font-body text-sm font-medium ${active ? 'text-secondary' : ''}`}>{label}</span>
    </div>
    <span className={`${active ? 'text-secondary' : 'text-outline'} text-xs font-medium`}>{count}</span>
  </button>
);
