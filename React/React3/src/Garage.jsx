// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 &&
//         <h2>
//           You have {cars.length} cars in your garage.
//         </h2>
//       }
//     </>
//   );
// }

// export default Garage;

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const marcas= ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {marcas.map((marca) => <Car brand={marca} />)}
      </ul>
    </>
  );
}

export default Garage;