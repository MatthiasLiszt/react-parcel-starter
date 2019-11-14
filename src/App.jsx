import React from "react";
import Settings from "./Settings.jsx"
import Description from "./Description.jsx"
import Game from "./Game.jsx"
import Cup from './Cup.jsx'

//<div className="mainline"><span>Coffee Game</span><div id="logo"/></div>

let timeOutIds=[];
let gameState={settingsShown: false,showDescription: true,startGame: false,cups: 1,game: 'setup'};
const pushtId=(id)=>{timeOutIds.push(id)};
const GetGameState=()=>{return gameState.game}; 
const SetGameState=(x)=>{gameState.game=x;}; 
const gameReset=()=>{console.log('GAME RESET');
                     gameState.settingsShown=false;
                     gameState.startGame=false;
                     gameState.game='setup';
                    };

class App extends React.Component {
    constructor(props){
     super(props); 
     this.state=false;     
     this.gameEnd='invisible';
     this.restart=false;
     this.settingsMenu=false;
    }

    onSettingsSet(cups) {
     gameState.settingsShown=true;
     gameState.cups=cups;
     console.log(JSON.stringify(gameState));     
    };

    onSkipDescription(){
     gameState.showDescription=false; 
    }

    getGameState(){
     return gameState.game; 
    }

    setGameState(value){
     gameState.game=value; 
    }

    bangAllTimeouts(){
      console.log('trying to cancel all timeouts ');
      timeOutIds.map((id)=>{clearTimeout(id);});
      timeOutIds.map(()=>{timeOutIds.pop();})
     }

    checkForGameStart(){
     if(gameState.settingsShown&&!gameState.showDescription){return true;}
     else{return false;}
    }

    checkForGameEnd(){
     if(gameState.game=='lost') 
      {this.gameEnd='extraButton';
       this.bangAllTimeouts(); 
      } 
    }

    retryGame(){
     console.log('trying to restart game'); 
     gameState.settingsShown=true;
     gameState.showDescription=false;
     gameState.startGame=true; 
     gameState.game='setup';
     this.gameEnd='invisible';
     this.restart=!this.restart;
     this.forceUpdate();
    }

    changeSettings(){
      console.log('trying to change settings'); 
      //alert('settings');
      gameState.settingsShown=false;
      gameState.showDescription=false;
      gameState.startGame=false; 
      gameState.game='setup';
      this.gameEnd='invisible'; 
      this.restart=undefined;
      //this.restart=!this.restart;
      //this.settingsMenu=true;
      this.forceUpdate(); 
    }
    
    render() {
      //localStorage.setItem("noCoffeeTranscription", false);
      const checkUntilGameStart = () => {gameState.startGame=this.checkForGameStart();
                                         this.checkForGameEnd();  
                                         this.forceUpdate();                                        
                                        };
      setTimeout( ()=>checkUntilGameStart(),1500 ); 
      if(!this.restart)
      {return (<div refresh={String(this.restart)}>
                    <div className="mainline">
                      <span>Coffee Game</span><div id="logo"></div>
                    </div>  
                    <div><Settings onSettingsSet={this.onSettingsSet} shown={gameState.settingsShown}/></div>
                    <div><Description onSkipDescription={this.onSkipDescription} show={gameState.settingsShown}/></div>
                    <div><Game show={gameState.startGame} settings={gameState.cups} setGameState={SetGameState} getGameState={GetGameState} pTId={pushtId}/></div>
                    <div className="centered">
                      <p><button onClick={()=>this.retryGame()} className={this.gameEnd}>Retry</button></p> 
                      <p><button onClick={()=>this.changeSettings()} className={this.gameEnd}>Change Settings</button></p> 
                    </div>
                   </div>
                   );     
      }
      if(this.restart)
       {//this.restart=false;
        return (<div refresh={String(this.restart)}>
          <div className="mainline">
            <span>Coffee Game</span><div id="logo"></div><sup>restarted</sup>
          </div>  
          <div><Game show={gameState.startGame} settings={gameState.cups} setGameState={SetGameState} getGameState={GetGameState} pTId={pushtId}/></div>
          <div className="centered">
            <p><button onClick={()=>this.retryGame()} className={this.gameEnd}>Retry</button></p> 
            <p><button onClick={()=>this.changeSettings()} className={this.gameEnd}>Change Settings</button></p> 
          </div>
         </div>
         );   
       } 
      if(this.settingsMenu)             
       {//this.settingsMenu=false;
        return (<div refresh={String(this.restart)}>
                <div className="mainline">
                  <span>Coffee Game</span><div id="logo"></div>
                </div>  
                <div><Settings onSettingsSet={this.onSettingsSet} /></div>
                </div>);     

       }
    }
  }

export default App

