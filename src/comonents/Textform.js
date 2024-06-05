import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './Textform.css'

export default function Textform(prpos) {
  const hendelupcase= () =>
   {
    let newtext=text.toUpperCase();
    settext(newtext);
   }
   const hendelclertext= () =>
    {
     let newtext='';
     settext(newtext);
    }
   const hendleonchnage= (event) =>
    {
        settext(event.target.value);
    }
    
  const[text,settext]=useState("enter the text");
  return (
    
    <>
     
      <center><h1>{prpos.heading}</h1></center>
<div class="mb-3">

  <textarea class="form-control" id="exampleFormControlTextarea1" value={text} onChange={hendleonchnage}  rows="8"></textarea>
</div>
   <button className='b1' onClick={hendelupcase}>convart to uppercase</button>
   <button className='b2' onClick={hendelclertext}>clear text</button>
   <div>
    <h1>text Summary</h1>
    <p>number of words={text.split(" ").length}    number of characters={text.length}</p>
    <p>{0.008 * text.split(" ").length }minutes to read</p>
   </div>
    </>
  );
}
Textform.propTypes=
{
    heading:PropTypes.string
}

