export type View = 'lobby' | 'puzzles' | 'study' | 'profile' | 'game';

export interface Game {
  id: string;
  opponent: {
    name: string;
    avatar: string;
    rating: number;
    rank: string;
  };
  type: string;
  moves: number;
  timeRemaining: string;
  isYourTurn: boolean;
}

export interface Master {
  rank: number;
  name: string;
  title: string;
  rating: number;
}

export interface Puzzle {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  elo: number;
  successRate: string;
  image: string;
  featured?: boolean;
}

export interface MatchHistory {
  id: string;
  opponent: string;
  opponentAvatar: string;
  type: string;
  result: 'win' | 'loss' | 'draw';
  eloChange: number;
  opening: string;
  moves: number;
  time: string;
}
