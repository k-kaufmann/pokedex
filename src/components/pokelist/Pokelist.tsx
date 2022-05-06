import { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import Pokecard from "../pokecard/Pokecard";

export default function Pokelist() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  async function fetchPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");

    const data = await response.json();

    const responsePokemon = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=" + data.count
      //"https://pokeapi.co/api/v2/pokemon?limit=10"
    );
    const dataPoke = await responsePokemon.json();

    setPokemons(dataPoke.results);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <CardGroup className="mt-5">
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
