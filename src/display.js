import React from 'react';

class Display extends React.Component{
    render(){
        return(
            <div className="display-body controls-background">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHoWXc3Y-jgQx_kxdKtKPHrNmKYZ6KDStIyjCp0XO3hi6t9Pz1NQGjpkDGkxZ9wol8zc4&usqp=CAU"/>
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