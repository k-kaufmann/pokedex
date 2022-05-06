import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export interface PokecardProps {
  name: String;
  url: String;
}

export default function Pokecard(props: PokecardProps) {
  const [pokeName, setPokename] = useState("");
  const [pokeImg, setPokeImg] = useState("");

  async function fetchPokemon() {
    const response = await fetch(props.url as RequestInfo, {});
    const data = await response.json();
    console.log(data);

    setPokename(data.name);
    setPokeImg(data.sprites.front_default);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <Card className="m-2" style={{ maxWidth: "18rem", minWidth: "18rem" }}>
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
