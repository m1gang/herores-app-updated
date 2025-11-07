import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getSearchHeroesAction } from "@/heroes/actions/get-search-heroes.action";
import { HeroGrid } from "@/heroes/components/HeroGrid";

const SearchPage = () => {

    const [searchParams] = useSearchParams();

    const name = searchParams.get('name') ?? undefined;

    const { data = [] } = useQuery({
        queryKey: ['search', { name }],
        queryFn: () => getSearchHeroesAction({ name }),
        staleTime: 1000 * 60 * 5 //5 minutos
    })

    return (
        <>
            <CustomJumbotron
                title="Busquéda de SuperHéroes"
                description="Descubre, explora y administras superhéroes y villanos"
            />

            <CustomBreadCrumbs
                currentPage="Búsqueda de héroes"
                breadcrumbs={
                    [
                        { label: 'Home', to: '/' },
                        { label: 'Home', to: '/' },
                        { label: 'Home', to: '/' },
                    ]
                }
            />

            {/* stats dashboard */}
            <HeroStats />

            {/* filter and search */}
            <SearchControls />
            <HeroGrid heroes={data} />
        </>
    )
}

export default SearchPage;