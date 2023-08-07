import { useState } from 'react'
import Board from './assets/component/board'
import './App.scss'


type defaultArray = (null|string)[];

function App() {
const [array,setArray] = useState<defaultArray>(Array(9).fill(null));
const [isx, setIsx] = useState<boolean>(false);

function handleClick(event : number) {
  let copyarray = [...array];
  copyarray[event] = 'x';
  setArray(copyarray);
}

  return (
    <>
      <div className='history'></div>
      <Board click = {handleClick} array = {array}/>
    </>
  )
}

export default App
