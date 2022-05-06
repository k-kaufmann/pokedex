import { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import { Pokedex, Pokemon } from "../../model/Pokedex";
import Pokecard from "../pokecard/Pokecard";

export default function Pokelist() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function fetchPokemon() {
    var url: any = "https://pokeapi.co/api/v2/pokemon?limit=100";
    var response;
    var data: Pokedex;

    do {
      response = await fetch(url);
      data = await response.json();
      url = data.next;
      setPokemons((pokemons) => [...pokemons, ...data.results]);
    } while (data.next !== null);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <CardGroup className="mt-5 d-flex justify-content-center">
        {pokemons.map((pokemon, index) => {
          return (
            <Pokecard
              name={pokemon.name}
              url={pokemon.url}
              key={index}
            ></Pokecard>
          );
        })}
      </CardGroup>
    </>
  );
}
