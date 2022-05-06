import { CardGroup } from "react-bootstrap";
import usePokedex from "../../hooks/usePokedex";
import Pokecard from "../pokecard/Pokecard";

export default function Pokelist() {
  const pokemons = usePokedex();

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
