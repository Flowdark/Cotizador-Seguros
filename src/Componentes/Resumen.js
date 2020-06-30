import React, { Fragment } from 'react';
import { primerMayuscula } from "../Helper";
import styled from "../../node_modules/@emotion/styled";

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #ffffff;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {

    const {marca, year, plan} = datos;

    if( marca === "" || year === "" || plan === "" ) return null;

    return ( 
        <Fragment>
            <ContenedorResumen>
                <h2>Resumen de Cotización</h2>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Año: {primerMayuscula(year)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
            </ContenedorResumen>
        </Fragment>
     );
}
 
export default Resumen;