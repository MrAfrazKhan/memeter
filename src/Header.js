import React from 'react'

function Header(){
    return(
        <header  >
            <div className='row' >
                <div className='col-md-6' >
                    <img src='https://www.freepngimg.com/thumb/internet_meme/3-2-troll-face-meme-png-thumb.png' />
                    Memeter
                    <h6>A Text Meme Generator built with Reactjs</h6>
                </div>
                <div className='col-md-6 contact' >
                <p><h6 style={{border:"1px solid gray", padding:"10px", color: "#666666", fontWeight: 700,
                    }} >Afraz Khan | 
                    <a href="https://www.linkedin.com/in/mrafrazkhan" ><i className="fa fa-linkedin"></i></a>
                    <a href="https://twitter.com/MrAfrazkhan" ><i  className="fa fa-twitter"></i></a>
                    
                    <a href="https://www.facebook.com/Afrazkhan.me" ><i className="fa fa-facebook"></i></a>
                    
                    <a href="https://github.com/MrAfrazKhan/memeter" ><i  className="fa fa-github"></i></a><sup>Code here</sup>
                    
                </h6>
            </p>
                </div>
            </div>
                     
                     
                    
                 </header>
    )
}

export default Header