import React from "react";

const Buttons = ({display, setDisplay})=>{

    const handleNum = (e)=>{
      let num = e.target.innerHTML
      let number = '';
      number += num;
      setDisplay(number)
      console.log(display)
    }

    return (

    <div className='button-container'>
      <div className='clear-div'>
        <button>C</button>
        <button>DEL</button>
      </div>
      <div className='button-div'>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>x</button>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>.</button>
      </div>
    </div>
  )
}

export default Buttons;