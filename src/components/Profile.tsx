import React from 'react';
import { motion } from 'motion/react';
import { Trophy, XCircle, BarChart2, Eye, ArrowRight } from 'lucide-react';
import { MATCH_HISTORY } from '../constants';

export const Profile: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-12"
    >
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
        <div className="flex-1">
          <span className="font-label text-xs tracking-widest text-secondary uppercase mb-2 block">Grandmaster Rank</span>
          <h2 className="font-headline text-6xl md:text-8xl font-light italic leading-tight">Julian<br/>Vance</h2>
        </div>
        <div className="flex flex-col gap-4 text-right">
          <div className="flex items-center justify-end gap-2">
            <span className="font-label text-xs text-outline tracking-tighter">MEMBER SINCE</span>
            <span className="font-body font-bold text-on-surface">OCT 2021</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <span className="font-label text-xs text-outline tracking-tighter">GLOBAL RANK</span>
            <span className="font-body font-bold text-secondary">#1,402</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Rating Cards */}
        <div className="md:col-span-4 grid grid-cols-1 gap-4">
          <RatingCard label="Blitz" rating={2482} change="+12 Today" color="primary" progress={75} />
          <RatingCard label="Rapid" rating={2315} change="-4 Today" color="error" progress={50} />
          <RatingCard label="Bullet" rating={2504} change="Peak" color="primary" progress={100} />
        </div>

        {/* Rating Velocity Chart */}
        <div className="md:col-span-8 bg-surface-container-low p-8 relative overflow-hidden rounded-xl">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="font-headline text-2xl italic mb-1">Rating Velocity</h3>
              <p className="font-label text-xs text-outline">Performance metrics over the last 30 days</p>
            </div>
            <div className="flex gap-4">
              {['30D', '90D', '1Y'].map(t => (
                <button key={t} className={`font-label text-[10px] tracking-widest uppercase pb-1 ${t === '30D' ? 'text-secondary border-b border-secondary' : 'text-outline hover:text-on-surface'}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          
          {/* SVG Chart */}
          <div className="h-48 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#b5c8df" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#b5c8df" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path 
                d="M0,150 Q50,140 100,160 T200,130 T300,100 T400,110 T500,70 T600,85 T700,40 T800,50" 
                fill="none" 
                stroke="#b5c8df" 
                strokeWidth="3" 
              />
              <path 
                d="M0,150 Q50,140 100,160 T200,130 T300,100 T400,110 T500,70 T600,85 T700,40 T800,50 V200 H0 Z" 
                fill="url(#chartGradient)" 
              />
              <circle cx="500" cy="70" fill="#e9c349" r="4" />
              <circle cx="700" cy="40" fill="#b5c8df" r="4" />
            </svg>
            <div className="absolute top-10 left-[62.5%] -translate-x-1/2 glass-card px-3 py-1 rounded-full border border-white/5">
              <span className="font-label text-[10px] text-secondary">2482 ELO</span>
            </div>
          </div>

          <div className="grid grid-cols-4 mt-8 pt-8 border-t border-white/5">
            <StatItem label="Total Games" value="12,482" />
            <StatItem label="Win Rate" value="54.2%" />
            <StatItem label="Avg Accuracy" value="88.4" />
            <StatItem label="Win Streak" value="8" highlight />
          </div>
        </div>
      </div>

      {/* Tonal Balance & Recent Archive */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Tonal Balance */}
        <div className="md:col-span-3 bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
          <h3 className="font-headline text-xl italic mb-6">Tonal Balance</h3>
          <div className="space-y-6">
            <BalanceItem label="Victories" value="6.7k" color="primary" percent={54} />
            <BalanceItem label="Defeats" value="4.2k" color="outline" percent={34} />
            <BalanceItem label="Draws" value="1.5k" color="secondary" percent={12} />
          </div>
        </div>

        {/* Recent Archive */}
        <div className="md:col-span-9 bg-surface-container-low rounded-xl overflow-hidden">
          <div className="px-8 py-6 flex justify-between items-center border-b border-white/5">
            <h3 className="font-headline text-xl italic">Recent Archive</h3>
            <button className="font-label text-[10px] tracking-widest uppercase text-primary flex items-center gap-2 hover:underline">
              View Full Log <ArrowRight size={14} />
            </button>
          </div>
          <div className="divide-y divide-white/5">
            {MATCH_HISTORY.map(match => (
              <div key={match.id} className="px-8 py-5 flex items-center gap-8 hover:bg-surface-container transition-colors group">
                <div className="flex-shrink-0 w-12 flex flex-col items-center">
                  {match.result === 'win' && <Trophy className="text-primary" size={20} />}
                  {match.result === 'loss' && <XCircle className="text-error" size={20} />}
                  {match.result === 'draw' && <BarChart2 className="text-outline" size={20} />}
                  <span className={`font-label text-[10px] mt-1 ${match.result === 'win' ? 'text-primary' : match.result === 'loss' ? 'text-error' : 'text-outline'}`}>
                    {match.eloChange > 0 ? `+${match.eloChange}` : match.eloChange}
                  </span>
                </div>
                <div className="flex-1 flex items-center gap-4">
                  {match.opponentAvatar ? (
                    <img className="w-8 h-8 rounded-full" src={match.opponentAvatar} alt={match.opponent} />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-xs font-bold text-on-secondary">
                      {match.opponent[0]}
                    </div>
                  )}
                  <div>
                    <p className="font-body font-bold text-sm">{match.opponent}</p>
                    <p className="font-label text-[10px] text-outline uppercase">{match.type}</p>
                  </div>
                </div>
                <div className="flex-1 hidden md:flex gap-1">
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[10px] text-on-surface-variant">{match.opening}</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[10px] text-on-surface-variant">{match.moves} Moves</span>
                </div>
                <div className="text-right">
                  <p className="font-body text-xs text-outline mb-1">{match.time}</p>
                  <Eye className="text-on-surface-variant cursor-pointer hover:text-primary ml-auto" size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const RatingCard = ({ label, rating, change, color, progress }: any) => (
  <div className="bg-surface-container-low p-6 flex justify-between items-center group hover:bg-surface-container transition-all duration-300 rounded-xl">
    <div>
      <p className="font-label text-[10px] tracking-widest text-outline uppercase mb-1">{label}</p>
      <p className="font-headline text-3xl italic">{rating}</p>
    </div>
    <div className="text-right">
      <span className={`text-xs font-bold ${color === 'error' ? 'text-error' : 'text-primary'}`}>{change}</span>
      <div className="w-16 h-1 bg-surface-container-highest mt-2 overflow-hidden rounded-full">
        <div className={`h-full ${color === 'error' ? 'bg-secondary' : 'bg-primary'} transition-all duration-1000`} style={{ width: `${progress}%` }} />
      </div>
    </div>
  </div>
);

const StatItem = ({ label, value, highlight }: any) => (
  <div>
    <p className="font-label text-[10px] tracking-widest text-outline uppercase mb-1">{label}</p>
    <p className={`font-body text-xl font-bold ${highlight ? 'text-secondary' : ''}`}>{value}</p>
  </div>
);

const BalanceItem = ({ label, value, color, percent }: any) => (
  <div className="flex items-center gap-4">
    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold ${
      color === 'primary' ? 'border-primary text-primary' : 
      color === 'secondary' ? 'border-secondary/30 text-secondary' : 
      'border-surface-container-highest text-on-surface'
    }`}>
      {value}
    </div>
    <div className="flex-1">
      <p className="font-label text-[10px] tracking-widest text-outline uppercase">{label}</p>
      <div className="w-full h-1 bg-surface-container-highest mt-1 rounded-full overflow-hidden">
        <div className={`h-full ${
          color === 'primary' ? 'bg-primary' : 
          color === 'secondary' ? 'bg-secondary' : 
          'bg-surface-variant'
        }`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  </div>
);
