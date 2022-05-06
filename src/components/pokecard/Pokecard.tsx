import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Pokemon } from "../../model/Pokemon";

export interface PokecardProps {
  name: String;
  url: String;
}

export default function Pokecard(props: PokecardProps) {
  const [pokeName, setPokename] = useState("");
  const [pokeImg, setPokeImg] = useState("");

  async function fetchPokemon() {
    const response = await fetch(props.url as RequestInfo, {});
    const pokemon: Pokemon = await response.json();
    console.log(pokemon);

    setPokename(pokemon.name);
    setPokeImg(pokemon.sprites.front_default);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <Card
        className="m-2 shadow"
        style={{ maxWidth: "18rem", minWidth: "18rem" }}
        as={Link}
        to={"/pokemon/" + props.name}
      >
        <Card.Body>
          <Card.Title>{pokeName}</Card.Title>
          <Row>
            <Col className="col-6">
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                similique hic cum sunt, illo maiores.
              </Card.Text>
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
