window.addEventListener("load",inicio,true);
import * as arrays from "./arrays.js";

    let ListPaises = ["España", 
                    "Portugal", 
                    "Andorra", 
                    "Francia", 
                    "Italia", 
                    "Alemania"];


    function inicio(){
        document.getElementById("show");

        document.getElementById("enviar").addEventListener("click",ejecuta,true);
    }

    function ejecuta() {
        let opcion = document.getElementById("opcion").value;

        switch (opcion) {
            case "1":
                document.getElementById("show").innerHTML = `Hay: ${arrays.showNumPaises(ListPaises)} paises`;
                break;
            case "2":
                document.getElementById("show").innerHTML = `Lista de paises: ${arrays.showList(ListPaises)}`;
                break;
            case "3":
                document.getElementById("show").innerHTML = `Lista en sentido inverso: ${arrays.showInv(ListPaises)}`;
                break;
            case "4":
                document.getElementById("show").innerHTML = `Lista ordenada alfabéticamente: ${arrays.showOrdenados(ListPaises)}`;
                break;
            case "5":
                let nombPais = prompt("Nombre del país");
                arrays.addFrs(ListPaises,nombPais);
                document.getElementById("show").innerHTML = `Se ha añadido correctamente al principio`;
                break;
            case "6":
                let nomPais = prompt("Nombre del país");
                arrays.addLst(ListPaises,nomPais);
                document.getElementById("show").innerHTML = `Se ha añadido correctamente al final`;
                break;
            case "7":
                arrays.removeFrs(ListPaises)
                document.getElementById("show").innerHTML = `Se ha borrado correctamente`;
                break;
            case "8":
                arrays.removeLst(ListPaises);
                document.getElementById("show").innerHTML = `Se ha borrado correctamente`;
                break;
            case "9":
                let pos = prompt("Posición del pais");
                document.getElementById("show").innerHTML =`En la posición ${pos} se encuentra: ${arrays.showPais(ListPaises,pos)}`;
                break;
            case "10":
                 let nombrePais = prompt("Nombre del país");
                document.getElementById("show").innerHTML = `El país se encuentra en la posición: ${arrays.showPos(ListPaises,nombrePais)}`;
                break;
            default:
                document.getElementById("show").innerHTML = "Opión no válida";
                break;
        }
    }