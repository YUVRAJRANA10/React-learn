import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './Heading.jsx'

function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  let [counter, setCount] = useState(0)

  const outputt1 = (num) => {
    if(!operator){
      setNum1(num1 + num);
    }
    else{
      setNum2(num2 + num);

    }
  }

  
const handleOperatorClick = (op)=>{
if(num1){
  setOperator(operator+op);;
}
}

const clear = ()=>{
  setNum2(" ");
  setNum1("");
  setOperator("");

}
  return (
    <>
 <Head></Head>
      <div className='main'>
        <div className='container'><h2>{num1}{operator}{num2}</h2></div>
             <div className="keypad">
        <div className="row">
          <button onClick={e => outputt1(e.target.value)} className="keys" value={1}>1</button>
          <button onClick={e => outputt1(e.target.value)} className="keys" value={2}>2</button>
          <button onClick={e => outputt1(e.target.value)} className="keys" value={3}>3</button>
          <button onClick={()=> handleOperatorClick('+')} className="operation" >+</button>
        </div> 
        <div className="row"> 
          <button onClick={e => outputt1(e.target.value)} className="keys" value={4}>4</button>
          <button onClick={e => outputt1(e.target.value)} className="keys" value={5}>5</button>
          <button onClick={e => outputt1(e.target.value)} className="keys" value={6}>6</button>
           <button onClick={()=> handleOperatorClick('-')} className="operation" >-</button>
        </div> 
        <div className="row"> 
          <button onClick={e => outputt1(e.target.value)} className="keys" value={7}>7</button>
          <button onClick={e => outputt1(e.target.value)} className="keys" value={8}>8</button>
          <button onClick={e => outputt1(e.target.value)} className="keys" value={9}>9</button>
           <button onClick={() => handleOperatorClick('/')} className="operation" >/</button>
        </div>
          <div className="row">
          <button onClick={clear}>C</button>
        
        </div>
       
      </div>
      
      </div>
    </>
  )
}



export default App
