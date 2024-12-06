export const GOJEK_COLORS = {
  primary: '#00AA13',
  secondary: '#1C1C1C',
  accent: '#FFE000',
  background: '#F6F6F6',
  success: '#00D215',
  error: '#FF4B4B',
} as const;

export const MOCK_MISSIONS = [
  {
    id: 1,
    title: 'Complete 3 GoRide trips',
    description: 'Take 3 motorcycle rides with GoRide today',
    points: 50,
    progress: 1,
    total: 3,
    icon: '🏍️',
  },
  {
    id: 2,
    title: 'Order GoFood',
    description: 'Place a food delivery order',
    points: 30,
    progress: 0,
    total: 1,
    icon: '🍜',
  },
  {
    id: 3,
    title: 'Pay with GoPay',
    description: 'Make 5 payments using GoPay',
    points: 75,
    progress: 3,
    total: 5,
    icon: '💳',
  },
] as const;

export const MOCK_CHALLENGES = [
  {
    id: 1,
    title: 'GoRide Champion',
    description: 'Complete 20 GoRide trips this week',
    points: 500,
    progress: 8,
    total: 20,
    duration: '7 days',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Food Explorer',
    description: 'Order from 5 different restaurants',
    points: 300,
    progress: 2,
    total: 5,
    duration: '14 days',
    icon: '🍽️',
  },
] as const;

export const MOCK_LEADERBOARD = [
  { 
    id: 1, 
    name: 'Dzul', 
    points: 2500, 
    rank: 1,
    level: 'Level 99 Sepuh',
    avatar: '/avatars/dzul.jpg'
  },
  { 
    id: 2, 
    name: 'Harry T.', 
    points: 2350, 
    rank: 2,
    level: 'Level 5 Explorer',
    avatar: '/avatars/harry.jpg'
  },
  { 
    id: 3, 
    name: 'Daffa R.', 
    points: 2200, 
    rank: 3,
    level: 'Level 4 Explorer',
    avatar: '/avatars/daffa.png'
  },
  { 
    id: 4, 
    name: 'Billy S.', 
    points: 2100, 
    rank: 4,
    level: 'Level 4 Explorer',
    avatar: '/avatars/billy.png'
  },
  { 
    id: 5, 
    name: 'Agif F.', 
    points: 1950, 
    rank: 5,
    level: 'Level 3 Explorer',
    avatar: '/avatars/agif.png'
  },
] as const;

export const MOCK_REWARDS = [
  {
    id: 1,
    title: 'GoRide Voucher',
    description: '50% off up to 10k on your next 3 rides',
    points: 500,
    icon: '🎫',
    category: 'Transport',
  },
  {
    id: 2,
    title: 'GoFood Special',
    description: 'Free delivery + 25k discount',
    points: 750,
    icon: '🍱',
    category: 'Food',
  },
  {
    id: 3,
    title: 'GoPay Cashback',
    description: '100k GoPay cashback',
    points: 1000,
    icon: '💰',
    category: 'Finance',
  },
] as const;