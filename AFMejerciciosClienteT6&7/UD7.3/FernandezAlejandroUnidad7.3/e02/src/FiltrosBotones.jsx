import React from 'react';

const FiltrosBotones = ({ ordenarNombreAsc, ordenarNombreDesc, ordenarEquipoAsc, ordenarEquipoDesc }) => {
  return (
    <div>
      <button onClick={ordenarNombreAsc}>Ordenar por Nombre Ascendente</button>
      <button onClick={ordenarNombreDesc}>Ordenar por Nombre Descendente</button>
      <button onClick={ordenarEquipoAsc}>Ordenar por Equipo Ascendente</button>
      <button onClick={ordenarEquipoDesc}>Ordenar por Equipo Descendente</button>
    </div>
  );
};

export default FiltrosBotones;
