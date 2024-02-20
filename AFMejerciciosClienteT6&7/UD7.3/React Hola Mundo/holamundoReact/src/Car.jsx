function Car(props){
    return <><h2> I am a {props.color} Car! {props.text}</h2> </>;
}

function CarImage(props){
    const color = "electric"
    return (
        <>
            <Car color={color} text="no corro mucho, ni llego muy lejos..." />
            <img src={props.url}/>
        </>
    )
}

function Frase(props){
    return <><h3> y si me conduces todos pensaran que eres {props.texto}...</h3></>
}

export {CarImage, Frase}