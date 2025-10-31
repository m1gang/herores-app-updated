import { useQuery } from '@tanstack/react-query'
import { HeroGridCard } from './HeroGridCard'
import { getHeroesByPageAction } from '../actions/get-heroes-by-page.action'
import type { Hero } from '../types/hero.interface'

interface Props {
    heroes: Hero[];
}

export const HeroGrid = ({ heroes }: Props) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Hero Card 1 - Superman */}
            {
                heroes?.map(hero => (
                    <HeroGridCard
                        key={hero.id}
                        hero={hero}
                    />
                ))
            }
        </div>
    )
}
