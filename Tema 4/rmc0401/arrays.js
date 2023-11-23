function showNumPaises(paises){
    return(paises.length);
}

function showList(paises){
    return(paises);
}

function showInv(paises){
    return(paises.reverse());
}

function showOrdenados(paises){
    return(paises.sort());
}

function addFrs(paises, elemento){
    paises.unshift(elemento);
    return(paises);
}

function addLst(paises, elemento){
    paises.push(elemento)
    return(paises);
}

function removeFrs(paises){
    paises.shift()
    return(paises);
}

function removeLst(paises){
    paises.pop()
    return(paises);
}

function showPais(paises, posicion){
    return(paises[posicion]);
}

function showPos(paises, pais){
    return(paises.indexOf(pais));
}

export {showNumPaises,showList,showInv,showOrdenados,addFrs,addLst,removeFrs,removeLst,showPais,showPos};