import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("upper case button was clicked")`
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleTrimClick = () => {
        let newText = text.trim()
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = () => {
        setText('')
    }
    const handleOnChange = (event) => {
        // console.log("handle onchange was clickedc");
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    // text = "new text"; // Wrong way to setText
    // setText("new Text"); //Correct way to set Text
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter your text" id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary m-2" onClick={handleTrimClick}>Trim text</button>
                <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear Text</button>

            </div>
            <div className="container my-4">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{text.split('\n').length} sentences</p>
                <p>{0.008 * text.split(" ").length} Minutes to read this text</p>
                <h3>Preview</h3>
                <p><strong>{text}</strong></p>
            </div>
        </>
    )
}
