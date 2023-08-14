type historyProps = {
    class : string,
    click : (event : (null|string)[]) => void,
    array : (null|string)[],
}

export default function History(props : historyProps){
let historyArray = props.array;


    return(
        <div className = 'min-square' onClick={() => props.click(props.array)}>
            {historyArray.map((each,i) => {
                return <div className = 'tiny-square' key = {i}>{each}</div>
            })}
            
        </div>
    );
}