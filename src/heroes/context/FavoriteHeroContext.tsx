import { createContext, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";


interface FavoriteHeroContext {
    //state
    favorites: Hero[];
    favoriteCount: number;

    //methods
    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

    const [favorites, setFavorites] = useState<Hero[]>([]);

    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.find((h: Hero) => h.id === hero.id);

        if (heroExist) {
            const newFavorites = favorites.filter((h: Hero) => h.id !== hero.id)
            setFavorites(newFavorites);
            return;
        }

        setFavorites([...favorites, hero]);
    }


    return (
        < FavoriteHeroContext
            value={{
                //state
                favoriteCount: 0,
                favorites: [],
                //methods
                isFavorite: () => { },
                toggleFavorite: toggleFavorite
            }
            }
        >

        </FavoriteHeroContext>
    )


}