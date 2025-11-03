import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

export const usePaginatedHero = (page: string, limit: string) => {
    return useQuery({
        queryKey: ['heroes', { page, limit }],
        queryFn: () => getHeroesByPageAction(+page, +limit),
        staleTime: 1000 * 60 * 5,
    });
}
