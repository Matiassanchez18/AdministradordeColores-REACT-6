import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/css/Formularioc.css";

const Colores = ({ color, borrarColores}) => {
  return (
    <section className="col-md-2 col-lg-2 col-sm-6 mb-2 mx-5 mt-5">
      <Card className="square-card shadow">
        <Card.Title className="p-2">{color}</Card.Title>
        <Card.Body className="d-flex justify-content-center align-items-center Fondo">
          <div
            className="p-5 DivCard"
            style={{ backgroundColor: color }}
          ></div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Button variant="danger mt-2 shadow mb-3" onClick={()=>borrarColores(color)}>Eliminar</Button>
        </Card.Footer>
      </Card>
    </section>
  );
};

export default Colores;

