import React from 'react';
import Controls from './controls';
import Display from './display';
import ZingTouch from 'zingtouch';
class App extends React.Component {

  constructor(){
    super();
    this.state={
      count:0,
    }
  }

  getState=(e)=>{
    let screen=document.querySelector('.display-body');
    let {count}=this.state;
    if(count==0){
      screen.style.backgroundColor='black';
    }
    else if(count==1){
      screen.style.backgroundColor='brown';
    }
    else if(count==2){
      screen.style.backgroundColor='yellow';
    }
    else if(count==3){
      screen.style.backgroundColor='red';
    }
    console.log(count);
    console.log(e);
    e.stopPropogate();
  }
  
  render(){
    return (
      <div className="App">
        <h1>iPod-UI</h1>
        <Display />
        <Controls getState={this.getState}/>
      </div>
    );
  }
  componentDidUpdate(){
    console.log('didUpdate');
    // let changeAngle=Math.abs(this.state.angle-e.detail.angle);
    //   if(changeAngle>15){
    //     this.setState({angle:e.detail.angle})
    //     // console.log('wowo');
    //   }
  }

  componentDidMount(){
    console.log('mounted')
    // var currentAngle=0;
    let target = document.querySelector('.circular-contral');
    let div1 = document.querySelector('.div1');
    let div2 = document.querySelector('.div2');
    let div3 = document.querySelector('.div3');
    let div4 = document.querySelector('.div4');
    let butt=document.querySelector('.select-button')
    const list=[div1,div2,div3,div4];

    let myRegion = new ZingTouch.Region(target);
    let prevAng=0;
    let prevDistFO=0;
    let {count} = this.state;
    
    myRegion.bind(target, 'rotate', (e)=>{
      // console.log(e.detail);
      // if rotated in clockwise direction
      if(Math.abs(e.detail.angle-prevAng)>20 && e.detail.distanceFromOrigin-prevDistFO>0){
        prevAng=e.detail.angle;
        prevDistFO=e.detail.distanceFromOrigin;
        count++;
        count%=4;
        this.state.count=count;
        console.log('😋😋😋😋😋😋😋😋😋😋😋😋😋😋'+count);
        if(count==0){
          list.map((ele)=>{ele.classList.remove('active')});
          div1.classList.toggle('active');
        }
        if(count==1){
          list.map((ele)=>{ele.classList.remove('active')});
          div2.classList.toggle('active');
        }
        if(count==2){
          list.map((ele)=>{ele.classList.remove('active')});
          div3.classList.toggle('active');
        } 
        if(count==3){
          list.map((ele)=>{ele.classList.remove('active')});
          div4.classList.toggle('active');
        }
      }
      // ------------------------------------------------------------------------------

      // if rotated in anticlock direction
      else if(Math.abs(e.detail.angle-prevAng)>20 && e.detail.distanceFromOrigin-prevDistFO<0){
        prevAng=e.detail.angle;
        prevDistFO=e.detail.distanceFromOrigin;
        count--;
        count=(count+4)%(-4);
        this.state.count=count;
        console.log('😋😋😋😋😋😋😋😋😋😋😋😋😋😋'+count);
        if(count==0){
          list.map((ele)=>{ele.classList.remove('active')});
          div1.classList.toggle('active');
        }
        if(count==1){
          list.map((ele)=>{ele.classList.remove('active')});
          div2.classList.toggle('active');
        }
        if(count==2){
          list.map((ele)=>{ele.classList.remove('active')});
          div3.classList.toggle('active');
        } 
        if(count==3){
          list.map((ele)=>{ele.classList.remove('active')});
          div4.classList.toggle('active');
        }
      }
      // -------------------------------------------------------------
      myRegion.unbind(butt,'rotate');
    });   
  }

}



export default App;
