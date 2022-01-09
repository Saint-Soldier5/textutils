import React from 'react'
import { useState } from "react";

export default function TextForm(props) {
    const handleOnClick = () =>
    {
        console.log("uppercase was clicked" + " " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleLoClick = () =>
    {
        let newtext = text.toLowerCase();
        setText(newtext);
        console.log("Lowercase was clicked" + " " + newtext);
    }

    const handleClearClick = () =>
    {
        let newtext = "";
        setText(newtext);
        console.log("Clear Text was clicked" + " " + newtext);
    }
    const handleTrimClick = () =>
    {
        let newtext = text.trim();
        setText(newtext);
        console.log("Clear Text was clicked" + " " + newtext);
    }

    const handleOnChange= (e) =>
    {
        console.log("Onchange Happened");
        setText(e.target.value);
    }
  
    const [text, setText] = useState("Enter the text");

    return (
        <>
        <div className='container my-3' style={{color: props.mode === "light"? "dark": "white"}}>
            <h2>{props.heading}</h2>
            <div className=" mb-3">
                <label htmlFor="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "light"? "white": "grey", color: props.mode === "light"? "dark": "white" }} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleOnClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary' onClick={handleTrimClick}>Trim space Text</button>

        </div>
        <div className="container" style={{color: props.mode === "light"? "dark": "white"}} >
            <h1>Your text Summary</h1>
            <p>{text}</p>
            <p>{text.split(" ").length} words and {text.length} characters</p>
           
     

        </div>
        </>    
    )

}
