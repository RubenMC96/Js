function showNum(obj){
    return(obj.length);
}

function showList(obj){
    return(obj);
}

function showInv(obj){
    return(obj.reverse());
}

function showOrdenados(obj){
    return(obj.sort());
}

function addFrs(obj, elemento){
    obj.unshift(elemento);
    return(obj);
}

function addLst(obj, elemento){
    obj.push(elemento)
    return(obj);
}

function removeFrs(obj){
    obj.shift()
    return(obj);
}

function removeLst(obj){
    obj.pop()
    return(obj);
}

function showPais(obj, posicion){
    return(obj[posicion]);
}

function showPos(obj, pos){
    return(obj.indexOf(pos));
}

export {showNum,showList,showInv,showOrdenados,addFrs,addLst,removeFrs,removeLst,showPais,showPos};