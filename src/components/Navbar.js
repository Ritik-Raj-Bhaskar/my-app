import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!", "success");
    }
    
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case!", "success");
    }
    
    
    const handleClearClick = ()=>{
        let newText ="";
        setText(newText)
        props.showAlert("Text area is Cleared", "success");
    }


    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All extra space are removed!", "success");
    }


    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox");
        text.select()
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied", "success");
    }

    
    const handleOnchange = (event)=>{
        setText(event.target.value)
    }
    

    const [text, setText] = useState("write anything");
    return (
        <>
        <div  style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="form-group">
                {/* <label for="myBox">Example textarea</label> */}
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#12121c':'white', color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Text Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>

        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text: "Enter Something in Textbox area To Preview here....."}</p>
        </div>
        </>
    )
}


