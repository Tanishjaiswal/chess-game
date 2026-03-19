import { useState } from 'react';
import { Layout } from './components/Layout';
import { Lobby } from './components/Lobby';
import { Profile } from './components/Profile';
import { Puzzles } from './components/Puzzles';
import { Game } from './components/Game';
import { View } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('lobby');

  const renderView = () => {
    switch (currentView) {
      case 'lobby':
        return <Lobby onPlayNow={() => setCurrentView('game')} />;
      case 'profile':
        return <Profile />;
      case 'puzzles':
        return <Puzzles />;
      case 'game':
        return <Game />;
      default:
        return <Lobby onPlayNow={() => setCurrentView('game')} />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </Layout>
  );
}
