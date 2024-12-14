import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/css/Formularioc.css";

const Colores = ({colores}) => {
    return (
        <section className="row mt-5 d-flex container">
        <article className="col-md-3 col-lg-3 col-sm-3 mb-3">
          <Card className="square-card shadow">
            <Card.Title className="p-2">{colores}</Card.Title>
            <Card.Body className="d-flex justify-content-center align-items-center Fondo">
              <div
                className="p-5 DivCard"
                style={{ backgroundColor: "blue" }}
              ></div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
              <Button variant="danger mt-2 shadow mb-3  ">Eliminar</Button>
            </Card.Footer>
          </Card>
        </article>
  
      </section>
    );
};

export default Colores;