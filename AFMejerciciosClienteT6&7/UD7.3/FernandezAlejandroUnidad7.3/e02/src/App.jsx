import React, { useState, useEffect } from 'react';
import { Piloto } from './Piloto.js';

const App = () => {
  const [pilotos, setPilotos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [pilotosPorPagina, setPilotosPorPagina] = useState(3);
  const [filtroNacionalidad, setFiltroNacionalidad] = useState('');

  useEffect(() => {
    fetch('pilotos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const listaPilotos = data.pilotos.map(piloto => new Piloto(
          piloto.nombre,
          piloto.equipo,
          piloto.numero,
          piloto.nacionalidad
        ));
        setPilotos(listaPilotos);
      })
      .catch(error => {
        console.error('Hubo un problema al cargar los datos:', error);
      });
  }, []);

  const actualizarLista = () => {
    const inicio = (paginaActual -  1) * pilotosPorPagina;
    const fin = inicio + pilotosPorPagina;
    const listaFiltrada = filtroNacionalidad
      ? pilotos.filter(piloto => piloto.nacionalidad === filtroNacionalidad)
      : pilotos;
    const listaParaMostrar = listaFiltrada.slice(inicio, fin);
    return (
      <ul>
        {listaParaMostrar.map((piloto, index) => (
          <li key={index}>{`${piloto.nombre}, ${piloto.equipo}, ${piloto.numero}, ${piloto.nacionalidad}`}</li>
        ))}
      </ul>
    );
  };

  const ordenarPorNombreAsc = () => {
    const listaOrdenada = [...pilotos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    setPilotos(listaOrdenada);
  };

  const ordenarPorNombreDesc = () => {
    const listaOrdenada = [...pilotos].sort((a, b) => b.nombre.localeCompare(a.nombre));
    setPilotos(listaOrdenada);
  };

  const ordenarPorEquipoAsc = () => {
    const listaOrdenada = [...pilotos].sort((a, b) => a.equipo.localeCompare(b.equipo));
    setPilotos(listaOrdenada);
  };

  const ordenarPorEquipoDesc = () => {
    const listaOrdenada = [...pilotos].sort((a, b) => b.equipo.localeCompare(a.equipo));
    setPilotos(listaOrdenada);
  };

  return (
    <div>
      <button onClick={() => setPaginaActual(paginaActual -  1)}>Anterior</button>
      <button onClick={() => setPaginaActual(paginaActual +  1)}>Siguiente</button>
      <button onClick={() => setPilotosPorPagina(pilotos.length)}>Ver todos</button>
      <button onClick={() => { setPilotosPorPagina(3); setPaginaActual(1); }}>Volver a Paginación</button>
      <br />
      <button onClick={ordenarPorNombreAsc}>Ordenar por Nombre Ascendente</button>
      <button onClick={ordenarPorNombreDesc}>Ordenar por Nombre Descendente</button>
      <button onClick={ordenarPorEquipoAsc}>Ordenar por Equipo Ascendente</button>
      <button onClick={ordenarPorEquipoDesc}>Ordenar por Equipo Descendente</button>
      <br />
      <input
        type="text"
        value={filtroNacionalidad}
        onChange={e => setFiltroNacionalidad(e.target.value)}
        placeholder="Filtrar por nacionalidad"
      />
      <button onClick={actualizarLista}>Aplicar Filtro</button>
      <br />
      {actualizarLista()}
    </div>
  );
};

export default App;

