import { div } from 'prelude-ls';
import React from 'react';
import ZingTouch from 'zingtouch';
// import './index.css'


class Controls extends React.Component{
    render(){
        return(
            <div className='controls-background'>
                <div className='circular-contral'>
                    <div className='select-button' onClick={(e)=>{this.props.getState(e)}}></div>
                    <div style={style.forword}>=...</div>
                    <div style={style.back}>...=</div>
                    <div style={style.menu}>Menu</div>
                    <div style={style.pause}>||</div>
                </div>
                <div className="outputt" style={style.out}>output</div>
            </div>
        );
    }

// componentDidMount()
// {
//     var currentAngle=0;
//     var target = document.querySelector('.circular-contral');
//     var region = new ZingTouch.Region(target);

//     region.bind(target, 'rotate', function(e) {
//       setOutput([
//         ['Gesture', 'Rotate'],
//         ['angle', Math.floor(e.detail.angle) + "°"],
//         ['distanceFromOrigin', Math.floor(e.detail.distanceFromOrigin) + "°"],
//         ['distanceFromLast', Math.floor(e.detail.distanceFromLast) + "°"]
//       ]);

//     });

//     function setOutput(data) {
//       var outputStr = "> ";
//       for (var i = 0; i < data.length; i++) {
//         outputStr += data[i][0] + ": " + data[i][1] + ((i === data.length - 1) ? '' : ' , ');
//       }
//       var output = document.querySelector('.outputt');
//       output.innerHTML = outputStr;
//     }   
//     }
}


const style={
    menu:{left: 56,top:14,position:'absolute'},
    forword:{left: 127,top:69,position:'absolute'},
    back:{left: 8,top:69,position:'absolute'},
    pause:{left: 75,top:128,position:'absolute'},
    out:{left:0,top:235,position:'absolute'}
}

export default Controls;