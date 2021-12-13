import React from 'react'
// import ReactResizeDetector from 'react-resize-detector'

function Meme(props){
    return(
        <div className='meme' >
            <p >{props.toptext}</p>
            <img id='memeImg' src={props.img} />  
            <p>{props.bottomtext}</p>
            <h6 id = "footer" >https://afraz-khan.github.io/memeter</h6>
            </div>
    )
}

export  default Meme
