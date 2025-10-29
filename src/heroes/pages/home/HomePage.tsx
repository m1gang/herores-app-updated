import {
    Filter,
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"

export const HomePage = () => {

    const [activeTab, setActiveTab] = useState<"all" | "favorites" | "heroes" | "villains">('all');


    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron
                    title="Universo de SuperHéroes"
                    description="Descubre, explora y administras superhéroes y villanos"
                />

                {/* Stats Dashboard */}
                <HeroStats />



                {/* Advanced Filters */}

                {/* Tabs */}
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger
                            value="all"
                            onClick={() => setActiveTab("all")}
                        >All Characters (16)</TabsTrigger>
                        <TabsTrigger
                            value="favorites"
                            className="flex items-center gap-2"
                            onClick={() => setActiveTab("favorites")}
                        >
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger
                            value="heroes"
                            onClick={() => setActiveTab("heroes")}
                        >Heroes (12)</TabsTrigger>
                        <TabsTrigger
                            value="villains"
                            onClick={() => setActiveTab("villains")}
                        >Villains (2)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        {/* Mostrar todos los personajes */}
                        <HeroGrid />
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

                {/* Results info */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                        <p className="text-gray-600">Showing 6 of 16 characters</p>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Filter className="h-3 w-3" />
                            Filtered
                        </Badge>
                    </div>
                </div>

                {/* Character Grid */}
                <HeroGrid />

                {/* Pagination */}
                <div className="flex items-center justify-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                    </Button>

                    <Button variant="default" size="sm">
                        1
                    </Button>
                    <Button variant="outline" size="sm">
                        2
                    </Button>
                    <Button variant="outline" size="sm">
                        3
                    </Button>
                    <Button variant="ghost" size="sm" disabled>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>

                    <Button variant="outline" size="sm">
                        Next
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </>
        </>
    )
}