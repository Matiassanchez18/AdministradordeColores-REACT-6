import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../assets/css/Formularioc.css";
import Button from "react-bootstrap/Button";

const Formulario = () => {
  return (
    <section>
      <article className="container shadow-lg mt-5 border ">
        <h5 className="fw-light mt-3 ms-4 mb-4">Administrar colores</h5>
        <form action="">
          <div className="border shadow-sm mb-3 row" id="FondoFormulario">
            <div
              className="col-lg-6 col-md-6 col-sm-12 mb-3 d-flex justify-content-center align-items-center ms-5"
              id="imagen"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzF9LrjzlQNV3av4zVk95FgYufMpSeipvAQ&s"
                alt="Imagen de color azul"
                className="img-fluid"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mb-3 ms-5">
              <InputGroup className="mb-3 p-5">
                <Form.Control
                  placeholder="Nombre del color ej: Blue"
                  aria-label="Nombre del color"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </div>
          <div className="d-flex justify-content-end">
          <Button type="submit" variant="primary" className="mt-4 mb-5 me-3 shadow">Primary</Button>

          </div>
        </form>
      </article>
    </section>
  );
};

export default Formulario;
