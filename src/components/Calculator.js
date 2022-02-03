import React, {useState} from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";

const Calculator = ()=>{
  const [display, setDisplay] = useState('0')

  return (
    <div className='calculator'>
      {<Screen display={display} setDisplay={setDisplay}/>}
      {<Buttons display={display} setDisplay={setDisplay}/>}
    </div>
  )
}

export default Calculator;