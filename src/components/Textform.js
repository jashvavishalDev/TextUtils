import React, {useState} from "react";


export default function Textform(props){
    const [text,setText] = useState('');

    const handleText = (event) =>
    {
        setText(event.target.value)
    };

    const convertUpCase = () =>{
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };

    const convertLowCase = () =>{
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");

    };

    const handleClearText =() =>{
        setText('');
        props.showAlert("Your text is cleared!", "success");
    };

    const handleCopyText = () =>{
        // var text = document.getElementById("textbox");
        // text.select();
        // // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied!", "success");
    };

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    };

   
    return(
        
        <>
            <div className="form-group" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2> {props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="textbox" value={text} onChange={handleText} rows="8" style={{backgroundColor:props.mode==='dark'?'#133e64':'white',color:props.mode==='dark'?'white':'black'}}/>
                </div>
            </div>
            
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertUpCase} >Convert UpperCase</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertLowCase}>Convert LowerCase</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to read</p>
                <h2>Preview your text</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}
