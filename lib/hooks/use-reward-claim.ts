"use client";

import { useState, useCallback } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { usePointsStore } from '@/lib/store/points-store';
import confetti from 'canvas-confetti';
import useSound from 'use-sound';

export type RewardClaimStatus = 'idle' | 'claiming' | 'claimed' | 'error';

export function useRewardClaim() {
  const [claimStatus, setClaimStatus] = useState<RewardClaimStatus>('idle');
  const { toast } = useToast();
  const [playSuccess] = useSound('/sounds/success.mp3', { volume: 0.5 });
  const { points, deductPoints } = usePointsStore();

  const triggerConfetti = useCallback(() => {
    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ['#00AA13', '#FFE000', '#1C1C1C'],
      });
      
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ['#00AA13', '#FFE000', '#1C1C1C'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  const claimReward = async (rewardId: number, requiredPoints: number) => {
    if (claimStatus === 'claiming' || claimStatus === 'claimed') return;
    if (points < requiredPoints) {
      toast({
        title: "Insufficient Points",
        description: `You need ${requiredPoints - points} more points to claim this reward.`,
        variant: "destructive",
      });
      return;
    }

    setClaimStatus('claiming');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Deduct points
      deductPoints(requiredPoints);
      
      setClaimStatus('claimed');
      triggerConfetti();
      playSuccess();
      
      toast({
        title: "🎉 Reward Claimed!",
        description: "Your reward has been added to your inventory.",
        duration: 5000,
      });
    } catch (error) {
      setClaimStatus('error');
      toast({
        title: "Failed to claim reward",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return {
    claimStatus,
    claimReward,
    points,
  };
}