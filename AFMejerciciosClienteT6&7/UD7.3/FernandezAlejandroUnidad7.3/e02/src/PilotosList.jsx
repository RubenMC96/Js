import React from 'react';

const PilotosList = ({ pilotos, paginaActual, pilotosPorPagina, actualizarLista }) => {
  const inicio = (paginaActual -  1) * pilotosPorPagina;
  const fin = inicio + pilotosPorPagina;
  const pilotosParaMostrar = pilotos.slice(inicio, fin);

  return (
    <ul>
      {pilotosParaMostrar.map((piloto, index) => (
        <li key={index}>{`${piloto.nombre}, ${piloto.equipo}, ${piloto.numero}, ${piloto.nacionalidad}`}</li>
      ))}
    </ul>
  );
};

export default PilotosList;
