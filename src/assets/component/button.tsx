
type buttonProps = {
    click : (event : number) => void,
    value : string ,
    numValue : number,
    square : null | string,
}


export default function Button(props : buttonProps){
    return(
    <button onClick = {() => props.click(props.numValue)} id = {props.value} className="square">{props.square}</button>
    );
}