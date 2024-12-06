"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MOCK_MISSIONS } from "@/lib/constants";

export function DailyMissions() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Daily Missions</h2>
        <span className="text-sm text-muted-foreground">Resets in 8h 15m</span>
      </div>
      
      <div className="grid gap-4">
        {MOCK_MISSIONS.map((mission) => (
          <Card key={mission.id} className="p-4">
            <div className="flex items-start gap-4">
              <div className="text-3xl">{mission.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{mission.title}</h3>
                  <span className="text-sm font-medium text-[#00AA13]">+{mission.points} pts</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{mission.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{mission.progress}/{mission.total}</span>
                  </div>
                  <Progress value={(mission.progress / mission.total) * 100} className="h-2" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}