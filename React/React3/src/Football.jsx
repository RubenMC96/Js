// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   }

//   return (
//     <button onClick={shoot}>Take the shot!</button>
//   );
// }

// export default Football;

// function Football() {
//   const shoot = (a) => {
//     alert(a);
//   }

//   return (
// <button onClick={() => shoot("Goooooooooal!")}>Take the shot!</button>);
// }

// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);
//     /*
//     'b' represents the React event that triggered the function,
//     in this case the 'click' event
//     */
//   }

//   return (
//     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );
  
// function Football() {
//   const shoot = (a, b) => {
//     alert(a + " " +"Tipo de evento"+ " " +b.type + " "+ "Tipo de objeto" + " " +b.target.type);
//     /*
//     'b' represents the React event that triggered the function,
//     in this case the 'click' event
//     */
//   }

//   return (
//     <button onMouseOver={()=>console.log("Hola")} onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );

// }

// function Football() {
//   let a = "GOL";
//   const shoot = (a, b) => {
//     alert(a + " " +"Tipo de evento"+ " " +b.type + " "+ "Tipo de objeto" + " " +b.target.type);
//     /*
//     'b' represents the React event that triggered the function,
//     in this case the 'click' event
//     */
//   }

//   return (
//     <button onMouseOver={()=>console.log("Hola")} onClick={(event) => shoot(a, event)}>Take the shot!</button>
//   );

// }


function Football() {
  let x = "GOL";
  const shoot = (a, b) => {
    alert(a + " " +"Tipo de evento"+ " " +b.type + " "+ "Tipo de objeto" + " " +b.target.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }

  return (
    <button onMouseOver={()=>console.log("Hola")} onClick={(event) => shoot(prompt("Dime algo"), event)}>Take the shot!</button>
  );

}


export default Football;