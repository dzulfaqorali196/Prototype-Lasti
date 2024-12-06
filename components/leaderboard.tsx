"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MOCK_LEADERBOARD } from "@/lib/constants";

export function Leaderboard() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Top Performers</h2>
        <Badge variant="outline">This Week</Badge>
      </div>
      
      <Card className="p-4">
        <div className="space-y-4">
          {MOCK_LEADERBOARD.map((user, index) => (
            <div
              key={user.id}
              className={`flex items-center gap-4 p-3 rounded-lg ${
                index === 0 ? "bg-[#FFE000]/10" :
                index === 1 ? "bg-gray-100" :
                index === 2 ? "bg-[#CD7F32]/10" : ""
              }`}
            >
              <div className="w-8 text-center font-bold">
                {index === 0 ? "🥇" :
                 index === 1 ? "🥈" :
                 index === 2 ? "🥉" : `#${index + 1}`}
              </div>
              
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.split(' ')[0][0]}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-muted-foreground">Level {Math.floor(user.points / 500)} Explorer</div>
              </div>
              
              <div className="font-semibold text-[#00AA13]">{user.points} pts</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}