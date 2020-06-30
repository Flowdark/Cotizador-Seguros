import React, { useState } from 'react';
import styled from "../node_modules/@emotion/styled";
import Header from "./Componentes/Header"
import Formulario from "./Componentes/Formulario"
import Resumen from "./Componentes/Resumen"
import Resultado from "./Componentes/Resultado"
import Spinner from "./Componentes/Spinner"

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: ""
    }
  })

  const [ cargando, guardarCargando ] = useState(false)

  const { cotizacion, datos } = resumen

  return (
    <Contenedor>
      <Header 
        titulo="Cotizador de Seguros"
      />

      <ContenedorFormulario>
          <Formulario 
            guardarResumen={guardarResumen}
            guardarCargando={guardarCargando}
          />

          { cargando ? <Spinner /> : null }

          <Resumen 
            datos={datos}
          />

          {!cargando
            ? <Resultado 
                cotizacion={cotizacion}
              />
            :
              null
      }
      </ContenedorFormulario>
    </Contenedor>
    
  );
}

export default App;
