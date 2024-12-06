"use client";

import { create } from 'zustand';

interface PointsStore {
  points: number;
  deductPoints: (amount: number) => void;
  addPoints: (amount: number) => void;
}

export const usePointsStore = create<PointsStore>((set) => ({
  points: 1250, // Initial points
  deductPoints: (amount: number) => 
    set((state) => ({ points: state.points - amount })),
  addPoints: (amount: number) => 
    set((state) => ({ points: state.points + amount })),
}));