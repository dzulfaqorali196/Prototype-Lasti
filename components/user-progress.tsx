"use client";

import { Card } from "@/components/ui/card";
import { Medal } from "lucide-react";
import { usePointsStore } from "@/lib/store/points-store";

export function UserProgress() {
  const points = usePointsStore((state) => state.points);

  return (
    <Card className="p-6 bg-[#00AA13] text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">Hello, Dzul!</h2>
          <p className="text-green-100">Level 99 Sepuh</p>
        </div>
        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
          <Medal className="h-5 w-5" />
          <span className="font-semibold">{points} points</span>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Progress to Level 100</span>
          <span>750/1000 XP</span>
        </div>
        <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all" 
            style={{ width: '75%' }}
          />
        </div>
      </div>
    </Card>
  );
}