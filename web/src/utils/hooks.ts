import { useMemo } from "react";
import { api } from "../api";
import { queryClient, useQuery } from "./query";

export const useSites = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["my-sites"],
		placeholderData: (prev) => prev,
		staleTime: 1000 * 60 * 1, //  1 minute
		queryFn: () => api["/api/me/sites"].get().json(),
	});

	return { sites: data, isLoading };
};

export const invalidateSites = () => {
	queryClient.invalidateQueries({ queryKey: ["my-sites"] });
};

export const useSite = (domain: string) => {
	const { sites, isLoading } = useSites();
	const site = useMemo(
		() =>
			sites?.find(
				(site) =>
					site.domain === domain ||
					site.domain.replace(".dawdle.space", "") === domain ||
					site.customDomain === domain,
			),
		[sites, domain],
	);
	return { site, isLoading };
};
