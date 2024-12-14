import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/css/Formularioc.css";

const ListaColores = () => {
  return (
    <section className="row mt-5 d-flex container">
      <article className="col-md-3 col-lg-3 col-sm-3 mb-3">
        <Card className="square-card">
          <Card.Title className="border-bottom p-2">Card Title</Card.Title>
          <Card.Body className="d-flex justify-content-center align-items-center Fondo">
            <div
              className="p-5 DivCard"
              style={{ backgroundColor: "blue" }}
            ></div>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button variant="danger d-felx justify-content-end">
              Eliminar
            </Button>
          </Card.Footer>
        </Card>
      </article>

      <article className="col-md-3 col-lg-3 col-sm-3 mb-3">
        <Card className="square-card">
          <Card.Title className="border-bottom p-2">Card Title</Card.Title>
          <Card.Body className="d-flex justify-content-center align-items-center Fondo">
            <div
              className="p-5 DivCard"
              style={{ backgroundColor: "blue" }}
            ></div>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button variant="danger d-felx justify-content-end">
              Eliminar
            </Button>
          </Card.Footer>
        </Card>
      </article>

      <article className="col-md-3 col-lg-3 col-sm-3 mb-3">
        <Card className="square-card">
          <Card.Title className="border-bottom p-2">Card Title</Card.Title>
          <Card.Body className="d-flex justify-content-center align-items-center Fondo">
            <div
              className="p-5 DivCard "
              style={{ backgroundColor: "blue" }}
            ></div>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button variant="danger ">Eliminar</Button>
          </Card.Footer>
        </Card>
      </article>
    </section>
  );
};

export default ListaColores;
