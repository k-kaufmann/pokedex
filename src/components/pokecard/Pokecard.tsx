import { useEffect, useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Pokemon } from "../../model/Pokemon";

export interface PokecardProps {
  name: String;
  url: String;
}

export default function Pokecard(props: PokecardProps) {
  const [pokeName, setPokename] = useState("");
  const [pokeImg, setPokeImg] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon>();

  async function fetchPokemon() {
    const response = await fetch(props.url as RequestInfo, {});
    const pokemon: Pokemon = await response.json();
    console.log(pokemon);
    setPokemon(pokemon);
    setPokename(pokemon.name);
    setPokeImg(pokemon.sprites.front_default);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <Card
        className="m-2 shadow rounded border"
        style={{ maxWidth: "19rem", minWidth: "19rem" }}
        as={Link}
        to={"/pokemon/" + props.name}
      >
        <Card.Body>
          <Card.Title>{pokeName}</Card.Title>
          <Row>
            <Col className="col-6">
              {pokemon?.types.map((type) => {
                return <Badge bg="primary m-1">{type.type.name}</Badge>;
              })}
            </Col>
            <Col className="col-4">
              <img src={pokeImg}></img>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
