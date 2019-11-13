import React from "react";
import Settings from "./Settings.jsx"
import Description from "./Description.jsx"
import Game from "./Game.jsx"

//<div className="mainline"><span>Coffee Game</span><div id="logo"/></div>

const gameState={settingsShown: false,showDescription: true,startGame: false};

class App extends React.Component {
    constructor(props){
     super(props); 
     this.state=false;
     this.startGame=false;
    }

    onSettingsSet() {
     gameState.settingsShown=true;
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
     setInterval( ()=>{this.startGame=this.checkForGameStart();
                       this.forceUpdate();
                      },2000 ); 
      return (<div>
                    <div className="mainline">
                      <span>Coffee Game</span><div id="logo"></div>
                    </div>  
                    <div><Settings onSettingsSet={this.onSettingsSet} /></div>
                    <div><Description onSkipDescription={this.onSkipDescription} show={gameState.settingsShown}/></div>
                    <div><Game show={startGame}/></div>
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
