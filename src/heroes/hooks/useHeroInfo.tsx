import { useQuery } from "@tanstack/react-query";
import { getHeroAction } from "../actions/get-hero.action";

export const useHeroInfo = (idSlug: string) => {
    return useQuery({
        queryKey: ['hero', idSlug],
        queryFn: () => getHeroAction(idSlug),
        retry: false,
        staleTime: 1000 * 60 * 5 // 5 minutos
    });
}