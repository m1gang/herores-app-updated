import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useMemo, useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadcrumbs"
import { useQuery } from "@tanstack/react-query"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { useSearchParams } from "react-router"

export const HomePage = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const activeTab = searchParams.get('tab') ?? 'all';
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '6';

    const selectedTab = useMemo(() => {
        const validTabs = ["all", "favorites", "heroes", "villains"];
        return validTabs.includes(activeTab) ? activeTab : 'all'
    }, [activeTab])

    // const [activeTab, setActiveTab] = useState<"all" | "favorites" | "heroes" | "villains">('all');

    const { data: heroesResponse } = useQuery({
        queryKey: ['heroes'],
        queryFn: () => getHeroesByPageAction(+page, +limit),
        staleTime: 1000 * 60 * 5,
    })

    // useEffect(() => {
    //     getHeroesByPage().then(resp => console.log(resp))
    // }, [])

    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron
                    title="Universo de SuperHéroes"
                    description="Descubre, explora y administras superhéroes y villanos"
                />
                <CustomBreadCrumbs currentPage="Super Heroes" />

                {/* Stats Dashboard */}
                <HeroStats />

                {/* Advanced Filters */}

                {/* Tabs */}
                <Tabs value={selectedTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger
                            value="all"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'all')
                                return prev;
                            })}
                        >All Characters (16)</TabsTrigger>
                        <TabsTrigger
                            value="favorites"
                            className="flex items-center gap-2"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'favorites')
                                return prev;
                            })}
                        >
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger
                            value="heroes"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'heroes')
                                return prev;
                            })}
                        >Heroes (12)</TabsTrigger>
                        <TabsTrigger
                            value="villains"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'villains')
                                return prev;
                            })}
                        >Villains (2)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        {/* Mostrar todos los personajes */}
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value="favorites">
                        {/* Mostrar todos los personajes favoritos */}
                    </TabsContent>
                    <TabsContent value="heroes">
                        {/* Mostrar todos los héroes */}
                    </TabsContent>
                    <TabsContent value="villains">
                        {/* Mostrar todos los villanos */}
                    </TabsContent>
                </Tabs>


                {/* Pagination */}
                <CustomPagination totalPages={8} />
            </>
        </>
    )
}