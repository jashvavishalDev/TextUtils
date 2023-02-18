import React from 'react'

export default function About(props) {
    let myStyle = {
        color : props.mode === 'dark'?'white':'#042743',
        backgroundColor : props.mode === 'dark'?'rgb(36 74 104)':'white',
        border : '1px solid',
        // borderColor : props.mode ==='dark'?'white':'#042743'
    }
    return (
    <div className="container" >
        <h1 className="my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample" >
            <div className="card" style={myStyle}>
                <div className="card-header" id="headingOne"  >
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left"   type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color:props.mode==='dark'?'white':'#042743'}}>
                        <strong>Analyze the text</strong>
                    </button>
                </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or convert to uppercase or lowercase etc..
                </div>
                </div>
            </div>
            <div className="card"  style={myStyle}>
                <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color:props.mode==='dark'?'white':'#042743'}}>
                    <strong>Free to use </strong>
                    </button>
                </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="card"  style={myStyle}>
                <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed"  type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color:props.mode==='dark'?'white':'#042743'}}>
                    <strong>Browser Compatible </strong>
                    </button>
                </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body" style={myStyle}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
