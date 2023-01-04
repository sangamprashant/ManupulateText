import React from 'react'

export default function About(props) {

    
  let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#0b4c6a':'white',
    border:'2px solid',
    borderColor:props.mode==='dark'?'white':'black'
  }



  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1 className="my-2">About Us</h1>
        <div className="accordion"  style={{backgroundColor:props.color==='dark'?'danger':'black'}}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={myStyle}>
                    <strong>Prashant Srivastav</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body">
                    <strong>Head</strong><br />Designe and code the page. <br/>
                    <button href="https://sangamprashant.github.io/sangam_prashant/"
                    className="btn btn-primary mx-2"
                    >Portfolio</button>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>Muskaan Khan</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body">
                    <strong>ast.head</strong><br/>Help in design the page.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>Purnesh Kumar Soni</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body">
                    <strong>ast.head</strong> <br/>Help in design the page.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
