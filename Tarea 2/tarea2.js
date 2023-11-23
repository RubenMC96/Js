
function operacion7(){



    let operador= 0;
    while(operador <=10){
        let multiplicando = 7;
        document.write("<li>" + "7" + " x " + operador + " = " + multiplicando * operador+ "<li>");

        operador++;

    }

    while(operador <=10){
        let sumando = 7;
        document.write("li>"+"7" + " + " + operador + " = " + sumando + operador+ "<li>");

        operador++;

    }
    operador = 70;
    while(operador >=0){
        let dividendo = 7;
        document.write("<li>"+"7" + " / " + operador + " = " + operador / dividendo+"<li>");

        operador--;

    }




}

function operacion8 (){

    let operador = 0;
    let operando = 8;
    do{

        document.write("<li>"+ operando + " x " + operador + " = " + operando * operador+"<li>");

        operador ++;

    }while(operador <=10);
    do{

        document.write("<li>"+operando + " + " + operador + " = " + operando + operador+"<li>");

        operador ++;

    }while(operador <=10);
    do{
        operador = 80;
        document.write("<li>"+ operando + " / " + operador + " = " + operador / operando +"<li>");

        operador --;

    }while(multiplicador >=0);



}
function operacion9 (){

    let operando = 9;

for(let operador = 0; operador <= 10; operador++){

    document.write("<li>" + operando + " x " + operador + " = " + "9" * operador + "<li>");

}
for(let operador = 0; operador <= 10; operador++){

    document.write("<li>" + operando + " + " + i + " = " + "9" * operador + "<li>");

}
for(let operador = 90; operador >= 0; operador--){

    document.write("<li>" + operando + " / " + i + " = " + "9" / operador + "<li>");

}



}

function multiplicarBit (){


    document.write("<li>" + "125/8" + " = " + 125 >> 3 +"<li>");
    document.write("<li>" + "40 x 4" + " = " + 40 << 2 +"<li>");
    document.write("<li>" + "25/2" + " = " + 25 >> 1 +"<li>");
    document.write("<li>" + "10/6" + " = " + 10 << 4 +"<li>");

    
}

operacion7();
operacion8();
operacion9();
multiplicarBit();