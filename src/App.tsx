import { useState } from 'react'
import Board from './assets/component/board'
import History from './assets/component/history';
import './App.scss'


type defaultArray = (null|string)[];
type history = (any)[][];

function App() {
const [array,setArray] = useState<defaultArray>(Array(9).fill(null));
const [isx, setIsx] = useState<boolean>(false);
const [history, setHistory] = useState<history>([Array(9).fill(null)])


function handleClick(event : number) {
  let copyarray = [...array];
  if (copyarray[event] !== null || countingWinner(array)){
    return;
  }
  if(isx === true){
  copyarray[event] = 'x';
  setIsx(!isx); 
  setArray(copyarray);
  setHistory([...history , copyarray]);
  return;};

  copyarray[event] = 'O';
  setIsx(!isx);
  setArray(copyarray);
  setHistory([...history , copyarray]);
};
function handleHistory(event : (null|string)[]){
  let copyHistory = [...history];
  const newHistory =  copyHistory.slice(history.indexOf(event));
  setHistory(newHistory);


  setArray(event);
} 

function reset() : void{
  setArray(Array(9).fill(null));
  setHistory([Array(9).fill(null)]);
  stat = '';
}

let winners = countingWinner(array);
let stat  = ``;
if(winners){
  stat = `Winner = ${winners}`
}else if(array.includes(null) === false)
{
  stat = `Draw`
}
else{
  stat = `Turn = ${isx ? 'X' : 'O'}`
}
  return (
    <div className='game'>
      <div className='history'>
        <button onClick={reset}>RESET</button>
        <div className='buttonHistory'>
        {history.map((each,i) => {
          const isnull = each.some((x) => x != null);
          if(isnull){
           return <History  click = {handleHistory} array = {each} key = {i} class={i.toString()}/>
          }else{
            return;
          }
        })}
      </div>
      </div>
      <Board  click = {handleClick} array = {array} stat= {stat}/>
    </div>
  )
}



function countingWinner (array : (null | string)[]) : string | null | boolean | void {
   const winner : number[][] = [
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,4,6],
      [2,5,8],
      [3,4,5],
      [6,7,8]
   ]
  for(let i= 0 ; i < winner.length; i++){
      const[a,b,c] = winner[i];
      
      if(array[a] && array[a] == array[b] && array[b] == array[c]){
        return array[a];
      }
  }
  return false;
}

export default App
