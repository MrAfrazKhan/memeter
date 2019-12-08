import React from 'react'
import './meme.css'
import Meme from './Meme'
import Header from './Header'
import Input from './Input'
import saveAs from 'file-saver'
import html2canvas from 'html2canvas'
import { func } from 'prop-types'

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            toptext : '',
            bottomtext : '',
            img : '',
            imgName : ''
        }
        this.onChange = this.onChange.bind(this)
        this.takeScreenShot = this.takeScreenShot.bind(this)
    }

    // take screenshot of selected image 

    takeScreenShot(e){

        if (this.state.img === '' || this.state.img === null){
            alert('🔧please, select an image first. 😧')
        }else{

            document.getElementById('footer').style.display = 'block'
            document.getElementsByClassName('meme')[0].style.backgroundColor = 'black'

            html2canvas(document.getElementsByClassName('meme')[0], {allowTaint:true, backgroundColor:null}).then(canvas => {            
                saveAs(canvas.toDataURL(), (this.state.imgName.split('.')[0] + ".png"))
            })
            document.getElementById('footer').style.display = 'none'
        }

    }

    // handle change events 

    onChange(e){
        var {name, type, value} = e.target;

        // when file input is changed or incorporated
        if (type === 'file'){

            var startIndex = (value.indexOf('\\') >= 0 ? value.lastIndexOf('\\') : value.lastIndexOf('/'));
            var filename = value.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1);
            }

            this.setState({
                img : URL.createObjectURL(e.target.files[0]),
                imgName : filename
            })
        }

        // when textbox texts are changed
        else{
            this.setState({
                [name] : value
            })    
        }
        
    }
    render(){
        return (
             <div>
                 <Header />
                 <hr></hr>
                 <Input onchange={this.onChange} onScreenShot={this.takeScreenShot} />
                <Meme img={this.state.img} bottomtext={this.state.bottomtext} toptext={this.state.toptext}  />
             </div>
        )
    }
}

export default App
