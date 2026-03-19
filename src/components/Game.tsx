import React from 'react';
import { motion } from 'motion/react';
import { Handshake, Flag, Eye, EyeOff } from 'lucide-react';

export const Game: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-[calc(100vh-140px)] flex flex-col md:flex-row gap-8 lg:gap-16 items-center lg:items-start justify-center"
    >
      {/* Left Column: The Board Area */}
      <section className="w-full max-w-[600px] flex flex-col gap-6">
        {/* Opponent Profile */}
        <div className="flex justify-between items-end pb-2">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-surface-container-high rounded-md overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASMasc_8TKkzBYWNqtDHjNh0-gXfpbNx03EAa9tADlPnC9vPHg80CYUEuR_C6o2tDYBa_tGGZZlXauDFe3Q_Pd65uYjQyZIFZvKHooQlE0CA8wL4o8wsd6ZZHdRRAvlQHMiz5QsHdi3yoT9KufqM-LF8wvrbSLAcvjFcpoSVaRkRWeSMxHqseuMPRmJcspnHgRvb-tFD7HYLrkyDWZ70mqS5Ltbe9nP9mVQTyZhRYNtNHiwOVU6oPZxQcGCZfUYtFOV6kPlKDdkbTi" 
                  alt="Opponent"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-background" />
            </div>
            <div>
              <h2 className="font-headline text-xl text-on-surface">Elena V.</h2>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-[10px] font-bold tracking-tighter text-outline uppercase">Grandmaster</span>
                <span className="font-label text-sm text-primary">2418</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-headline text-3xl font-light tabular-nums tracking-tighter">08:42</div>
            <span className="text-[10px] font-bold text-outline uppercase tracking-[0.2em]">Remaining</span>
          </div>
        </div>

        {/* The Chess Board */}
        <div className="relative aspect-square w-full shadow-2xl overflow-hidden rounded-sm group">
          {/* Advantage Bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10 flex flex-col">
            <div className="h-[45%] bg-on-surface transition-all duration-700" />
            <div className="h-[55%] bg-surface-container-highest transition-all duration-700 blur-[1px]" />
          </div>
          {/* Main Board */}
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full border-4 border-surface-container-low">
            {Array.from({ length: 64 }).map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              const isDark = (row + col) % 2 === 1;
              return (
                <div 
                  key={i} 
                  className={`${isDark ? 'bg-primary-container' : 'bg-tertiary-fixed-dim'} flex items-center justify-center relative`}
                >
                  {/* Pieces (Simplified representation) */}
                  {row < 2 && <Piece isWhite={false} type={getPieceType(row, col)} />}
                  {row > 5 && <Piece isWhite={true} type={getPieceType(7 - row, col)} />}
                  
                  {/* Active selection glow */}
                  {row === 4 && col === 1 && (
                    <div className="absolute inset-0 bg-primary opacity-20 animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Player Profile */}
        <div className="flex justify-between items-start pt-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-md overflow-hidden ring-2 ring-primary/20">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXTNZ_vFdwrklR7mtPXRJ7BUNNFOEj09YzzYsHq87oeFP4g1ZoVRoND_21ld5suk7o3C3uYQxo5EWg0zD82fny9ZrZe3QNcmI9udxaTDBozSCVgvlBVmJekvvAlI20SLZMBwDMFkBuEy6Kb9x9DbZ3eZqUIkjvu2fE36m64-ej5c4dRsocmmIRPBXzsqhS8YeQODVSctdyGWXkRj4POgUZWUoZ_iWX8MSV6oLo-VcfBF3zmDqKN_JCyDIhONrQdT5qV7oL6j0M0MXO" 
                alt="You"
              />
            </div>
            <div>
              <h2 className="font-headline text-xl text-on-surface">You</h2>
              <div className="flex items-center gap-2">
                <span className="font-label text-sm text-primary">2395</span>
                <div className="flex gap-0.5 opacity-50">
                  <span className="text-xs">♟️</span>
                  <span className="text-xs">♟️</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-headline text-3xl font-bold tabular-nums tracking-tighter text-secondary">12:05</div>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Active Turn</span>
          </div>
        </div>
      </section>

      {/* Right Column: Move List & Actions */}
      <aside className="w-full lg:w-80 flex flex-col gap-8">
        <div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-bold text-outline uppercase tracking-[0.2em]">Live PGN</span>
            <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">Blitz 15+0</span>
          </div>
          <div className="max-h-[300px] overflow-y-auto space-y-1 pr-2 custom-scrollbar">
            <MoveRow num={1} white="e4" black="e5" />
            <MoveRow num={2} white="Nf3" black="Nc6" active />
            <MoveRow num={3} white="Bb5" black="a6" />
            <MoveRow num={4} white="Ba4" black="Nf6" active />
            <MoveRow num={5} white="O-O" black="Be7" />
            <MoveRow num={6} white="Re1" black="..." highlight />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 py-4 rounded-xl border border-outline-variant hover:bg-surface-container-high transition-all text-on-surface group">
            <Handshake size={18} className="group-hover:scale-110 transition-transform" />
            <span className="font-label text-sm uppercase tracking-widest font-semibold">Offer Draw</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-4 rounded-xl border border-error/30 hover:bg-error-container/20 transition-all text-error group">
            <Flag size={18} className="group-hover:scale-110 transition-transform" />
            <span className="font-label text-sm uppercase tracking-widest font-semibold">Resign</span>
          </button>
        </div>

        <div className="mt-auto pt-8">
          <div className="p-4 rounded-xl border border-primary/10 bg-primary/5 flex items-center gap-4">
            <div className="bg-primary/20 p-2 rounded-lg">
              <EyeOff size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-primary">Zen Mode Active</p>
              <p className="text-[10px] text-outline">Chat and notifications are hidden to maximize focus.</p>
            </div>
          </div>
        </div>
      </aside>
    </motion.div>
  );
};

const MoveRow = ({ num, white, black, active, highlight }: any) => (
  <div className={`grid grid-cols-5 py-1.5 border-b border-white/5 ${active ? 'bg-surface-container-highest/20 px-1 -mx-1 rounded' : ''}`}>
    <span className="col-span-1 text-[10px] font-bold text-outline">{num}</span>
    <span className={`col-span-2 font-body text-sm ${highlight ? 'text-primary font-bold' : 'text-on-surface'}`}>{white}</span>
    <span className={`col-span-2 font-body text-sm ${black === '...' ? 'text-outline italic' : 'text-on-surface'}`}>{black}</span>
  </div>
);

const getPieceType = (row: number, col: number) => {
  if (row === 1) return 'pawn';
  const types = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
  return types[col];
};

const Piece = ({ isWhite, type }: { isWhite: boolean, type: string }) => {
  return (
    <span 
      className={`material-symbols-outlined text-4xl ${isWhite ? 'text-on-surface' : 'text-surface-container-lowest'}`}
      style={{ fontVariationSettings: `'FILL' ${isWhite ? 1 : 0}` }}
    >
      chess_{type}
    </span>
  );
};
