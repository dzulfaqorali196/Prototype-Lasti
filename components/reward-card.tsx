"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { useRewardClaim } from "@/lib/hooks/use-reward-claim";

interface RewardCardProps {
  id: number;
  title: string;
  description: string;
  points: number;
  icon: string;
  category: string;
}

export function RewardCard({
  id,
  title,
  description,
  points,
  icon,
  category,
}: RewardCardProps) {
  const { claimStatus, claimReward, points: userPoints } = useRewardClaim();
  const canClaim = userPoints >= points;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-4 relative overflow-hidden">
        <AnimatePresence>
          {claimStatus === 'claimed' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 bg-[#00AA13]/10 backdrop-blur-sm flex items-center justify-center"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="bg-white p-4 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-2">🎉</div>
                <h4 className="font-semibold text-[#00AA13]">Claimed!</h4>
                <p className="text-sm text-muted-foreground">Check your inventory</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              className="text-3xl"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {icon}
            </motion.div>
            <Badge>{category}</Badge>
          </div>
          
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground flex-1">{description}</p>
          
          <div className="mt-4 pt-4 border-t flex items-center justify-between">
            <span className="font-medium text-[#00AA13]">{points} points</span>
            <Button
              variant={canClaim ? "default" : "outline"}
              disabled={!canClaim || claimStatus !== 'idle'}
              onClick={() => claimReward(id, points)}
              className="relative"
            >
              {claimStatus === 'claiming' ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : claimStatus === 'claimed' ? (
                "Claimed!"
              ) : canClaim ? (
                "Claim Reward"
              ) : (
                "Not Enough Points"
              )}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}