"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { MOCK_CHALLENGES } from "@/lib/constants";

export function Challenges() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Active Challenges</h2>
        <Badge variant="outline">2 Active</Badge>
      </div>
      
      <div className="grid gap-4">
        {MOCK_CHALLENGES.map((challenge) => (
          <Card key={challenge.id} className="p-4">
            <div className="flex items-start gap-4">
              <div className="text-3xl">{challenge.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{challenge.title}</h3>
                  <span className="text-sm font-medium text-[#00AA13]">+{challenge.points} pts</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{challenge.duration}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{challenge.progress}/{challenge.total}</span>
                  </div>
                  <Progress value={(challenge.progress / challenge.total) * 100} className="h-2" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}