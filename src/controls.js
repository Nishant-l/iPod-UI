import { div } from 'prelude-ls';
import React from 'react';

class Controls extends React.Component{
    render(){
        return(
            <div className='controls-background'>
                <div className='circular-contral'>
                    <button className='select-button' onClick={(e)=>{e.stopPropagation();this.props.getState(e)}}></button>
                    <div style={style.forword}>=...</div>
                    <div style={style.back}>...=</div>
                    <div style={style.menu}>Menu</div>
                    <div style={style.pause}>||</div>
                </div>
            </div>
        );
    }
}


const style={
    menu:{left: 56,top:14,position:'absolute'},
    forword:{left: 127,top:69,position:'absolute'},
    back:{left: 8,top:69,position:'absolute'},
    pause:{left: 75,top:128,position:'absolute'},
    out:{left:0,top:235,position:'absolute'}
}

export default Controls;