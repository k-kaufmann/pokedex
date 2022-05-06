import { useCallback, useEffect, useState } from "react";
import { Pokedex, Pokemon } from "../model/Pokedex";

export default function usePokedex(scrolled: Boolean = false) {
    const [pokedex, setPokedex] = useState<Pokemon[]>([])
    const [limit] = useState(30)
    const [url, setUrl] = useState<any>("https://pokeapi.co/api/v2/pokemon?limit="+limit)

    const fetchPokemon = useCallback(async () => {
        if (url !== null) {
            
        const response = await fetch(url)
        var data: Pokedex = await response.json()
        setPokedex(pokedex => [...pokedex, ...data.results])
        setUrl(data.next)
        }
    }, [url])


    useEffect(() => {
        fetchPokemon()
    }, [])

    return pokedex;
}