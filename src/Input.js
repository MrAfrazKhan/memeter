import React from 'react'
import { func } from 'prop-types'
// import $ from 'jquery'

function Input(props){
    return(
        <form className="form">
                     <div className='row' >
                <div className="form-group col-md-3 mb-2">
                    <input onChange={props.onchange} type="text" className="form-control" name="toptext" placeholder='Enter Meme Top Text' />
                </div>
                <div className="form-group mx-sm col-md-3 mb-2">
                    <input onChange={props.onchange} type="text" className="form-control" name="bottomtext" placeholder="Enter Meme Bottom Text" />
                </div>
                <div className='col-md-2' >
                <label htmlFor='upload' className='label label-primary' >Select Image🎚</label>
                <input onChange={props.onchange} type='file' id='upload' multiple={false} accept='.jpg, .jpeg, .png, .svg, .gif, .bmp, .ico' />
                
                </div>
                <div className='col-md-4' >
                <button type='button' onClick={props.onScreenShot} className="btn btn-success mb-2">Generate Meme🙅‍😛</button>
                </div>
                </div>
        </form>
    )
}


export default Input 