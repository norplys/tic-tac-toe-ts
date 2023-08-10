import { useState } from 'react'
import Board from './assets/component/board'
import './App.scss'


type defaultArray = (null|string)[];

function App() {
const [array,setArray] = useState<defaultArray>(Array(9).fill(null));
const [isx, setIsx] = useState<boolean>(false);

function handleClick(event : number) {
  let copyarray = [...array];
  if (copyarray[event] !== null || countingWinner(array)){
    return;
  }
  if(isx === true){
  copyarray[event] = 'x';
  setIsx(!isx); 
  setArray(copyarray);
  return;};

  copyarray[event] = 'O';
  setIsx(!isx);
  setArray(copyarray);
};

let winners = countingWinner(array);
let stat  = ``;
if(winners){
  stat = `Winner = ${winners}`
}else{
  stat = `Turn = ${isx ? 'X' : 'O'}`
}


  return (
    <>
      <div className='history'></div>
      <Board  click = {handleClick} array = {array} stat= {stat}/>
    </>
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
      if(array[a] && array[a] === array[b] && array[c]){
        return array[a];
      }
  }
  return false;
}

export default App
