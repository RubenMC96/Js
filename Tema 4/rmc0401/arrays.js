function showNumPaises(paises) {
  return paises.length; //Linea: 22 T4
}

function showList(paises) {
  return paises;
}

function showInv(paises) {
  return paises.reverse(); //Linea: 79 T4
}

function showOrdenados(paises) {
  return paises.sort(); //Linea: 82
}

function addFrs(paises, elemento) {
  paises.unshift(elemento); //Add al principio del array
  return paises; //Linea: 51
}

function addLst(paises, elemento) {
  paises.push(elemento); //Add al final del array
  return paises; //Linea: 51
}

function removeFrs(paises) {
  paises.shift(); //remove al principio del array
  return paises; //Linea: 45
}

function removeLst(paises) {
  paises.pop(); //remove al final del array
  return paises; //Linea: 45
}

function showPais(paises, posicion) {
  return paises[posicion];
}

function showPos(paises, pais) {
  return paises.indexOf(pais);
}

export {
  showNumPaises,
  showList,
  showInv,
  showOrdenados,
  addFrs,
  addLst,
  removeFrs,
  removeLst,
  showPais,
  showPos,
};
