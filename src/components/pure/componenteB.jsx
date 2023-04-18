

import React from 'react';
import PropTypes from 'prop-types';
import {Contacto} from '../../models/Contacto-class'
const ComponenteB = ({props}) => {
    
    return (
    <div>
         <h2>el nombre es: {props.Nombre}</h2>
    <h2>el apellido es: {props.Apellido}</h2>
    <h2>el email es: {props.Email}</h2>
    <h2>el esta conectado es: {props.Conectado ? 'conectado':'no conectado'}</h2>


    </div>
  )
}
ComponenteB.propTypes = {
    props: PropTypes.instanceOf(Contacto) 
}



export default ComponenteB

