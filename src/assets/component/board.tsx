import Button from "./button";
type boardProps = {
    click : (event : number) => void,
    square? : string | null,
    array : (null|string)[],
    stat : string,
}


export default function Board(props : boardProps){
    const buttons = [...props.array];
    
    return(
    <div className="outside">
        {props.stat}
    <div className="board">
        {buttons.map((each, i)   => <Button numValue = {i} value = {i.toString()} key = {i} click = {props.click} square = {each}/>)}
    </div>
    </div>
    );
}