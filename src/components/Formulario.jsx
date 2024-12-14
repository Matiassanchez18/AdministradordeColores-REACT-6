import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../assets/css/Formularioc.css";
import Button from "react-bootstrap/Button";
import ListaColores from "./ListaColores";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [arrayColores, setarrayColores] = useState([]);

  const enviadoForm = (data) =>{
    if(arrayColores.some((icolores) => icolores === data.colores.trim())){
      alert('El color ya existe')
    }else{
      setarrayColores([...arrayColores, data.colores])
      reset()
      console.log(arrayColores)
    }
  }

  return (
    <section>
      <article className="container shadow-lg mt-5 border ">
        <h5 className="fw-light mt-3 ms-4 mb-4">Administrar colores</h5>
        <form action="" onSubmit={handleSubmit(enviadoForm)}>
          <div className="border shadow-sm mb-3 row Fondo">
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
                  {...register("colores", {
                    required: "Este campo es obligatorio",
                    minLength: {
                      value: 2,
                      message: "El minimo de caracteres es de 2",
                    },
                    maxLength: {
                      value: 15,
                      message: "El maximo de caracteres permitido es de 15",
                    },
                  })}
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.colores?.message}
              </Form.Text>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              variant="primary"
              className="mt-4 mb-5 me-3 shadow"
            >
              Primary
            </Button>
          </div>
        </form>
      </article>
      <article>
        <ListaColores></ListaColores>
      </article>
    </section>
  );
};

export default Formulario;
