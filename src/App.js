import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Component from './Component';

function App() {

  let [val1, setval1] = useState('')
  let [val2, setval2] = useState('')
  let [first, setfirst] = useState('')
  


  const btnhandler = (e) => {

    setval1(val1+e.target.value)

  }
  const btnhandler1 = (e) => {
        setfirst(val1);
        
        if(e.target.value == '+')
        {
          setval2(e.target.value)
        }
        if(e.target.value == '-')
        {
         setval2(e.target.value)
         
        }if(e.target.value == '*'){
          setval2(e.target.value)
        }
        if(e.target.value == '/'){
          setval2(e.target.value)
        }
        setval1('')
  }

  const backspace =()=>{
    var bs =val1
    var t = bs.substring(0,bs.length-1)
    setval1(t)
    
  }

  const ansdata = ()=>{
       

        if(val2 == '+'){
          var t =  parseInt(val1) + parseInt(first)
       
        }
        if(val2 == '-') {
          var t = parseInt(first) - parseInt(val1)
        }
        if(val2 == '*'){
          var t = parseInt(first) * parseInt(val1)
        }
        if(val2 == '/'){
          var t =parseInt(first) / parseInt(val1)
        }
        setval1(t);

        }

  return (
    <div className="App" >
      {/* <Component/> */}
      <div className='main'>
        <div className='ans'><input type='text' value={val1} readOnly></input></div>
        <div className='ac'>
          <input type='button' value='AC' onClick={btnhandler1}></input>
        </div>
        <div className='sub'>
          <input type='button' value='7' onClick={btnhandler}></input>
          <input type='button' value='8' onClick={btnhandler}></input>
          <input type='button' value='9' onClick={btnhandler}></input>
          <input type='button' value='+' onClick={btnhandler1}></input>
        </div>
        <div className='sub'>

          <input type='button' value='4' onClick={btnhandler}></input>
          <input type='button' value='5' onClick={btnhandler}></input>
          <input type='button' value='6' onClick={btnhandler}></input>
          <input type='button' value='-' onClick={btnhandler1}></input>
        </div>


        <div className='sub'>
          <input type='button' value='3' onClick={btnhandler}></input>
          <input type='button' value='2' onClick={btnhandler}></input>
          <input type='button' value='1' onClick={btnhandler}></input>
          <input type='button' value='*' onClick={btnhandler1}></input>
        </div>

        <div className='sub'>
          <input type='button' value='C' onClick={backspace}></input>
          <input type='button' value=' .' onClick={btnhandler}></input>
          <input type='button' value='/' onClick={btnhandler1}></input>
          <input type='button' value='=' onClick={ansdata}></input>
        </div>

      </div>
    </div>
  );
}

export default App;
