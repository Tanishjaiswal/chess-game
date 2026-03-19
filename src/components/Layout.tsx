import React from 'react';
import { LayoutGrid, Puzzle as PuzzleIcon, BookOpen, User, Settings } from 'lucide-react';
import { View } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onViewChange: (view: View) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onViewChange }) => {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body pb-24 md:pb-0 md:pl-0">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant/20 overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr-t1jr8SVZgIcPiIN8OamLvm4GK0lzxufnU_gHqJl8KK4d0RvVEoeAlXfu4cc9sAdJ5SxTv7l7Pq7oRpzQTXeArkPDu7rz4dPKUoqt_l4J52JmyKOk8Vv6sQqG9uG2ohnd06SE19vCw9zABhX0aU00yvF0-HLMFRMjUOH-ndkE9c5YIMgvQajynkxT-eHLLo0x8C0H9Q2m0LP_-NC6mzKLm6zn0lBBHL3zNR99RCjkYBW8KPLOhpPv3j5hVvUC8DAy1rWCw6BQet_" 
              alt="User"
            />
          </div>
          <h1 className="font-headline italic text-primary text-2xl tracking-tight">The Curator</h1>
        </div>
        <button className="text-primary hover:bg-surface-container-low p-2 rounded-lg transition-colors">
          <Settings size={24} />
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-background/90 backdrop-blur-2xl z-50 border-t border-white/5 md:hidden">
        <NavItem 
          icon={<LayoutGrid size={24} />} 
          label="Lobby" 
          active={currentView === 'lobby'} 
          onClick={() => onViewChange('lobby')} 
        />
        <NavItem 
          icon={<PuzzleIcon size={24} />} 
          label="Puzzles" 
          active={currentView === 'puzzles'} 
          onClick={() => onViewChange('puzzles')} 
        />
        <NavItem 
          icon={<BookOpen size={24} />} 
          label="Study" 
          active={currentView === 'study'} 
          onClick={() => onViewChange('study')} 
        />
        <NavItem 
          icon={<User size={24} />} 
          label="Profile" 
          active={currentView === 'profile'} 
          onClick={() => onViewChange('profile')} 
        />
      </nav>

      {/* Side Nav (Desktop - Optional but good for layout) */}
      {/* For now keeping it simple with bottom nav for mobile and top bar for all */}
    </div>
  );
};

const NavItem: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  active: boolean; 
  onClick: () => void;
}> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center gap-1 px-4 py-1 rounded-xl transition-all active:scale-90 ${
      active ? 'text-secondary bg-white/5' : 'text-on-surface opacity-50 hover:opacity-100'
    }`}
  >
    {icon}
    <span className="font-label uppercase tracking-widest text-[10px] font-semibold">{label}</span>
  </button>
);
