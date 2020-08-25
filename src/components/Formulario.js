import React, { Fragment , useState} from 'react';


const Formulario = () => {

  // Crear State de Citas
  const [ cita, actualizarCita ] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })


  // Funcion que se ejecuta cada que el usuario escribe en un input
  const actualizarState = (e) => {
  actualizarCita({
    ...cita,
    [e.target.name]:e.target.value
  })
}
  return (
    <Fragment>
      <h2>Crear Citas</h2>
      
      <form action="">
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
        />

        <label>Nombre Doeño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Doeño de mascota"
          onChange={actualizarState}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
        />

        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
        ></textarea>
          
        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment>
  );
}

export default Formulario;