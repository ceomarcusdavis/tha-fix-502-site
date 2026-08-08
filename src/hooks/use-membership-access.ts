import { useQuery } from "@tanstack/react-query";
import { getMyMembership, getSession } from "@/lib/account";
import { buildMembershipAccess } from "@/lib/membership-access";

export function useMembershipAccess() {
  const sessionQuery = useQuery({
    queryKey: ["auth-session"],
    queryFn: getSession,
    staleTime: 30_000,
  });

  const membershipQuery = useQuery({
    queryKey: ["my-membership"],
    queryFn: getMyMembership,
    enabled: Boolean(sessionQuery.data),
    staleTime: 30_000,
    retry: false,
  });

  const membership = sessionQuery.data ? membershipQuery.data ?? null : null;
  const access = buildMembershipAccess(membership);

  return {
    ...access,
    session: sessionQuery.data ?? null,
    isSignedIn: Boolean(sessionQuery.data),
    isLoading: sessionQuery.isLoading || (Boolean(sessionQuery.data) && membershipQuery.isLoading),
    isError: sessionQuery.isError || membershipQuery.isError,
    error: sessionQuery.error || membershipQuery.error || null,
    refetch: async () => {
      await sessionQuery.refetch();
      await membershipQuery.refetch();
    },
  };
}
