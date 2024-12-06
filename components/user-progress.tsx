"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Medal } from "lucide-react";

export function UserProgress() {
  return (
    <Card className="p-6 bg-[#00AA13] text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">Hello, Budi!</h2>
          <p className="text-green-100">Level 5 Explorer</p>
        </div>
        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
          <Medal className="h-5 w-5" />
          <span className="font-semibold">1,250 points</span>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Progress to Level 6</span>
          <span>750/1000 XP</span>
        </div>
        <Progress value={75} className="h-2 bg-white/20" indicatorClassName="bg-white" />
      </div>
    </Card>
  );
}