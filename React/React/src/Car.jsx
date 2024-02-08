// function Car(props) {
//   return <h2>Soy un coche {props.color} de la marca {props.marca}</h2>;
// }
function Car({color, marca}) {
  return <h2>Soy un coche {color} de la marca {marca}</h2>;
}

function Garaje(){
    const  carName = "Ford";
    return(
        <>
            <h1>En el garaje hay</h1>
            <Car marca ={carName} />

        </>
    );


}
export {Car,Garaje};

