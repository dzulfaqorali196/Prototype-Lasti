"use client";

import { MOCK_REWARDS } from "@/lib/constants";
import { RewardCard } from "@/components/reward-card";
import { Badge } from "@/components/ui/badge";
import { usePointsStore } from "@/lib/store/points-store";

export function Rewards() {
  const points = usePointsStore((state) => state.points);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Available Rewards</h2>
        <Badge variant="outline">{points} points available</Badge>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_REWARDS.map((reward) => (
          <RewardCard
            key={reward.id}
            {...reward}
          />
        ))}
      </div>
    </div>
  );
}