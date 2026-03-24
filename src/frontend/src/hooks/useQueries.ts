import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  PathwayEnrollment,
  ProgressRecord,
  QuizResult,
  SkillAssessment,
  UserProfile,
} from "../backend.d";
import { useActor } from "./useActor";

export function useMyProfile() {
  const { actor, isFetching } = useActor();
  return useQuery<UserProfile | null>({
    queryKey: ["myProfile"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getMyProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMySkillAssessments() {
  const { actor, isFetching } = useActor();
  return useQuery<SkillAssessment[]>({
    queryKey: ["mySkillAssessments"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMySkillAssessments();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMyEnrollments() {
  const { actor, isFetching } = useActor();
  return useQuery<PathwayEnrollment[]>({
    queryKey: ["myEnrollments"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyEnrollments();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMyProgress() {
  const { actor, isFetching } = useActor();
  return useQuery<ProgressRecord[]>({
    queryKey: ["myProgress"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyProgress();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMyQuizResults() {
  const { actor, isFetching } = useActor();
  return useQuery<QuizResult[]>({
    queryKey: ["myQuizResults"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyQuizResults();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCompleteModule() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      pathwayId,
      moduleId,
      tradeId,
      score,
    }: {
      pathwayId: string;
      moduleId: string;
      tradeId: string;
      score: bigint;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.completeModule(pathwayId, moduleId, tradeId, score);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProgress"] });
    },
  });
}

export function useCreateOrUpdateProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      displayName,
      email,
    }: { displayName: string; email: string }) => {
      if (!actor) throw new Error("Not connected");
      return actor.createOrUpdateProfile(displayName, email);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProfile"] });
    },
  });
}

export function useSaveSkillAssessment() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      tradeId,
      level,
    }: { tradeId: string; level: string }) => {
      if (!actor) throw new Error("Not connected");
      return actor.saveSkillAssessment(tradeId, level);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mySkillAssessments"] });
    },
  });
}

export function useCompleteOnboarding() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (tradeId: string) => {
      if (!actor) throw new Error("Not connected");
      return actor.completeOnboarding(tradeId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProfile"] });
    },
  });
}
