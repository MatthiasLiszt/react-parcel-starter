import React from 'react'

class Settings extends React.Component{

 constructor(props)
  {super(props);
   this.state = {cups: 1,alreadyShown: false};
  }

 updateCups(n){
  const check=this.state.cups+n;
  if( (check>=1)&&(check<=8))
   {const cups=this.state.cups+n;
    this.setState({cups: cups, alreadyShown: this.state.alreadyShown});
    return;
  }
 }

 settingsDone(){
  localStorage.setItem("coffeecups", this.state.cups);
  this.setState({cups: this.state.cups, alreadyShown: true});
  this.props.onSettingsSet(this.state.cups);
 }

 render(){
  const cups=this.state.cups;
  if(!this.state.alreadyShown)
   {return (<div className="centered">
            <h6>Number of cups:</h6>
            <div className="box" id="cups">{this.state.cups}</div>
            <div>
             <p><button className="borderless" onClick={()=>this.updateCups(1)}>&nbsp;/\&nbsp;</button></p>
             <p><button className="borderless" onClick={()=>this.updateCups(-1)}>&nbsp;\/&nbsp;</button></p>
            </div>
            <p><button className="finalButton" onClick={()=>this.settingsDone()}>Start</button></p>
          </div>);   
   }
  else
   {return <div></div>;}        
 }   
}

export default Settings