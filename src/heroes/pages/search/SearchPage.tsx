import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

const SearchPage = () => {
    return (
        <>
            <CustomJumbotron
                title="Busquéda de SuperHéroes"
                description="Descubre, explora y administras superhéroes y villanos"
            />
            <HeroStats />
        </>
    )
}

export default SearchPage;