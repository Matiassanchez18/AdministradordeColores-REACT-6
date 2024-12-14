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

  const [arrayColores, setArrayColores] = useState([]);

  const coloresValidos = [
    "aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", 
      "purple", "red", "silver", "teal", "white", "yellow", "aliceblue", "antiquewhite", 
      "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blueviolet", "brown", 
      "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", 
      "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", 
      "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", 
      "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", 
      "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", 
      "forestgreen", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "greenyellow", 
      "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", 
      "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", 
      "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", 
      "lightslategray", "lightsteelblue", "lightyellow", "limegreen", "linen", "magenta", 
      "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", 
      "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", 
      "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace", "olive", "olivedrab", 
      "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", 
      "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", 
      "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", 
      "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", 
      "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", 
      "yellowgreen"
  ];



  const enviadoForm = (data) => {
    const colorInput = data.colores.trim().toLowerCase();
// includes se utiliza para verificar si un objeto existe en el array
// aqui includ se usa para verificar si el dato enviado desde el form esta en el array de coloresValidos
    if (coloresValidos.includes(colorInput)) {
      // aqui includ se usa para ver si el color ingresado ya existe
      if (!arrayColores.includes(colorInput)) {
        setArrayColores([...arrayColores, data.colores])
        reset();  
      } else {
        alert("El color ya existe.");
      }
    } else {
      alert("Ingresa solo colres de css");
    }
  };

  const borrarColores = (borrarColores) =>{
    const filtrarColores = arrayColores.filter((colores) => colores !== borrarColores)
    setArrayColores(filtrarColores)
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
              Agregar Color
            </Button>
          </div>
        </form>
      </article>

      <article>
       
        <ListaColores arrayColores={arrayColores} borrarColores ={borrarColores} />
      </article>
    </section>
  );
};

export default Formulario;

