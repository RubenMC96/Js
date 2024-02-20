// export { n1, n2, n3... };

export class Arrays {
    constructor(){};

    static mostrarNumElementos(array){
        return array.length;
    }

    static mostrarTodosElementos(array){
        return array;
    }

    static mostrarTodosElementosInv(array){
        return array.reverse();
    }

    static mostrarTodosElementosAbc(array){
        return array.sort();
    }

    static addElementoInicio(array, elemento){
        array.unshift(elemento); //devuele la nueva longitud
        return array[0];
    }

    static addElementoFinal(array, elemento){
        array.push(elemento);
        return array[array.length-1];
    }

    static borrarPrimero(array){
        return array.shift();
    }

    static borrarUltimo(array){
        return array.pop();
    }

    static elementoByPos(array, pos){
        return array[pos]; //se asume 1ª como 0
    }

    static posByElemento(array, elemento){
        return array.indexOf(elemento); //se asume devolver la 1ª si está repetido
    }
}