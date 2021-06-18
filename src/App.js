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
    let imgg=screen.querySelector('img');
    let {count}=this.state;
    if(count===0){
      imgg.setAttribute('src',"https://www.nicepng.com/png/detail/209-2099634_adult-content-safesearch-headphones-music-listen-music.png");
    }
    else if(count===1){
      imgg.setAttribute('src',"https://www.wallpaperup.com/uploads/wallpapers/2013/12/02/182118/37670e051fdbf2f0a0ede624bd78004b-700.jpg");
    }
    else if(count===2){
      imgg.setAttribute('src',"https://i.pinimg.com/originals/2d/1d/1b/2d1d1be4885faf57c86bc4f306e9d805.jpg")
    }
    else if(count===3){
      imgg.setAttribute('src',"https://i.pinimg.com/originals/1d/15/7a/1d157ac15b99f15588638b5b67cd2966.png")
    }
    console.log(count);
    console.log(e);
    // e.stopPropogate();
    e.stopPropagation();
  }
  // rendering the App
  render(){
    return (
      <div className="App">
        <Display />
        <Controls getState={this.getState} menuu={this.toggleMenu}/>
      </div>
    );
  }
  // --------------------------------------------------------------------------
  toggleMenu=()=>{
    let menu=document.querySelector('.Aside-list');
    // console.log(menu.getAttribute('visibility'));
    console.log(menu);
  }
  componentDidUpdate(){
    console.log('didUpdate');
  }

// adding controller to regester rotate event after the component is mounted
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
      if(Math.abs(e.detail.angle-prevAng)>20 && e.detail.distanceFromOrigin-prevDistFO>30){
        prevAng=e.detail.angle;
        prevDistFO=e.detail.distanceFromOrigin;
        count++;
        count%=4;
        this.state.count=count;
        console.log('😋😋😋😋😋😋😋😋😋😋😋😋😋😋'+count);
        if(count===0){
          list.map((ele)=>{ele.classList.remove('active')});
          div1.classList.toggle('active');
        }
        if(count===1){
          list.map((ele)=>{ele.classList.remove('active')});
          div2.classList.toggle('active');
        }
        if(count===2){
          list.map((ele)=>{ele.classList.remove('active')});
          div3.classList.toggle('active');
        } 
        if(count===3){
          list.map((ele)=>{ele.classList.remove('active')});
          div4.classList.toggle('active');
        }
      }
      // ------------------------------------------------------------------------------

      // if rotated in anticlock direction
      else if(Math.abs(e.detail.angle-prevAng)>20 && e.detail.distanceFromOrigin-prevDistFO<-30){
        prevAng=e.detail.angle;
        prevDistFO=e.detail.distanceFromOrigin;
        count--;
        count=(count+4)%(-4);
        this.state.count=count;
        console.log('😋😋😋😋😋😋😋😋😋😋😋😋😋😋'+count);
        if(count===0){
          list.map((ele)=>{ele.classList.remove('active')});
          div1.classList.toggle('active');
        }
        if(count===1){
          list.map((ele)=>{ele.classList.remove('active')});
          div2.classList.toggle('active');
        }
        if(count===2){
          list.map((ele)=>{ele.classList.remove('active')});
          div3.classList.toggle('active');
        } 
        if(count===3){
          list.map((ele)=>{ele.classList.remove('active')});
          div4.classList.toggle('active');
        }
      }
      // -------------------------------------------------------------
      myRegion.unbind(butt,'rotate');
    });   
  }

}
// ----------------------------------------------------------------------------------------

export default App;
