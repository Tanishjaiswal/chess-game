import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PlayCircle, Trophy, Users } from 'lucide-react';
import { ACTIVE_GAMES, GLOBAL_MASTERS } from '../constants';

export const Lobby: React.FC<{ onPlayNow: () => void }> = ({ onPlayNow }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-16"
    >
      {/* Hero Section */}
      <section className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 z-10">
            <span className="font-label uppercase tracking-[0.3em] text-[10px] text-secondary mb-4 block">
              Current Season: Grandmaster's Study
            </span>
            <h2 className="font-headline text-5xl md:text-7xl mb-6 italic leading-none">
              Elevate Your Strategy
            </h2>
            <p className="text-on-surface-variant font-body text-lg mb-8 max-w-md leading-relaxed">
              Engage in silent warfare. Every move is a story, every game a masterpiece waiting to be curated.
            </p>
            <button 
              onClick={onPlayNow}
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-md font-bold tracking-tight transition-all duration-300 active:scale-95"
            >
              <span className="font-label uppercase tracking-widest text-sm">Play Now</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
          <div className="md:col-span-5 relative aspect-square">
            <div className="absolute inset-0 bg-surface-container-low rounded-2xl transform rotate-3 scale-95 opacity-50" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-outline-variant/10 shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA6aFvq5R9nJy1dFR79PEb373m27vTnmtWOkGHFdlJwrFzKE8KBIUONfYCBJeCwJ35xe4B8Y2jZFuMJYSqkqBAI_gbwYWI7sKE-x0ym-SEZnTGcD_8rp4tSTrWBEafaS8YcwLkd9CrujTveg_IprpvDAZXLl0yAnKP1Ha283lkREtn2bGuzoNll9rEp8tNmb3LAlO_pA1gP8-KhqQC0e08QbkSL5tKrSypKjRsVfqZXgYstBiyOUlpXYUYOoYqwiTvmwLMLgnv0fy5" 
                alt="Chess"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Stats & Puzzles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Daily Puzzle */}
        <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <PuzzleIcon size={120} className="text-on-surface" />
          </div>
          <div className="flex-1 z-10">
            <span className="font-label uppercase tracking-widest text-[10px] text-primary mb-2 block">Daily Puzzle</span>
            <h3 className="font-headline text-3xl mb-4 italic">The Sicilian Sacrifice</h3>
            <p className="text-on-surface-variant mb-6 font-body text-sm leading-relaxed max-w-xs">
              White to move and mate in three. 84% of masters solved this in under 2 minutes.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface px-6 py-2 rounded-md text-sm font-semibold transition-colors">
                Solve Now
              </button>
              <span className="text-secondary font-label text-xs tracking-wider">+15 ELO</span>
            </div>
          </div>
          <div className="w-full md:w-48 aspect-square rounded-lg bg-surface-container-highest border border-outline-variant/20 overflow-hidden relative">
            <img 
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATNMGkhjVmukZVapZQS51M4HmzYmNZmKslfzwKEwmsRNXmq2Yu_D4USu7r0rTfFq1D1U4lfV7vgdpSDsUrO9qRDPdeWIWx9k44udiPbrqxLizYz0EUTUn5iZbMG577GhuDeFrJYwUlbv1AiByj0_QqNWc3qLNQbMA_J52vn4TQc9SLuEXoLXHkiTAa17BfzXVh_-NB8u6H4vMoo6cr6ylTUJu-loepSlDAOMo6OEwwqwvJC8OWus_odAPlOaqz62q7fOCVzcyRFRfz" 
              alt="Puzzle"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="text-primary" size={48} />
            </div>
          </div>
        </div>

        {/* User Standing */}
        <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between border-l-2 border-secondary/30">
          <div>
            <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant mb-6 block">Your Standing</span>
            <div className="flex items-end gap-2 mb-1">
              <span className="font-headline text-5xl italic text-secondary">2140</span>
              <span className="font-label text-xs text-primary mb-2">Peak</span>
            </div>
            <span className="text-on-surface-variant text-sm font-body">Global Rank #1,204</span>
          </div>
          <div className="space-y-3 mt-8">
            <div className="flex justify-between items-center text-sm">
              <span className="text-outline">Win Rate</span>
              <span className="font-bold text-primary">64.2%</span>
            </div>
            <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[64%] transition-all duration-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* Active Games & Leaderboard */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Active Games */}
        <div className="md:col-span-8">
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-headline text-3xl italic">Active Games</h4>
            <span className="font-label text-[10px] uppercase tracking-widest text-outline">
              {ACTIVE_GAMES.length} Matches in Progress
            </span>
          </div>
          <div className="space-y-4">
            {ACTIVE_GAMES.map(game => (
              <div 
                key={game.id}
                className="flex items-center gap-6 p-6 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded bg-surface-container-highest flex items-center justify-center relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover opacity-60" 
                    src={game.opponent.avatar} 
                    alt={game.opponent.name}
                  />
                  <span className="absolute inset-0 flex items-center justify-center font-headline text-2xl text-on-surface">
                    {game.opponent.name[0]}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-headline text-xl">{game.opponent.name}</span>
                    {game.isYourTurn && <span className="text-secondary text-sm font-bold">Your Turn</span>}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-outline font-label uppercase tracking-tighter">
                    <span>{game.type}</span>
                    <span className="w-1 h-1 rounded-full bg-outline/30" />
                    <span>{game.moves} Moves Played</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-label text-lg font-bold tabular-nums">{game.timeRemaining}</div>
                  <div className="text-[10px] text-outline uppercase tracking-widest">Remaining</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="md:col-span-4">
          <div className="bg-surface-container-low rounded-xl p-8 h-full border border-outline-variant/5">
            <h4 className="font-headline text-2xl mb-8 italic">Global Masters</h4>
            <div className="space-y-6">
              {GLOBAL_MASTERS.map(master => (
                <div key={master.rank} className="flex items-center gap-4">
                  <span className={`font-headline text-2xl italic w-6 ${master.rank === 1 ? 'text-secondary' : 'text-on-surface/50'}`}>
                    {master.rank}
                  </span>
                  <div className="flex-1">
                    <div className="font-body font-bold text-sm">{master.name}</div>
                    <div className="text-[10px] text-outline uppercase tracking-widest">{master.title}</div>
                  </div>
                  <span className="font-label font-bold text-primary">{master.rating}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-3 border border-outline-variant/20 rounded font-label text-[10px] uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
              View All Rankings
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PuzzleIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19.439 12.335c.536.312.536 1.018 0 1.33L12 18l-7.439-4.335c-.536-.312-.536-1.018 0-1.33L12 8l7.439 4.335z" />
    <path d="M12 22v-4" />
    <path d="M12 8V2" />
  </svg>
);
