import React, {useState} from "react";

const Calculator = ()=>{
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('')

  const ops = ['/', '*', '+','-','.'];

  const updateCalc = (value) =>{
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }

  const calculate = ()=>{
    setCalc(eval(calc).toString())
  }

  const deleteLast = ()=>{
    if(calc === '') return;

    const value = calc.slice(0, -1)
    setCalc(value)
  }

  const clear = ()=>{
    setResult('')
    setCalc('')
  }

  return (
    <div className='calculator'>
      <div className='screen'>
        <h2 className='screen-small-num'>{result ? result : ''}</h2>
        <h1 className='screen-numbers'>{calc || '0'}</h1>
      </div>
      <div className='button-container'>
        <div className='clear-div'>
          <button onClick={clear}>C</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className='button-div'>
          <button onClick={()=>updateCalc('7')}>7</button>
          <button onClick={()=>updateCalc('8')}>8</button>
          <button onClick={()=>updateCalc('9')}>9</button>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button onClick={()=>updateCalc('4')}>4</button>
          <button onClick={()=>updateCalc('5')}>5</button>
          <button onClick={()=>updateCalc('6')}>6</button>
          <button onClick={()=>updateCalc('-')}>-</button>
          <button onClick={()=>updateCalc('1')}>1</button>
          <button onClick={()=>updateCalc('2')}>2</button>
          <button onClick={()=>updateCalc('3')}>3</button>
          <button onClick={()=>updateCalc('*')}>*</button>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={calculate}>=</button>
          <button onClick={()=>updateCalc('/')}>/</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator;