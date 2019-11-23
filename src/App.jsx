import React from "react";
import Settings from "./Settings.jsx"
import Description from "./Description.jsx"
import Game from "./Game.jsx"


class App extends React.Component {

        
    
    constructor(props){
     super(props); 
     this.restart=false;
     this.gameEnd='invisible';
     this.state={settingsMenu: true, showDescription: true, cups: 1,gameState: 'paused', restart: 0};   
     this.onSettingsSet = (cups) => {
      let oldState=this.state;
      oldState.settingsMenu=false; 
      oldState.cups=cups;
      this.setState(oldState);
      console.log('settingsMenu changed');      
     };
     this.onSkipDescription = () => {
        let oldState=this.state;
        oldState.showDescription=false;
        this.setState(oldState);        
       } 
     this.setGameState= (value) => {
      let oldState=this.state;
      oldState.gameState=value; 
      this.setState(oldState);
      if(this.state.gameState==='lost'){
       this.gameEnd='finalButton'; 
      }

     };  
     
    }
    
     retryGame(){
      console.log('trying to restart game'); 
      let oldState=this.state;
      oldState.settingsMenu=false;
      oldState.showDescription=false;
      oldState.gameState='restart';
      ++oldState.restart;
      this.setState(oldState);
      this.gameEnd='invisible';
      this.restart=!this.restart;
      this.forceUpdate();
    }

    changeSettings(){
      console.log('trying to change settings'); 
      let oldState=this.state;
      oldState.settingsMenu=true;
      oldState.showDescription=false;
      oldState.gameState='paused';
      ++oldState.restart;
      this.setState(oldState);
      this.gameEnd='invisible';
      this.forceUpdate();
    }
    
    render() {
      //localStorage.setItem("noCoffeeTranscription", false);
      
      if(this.state.settingsMenu)             
       {//this.settingsMenu=false;
        return (<div >
                <div className="mainline">
                  <span>Coffee Game</span><div id="logo"></div>
                </div>  
                <div><Settings onSettingsSet={this.onSettingsSet} /></div>
                </div>);     

       }
       if(this.state.showDescription&&!this.state.settingsMenu)             
       {//this.settingsMenu=false;
        return (<div >
                  <div className="mainline">
                    <span>Coffee Game</span><div id="logo"></div>
                  </div>  
                  <div><Description onSkipDescription={this.onSkipDescription} /></div>
                </div>);     
       } 
       if(this.restart)
        {this.restart=false;
         console.log(this.restart);
         setTimeout(()=>{this.forceUpdate();},356); 
         return (<div>...restart</div>); 

        }
       if(!this.state.showDescription&&!this.state.settingsMenu){
        return (<div >
          <div className="mainline">
            <span>Coffee Game</span><div id="logo"></div>
          </div>  
          <div><Game  settings={this.state.cups} report={this.setGameState} /></div>
          <div className="centered">
            <p><button onClick={()=>this.retryGame()} className={this.gameEnd}>Retry</button></p> 
            <p><button onClick={()=>this.changeSettings()} className={this.gameEnd}>Change Settings</button></p> 
          </div>
         </div>
         );     
       }
       
    }
  }

export default App

