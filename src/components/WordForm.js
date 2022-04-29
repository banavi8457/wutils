

import React,{useState } from 'react'

export default function WordForm(props) {
    
    const [text,setText] = useState(' ');

    
        const handleUpClick = ()=>{
            // console.log('uppercase was clicked :'+ text);
            let newText = text.toUpperCase();
            setText(newText)
        }
        const handleLoClick = ()=>{
         
            let newText = text.toLowerCase();
            setText(newText)
        }

        const handleOnChange= (event)=>{
            // console.log('on change');
            setText(event.target.value)
        }


        const handleClearClick = ()=>{
         
            let newText ='';
            setText(newText)
        }

        const handleCopy =()=>{
            let text = document.getElementById('myBox');
            text.select();
            navigator.clipboard.writeText(text.value)
        }

        const handleExtraspaces =()=>{
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
        }






    // const [text,setText] = useState('Enter text here');
    // text= 'new text'; // wrong way to change the state
    // setText ('new text'); // correct way to change the state
    return (
        <>
        <div className ="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="exampleFormControlTextarea1" class="form-label">example textarea</label> */}
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>


             <button className="btn btn-primary mx-1" onClick = {handleUpClick}> Convert to Uppercase</button>
             <button className="btn btn-primary mx-1" onClick = {handleLoClick}> Convert to Lowercase</button>
             <button className="btn btn-primary mx-1" onClick = {handleClearClick}>Clear Text</button>
             <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
             <button className="btn btn-primary mx-1" onClick = {handleExtraspaces}>Remove Extra spaces</button>

        </div>

        <div className="continer my-3">
            <h3>Your text summary</h3>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes read</p>

            {/* <h3>Preview</h3> */}
            {/* <p>{text}</p> */}


        </div>


        </>
    )
}
