import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadcrumbs";

const SearchPage = () => {
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
        </>
    )
}

export default SearchPage;