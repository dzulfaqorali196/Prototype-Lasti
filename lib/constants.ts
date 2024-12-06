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
  { id: 1, name: 'John D.', points: 2500, rank: 1, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36' },
  { id: 2, name: 'Sarah M.', points: 2350, rank: 2, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
  { id: 3, name: 'Alex W.', points: 2200, rank: 3, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde' },
  { id: 4, name: 'Maya R.', points: 2100, rank: 4, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956' },
  { id: 5, name: 'Kevin P.', points: 1950, rank: 5, avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12' },
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