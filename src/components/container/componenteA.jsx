import React from 'react'
import ComponenteB from '../pure/componenteB'
import {Contacto} from '../../models/Contacto-class'


const ComponenteA =() => {
  const contactoNuevo = new Contacto('gersom','cedeño','fami@gmail.com',false )
  return (
    <div><h1>componenteA</h1>

    <div>
    <ComponenteB props ={contactoNuevo}></ComponenteB>
    </div>
    </div>
  )
}



export default ComponenteA