import { Game, Master, Puzzle, MatchHistory } from './types';

export const ACTIVE_GAMES: Game[] = [
  {
    id: '1',
    opponent: {
      name: 'Magnus_C',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLKS0JIQS5SH8ACu4nP1MCNCgwcEbef25EyUsL3k4E5VC1V1BRGxTbvHfd8LsVVzjqHzDhtFd2WvkPPmHBAP2eR4oaNXj1DfG8EDTFs5GxvddJBHt46fEDmLw1f7F2eJ_BlQKPlJqUu87ZqAq-269yjBKx_OTMUeFTR0x7h1Hb407kPlzUilxeBuwAhrtt9E1qMET22S2_Y4iEfZ1KWNbrchL0RTBJJhZ_s0RsQNsXLEBRGDVYvGDGCA94rEvNiCnks8PZwgoGlrY2',
      rating: 2850,
      rank: 'Grandmaster'
    },
    type: 'Blitz 5|0',
    moves: 18,
    timeRemaining: '02:45',
    isYourTurn: true
  },
  {
    id: '2',
    opponent: {
      name: 'Elena_V',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnQNZXiq18NnuNWpNabqn1qAfXJj90-FN2P9fssFX9GuXpA0RUUHZhk5moNJuxPLamaS-vyEWRCpZb7aftNzfCPBQHdv1SDpZlv8I3o4Dmmptc8IUcZY_v7qhIgHEWhB1Olcbg3v8ouiL2YL8FscaHV9mJf72ASzDzbVWMXce9SPQTBpimsfGFkP19kILQAG0--4KRTS5IlzhxMAcRzfgp5kABdNi4Suu2poCUgm7EoGUcjUn8EONwNkPwzaVks6Thys4OajchRHZL',
      rating: 2418,
      rank: 'Grandmaster'
    },
    type: 'Rapid 15|10',
    moves: 42,
    timeRemaining: '08:12',
    isYourTurn: false
  }
];

export const GLOBAL_MASTERS: Master[] = [
  { rank: 1, name: 'Giri_Anish', title: 'The Strategist', rating: 2842 },
  { rank: 2, name: 'Naka_Hikaru', title: 'Speed King', rating: 2815 },
  { rank: 3, name: 'Fabiano_C', title: 'Classical Hero', rating: 2798 },
  { rank: 4, name: 'Pragg_R', title: 'The Prodigy', rating: 2780 }
];

export const PUZZLES: Puzzle[] = [
  {
    id: '1029',
    title: 'Mating Net',
    description: 'Find the subtle sequence to trap the king.',
    difficulty: 'Medium',
    elo: 1420,
    successRate: '68%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATNMGkhjVmukZVapZQS51M4HmzYmNZmKslfzwKEwmsRNXmq2Yu_D4USu7r0rTfFq1D1U4lfV7vgdpSDsUrO9qRDPdeWIWx9k44udiPbrqxLizYz0EUTUn5iZbMG577GhuDeFrJYwUlbv1AiByj0_QqNWc3qLNQbMA_J52vn4TQc9SLuEXoLXHkiTAa17BfzXVh_-NB8u6H4vMoo6cr6ylTUJu-loepSlDAOMo6OEwwqwvJC8OWus_odAPlOaqz62q7fOCVzcyRFRfz'
  },
  {
    id: '1032',
    title: 'Queen Sacrifice',
    description: 'A high-stakes tactical sequence from the 1974 Championship.',
    difficulty: 'Hard',
    elo: 2450,
    successRate: '4%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATNMGkhjVmukZVapZQS51M4HmzYmNZmKslfzwKEwmsRNXmq2Yu_D4USu7r0rTfFq1D1U4lfV7vgdpSDsUrO9qRDPdeWIWx9k44udiPbrqxLizYz0EUTUn5iZbMG577GhuDeFrJYwUlbv1AiByj0_QqNWc3qLNQbMA_J52vn4TQc9SLuEXoLXHkiTAa17BfzXVh_-NB8u6H4vMoo6cr6ylTUJu-loepSlDAOMo6OEwwqwvJC8OWus_odAPlOaqz62q7fOCVzcyRFRfz'
  },
  {
    id: '1041',
    title: "Knight's Dance",
    description: 'Use the knight to fork the major pieces.',
    difficulty: 'Easy',
    elo: 850,
    successRate: '91%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATNMGkhjVmukZVapZQS51M4HmzYmNZmKslfzwKEwmsRNXmq2Yu_D4USu7r0rTfFq1D1U4lfV7vgdpSDsUrO9qRDPdeWIWx9k44udiPbrqxLizYz0EUTUn5iZbMG577GhuDeFrJYwUlbv1AiByj0_QqNWc3qLNQbMA_J52vn4TQc9SLuEXoLXHkiTAa17BfzXVh_-NB8u6H4vMoo6cr6ylTUJu-loepSlDAOMo6OEwwqwvJC8OWus_odAPlOaqz62q7fOCVzcyRFRfz'
  }
];

export const MATCH_HISTORY: MatchHistory[] = [
  {
    id: '1',
    opponent: 'GM_Nakamura_Fan',
    opponentAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE51PLNTsjF6AdDo5gRHK7g0Zv4BfwuZL4R013xs-V9EQea2MhYhvyx1PdvvAW8qFpVpuSdOqZdhzqYD18jEvedoKv5wtxhvnE3jEKXf0bt_ISLze-k04PN6v6mq_gKTeAa3xBqv_aFCDsW4Nhf0B9jAM5A33nhYZMWRteMP-WYUGhg6h_eDqK-yOL7hf66bhbhCsyKZGXdQmBjwPeChUBUgM4d9toBggTVcYp-f47fMKyjquuJzX3UUPY7oWuUMlWJPOHA47ddHHy',
    type: 'Blitz • 3m + 2s',
    result: 'win',
    eloChange: 8,
    opening: 'Sicilian',
    moves: 42,
    time: '2 hours ago'
  },
  {
    id: '2',
    opponent: 'Anatoly_K',
    opponentAvatar: '',
    type: 'Rapid • 10m',
    result: 'draw',
    eloChange: 0,
    opening: 'Ruy Lopez',
    moves: 28,
    time: 'Yesterday'
  },
  {
    id: '3',
    opponent: 'Elena_Queens',
    opponentAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGjdxGFVfhVItJgOCG0W2qDuHy2S3iUcRm4_HVB6qLlxLIKD9dzKYgc2DGlPKPVFhI34kIAJDCQ1I0w3jnd7ijldBPrI_XLYlC0Ymqykv9HLlL-Hrr1a84qCLdNNPiDzTYnMTsDzwHySviZ7uetZwoW733S1hibUejeAXZD-4WQ5mtQ2yqIBSEChdftyvfqaFq6BqWyUWc6_zLUo4vyR39VfnFj_EQQNwPbuKFAfn6pX--cEVHneup5UZYB_EITcFQOu4dqZLByQnU',
    type: 'Bullet • 1m + 0s',
    result: 'loss',
    eloChange: -12,
    opening: 'English',
    moves: 64,
    time: '2 days ago'
  }
];
