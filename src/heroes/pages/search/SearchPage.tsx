import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

const SearchPage = () => {
    return (
        <>
            <CustomJumbotron
                title="Busquéda de SuperHéroes"
                description="Descubre, explora y administras superhéroes y villanos"
            />
            <HeroStats />
            <SearchControls />
        </>
    )
}

export default SearchPage;