import React from "react";
import Settings from "./Settings.jsx"
import Description from "./Description.jsx"
import Game from "./Game.jsx"
import Cup from './Cup.jsx'

//<div className="mainline"><span>Coffee Game</span><div id="logo"/></div>

const gameState={settingsShown: false,showDescription: true,startGame: false,cups: 1};

class App extends React.Component {
    constructor(props){
     super(props); 
     this.state=false;
     this.startGame=false;
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
     return gameState; 
    }

    checkForGameStart(){
     if(gameState.settingsShown&&!gameState.showDescription){return true;}
     else{return false;}
    }

    render() {
      //localStorage.setItem("noCoffeeTranscription", false);
      const checkUntilGameStart = () => {this.startGame=this.checkForGameStart();
                                        this.forceUpdate();
                                        if(!this.startGame){
                                         //setTimeout(checkUntilGameStart(),1500); 
                                        }
                                       };
      setTimeout( ()=>checkUntilGameStart(),1500 ); 
      return (<div>
                    <div className="mainline">
                      <span>Coffee Game</span><div id="logo"></div>
                    </div>  
                    <div><Settings onSettingsSet={this.onSettingsSet} /></div>
                    <div><Description onSkipDescription={this.onSkipDescription} show={gameState.settingsShown}/></div>
                    <div><Game show={this.startGame} settings={gameState.cups}/></div>
                   </div>
                   );     
    }
  }

export default App

/*
const StyledText = styled.p`
  color: darkgoldenrod;
  text-decoration: underline;
`
*/
/*
const App = () => (
  <div>
    <h1>Coffee Game</h1>
  </div>
);
//<StyledText>This text is styled with styled components :)</StyledText>
*/
