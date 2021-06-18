import React from 'react';

class Display extends React.Component{
    render(){
        return(
            <div className="display-body controls-background">
                <div className="Aside-list">
                    <div className="div1 active">Cover Flow</div>
                    <div className="div2">Games</div>
                    <div className="div3">Song</div>
                    <div className="div4">Setting</div>
                </div>
            </div>
        )
    }
}

export default Display;