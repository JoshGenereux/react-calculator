import React from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";

const Calculator = ()=>{

  return (
    <div className='calculator'>
      {<Screen />}
      {<Buttons />}
    </div>
  )
}

export default Calculator;