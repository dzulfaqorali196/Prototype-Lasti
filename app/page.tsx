"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DailyMissions } from "@/components/daily-missions";
import { Challenges } from "@/components/challenges";
import { Rewards } from "@/components/rewards";
import { Leaderboard } from "@/components/leaderboard";
import { UserProgress } from "@/components/user-progress";
import { Trophy, Target, Gift, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <UserProgress />
        
        <Tabs defaultValue="missions" className="mt-6">
          <TabsList className="grid w-full grid-cols-4 h-14">
            <TabsTrigger value="missions" className="flex flex-col items-center gap-1">
              <Trophy className="h-4 w-4" />
              <span className="text-xs">Missions</span>
            </TabsTrigger>
            <TabsTrigger value="challenges" className="flex flex-col items-center gap-1">
              <Target className="h-4 w-4" />
              <span className="text-xs">Challenges</span>
            </TabsTrigger>
            <TabsTrigger value="rewards" className="flex flex-col items-center gap-1">
              <Gift className="h-4 w-4" />
              <span className="text-xs">Rewards</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex flex-col items-center gap-1">
              <Users className="h-4 w-4" />
              <span className="text-xs">Leaderboard</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="missions" className="mt-6">
            <DailyMissions />
          </TabsContent>
          
          <TabsContent value="challenges" className="mt-6">
            <Challenges />
          </TabsContent>
          
          <TabsContent value="rewards" className="mt-6">
            <Rewards />
          </TabsContent>
          
          <TabsContent value="leaderboard" className="mt-6">
            <Leaderboard />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}