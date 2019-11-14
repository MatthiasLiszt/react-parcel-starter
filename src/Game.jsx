import React from 'react'
import Cup from './Cup.jsx'

class Game extends React.Component{

 constructor(props){
  super(props);   
  this.gameTime=0;
  this.state={gameState:'running',nextGameState:'Pause'};
  this.gameMessage='';
  this.gameMessageColor='yellowMessage';
  this.extraButton='invisible';
  //valid gameStates are : running,  paused, lost,restart
 }   

 runOrPauseGame(){
  if(this.state.gameState=='running')
   {this.setState({gameState: 'paused',nextGameState: 'Resume'});
    this.gameMessage='Game Paused';
   }
  if(this.state.gameState=='paused')
   {this.setState({gameState: 'running', nextGameState: 'Pause'});
    this.gameMessage='';
   } 
   if(this.state.gameState=='lost')
   {console.log('trying to restart');
    this.setState({gameState: 'restart', nextGameState: 'Pause'});
    this.gameMessage='';
    this.extraButton='invisible';
    this.props.setGameState('setup');
    this.gameTime=0;
    //this.bangAllTimeouts();
    setTimeout(()=>{this.gameTime=0;},333);
    this.forceUpdate();
    //setTimeout(()=>{this.setState({gameState: 'running', nextGameState: 'Pause'});},300);
   }  
 }

 formattedGameTime(){
  return this.gameTime.toFixed(2);
 }         

 bangAllTimeouts(){
  const lastTimeOutId=setTimeout(()=>{},1); 
  for(let i=0;i<lastTimeOutId;++i)
   {clearTimeout(i);}
 }

 changeSettings(){
  console.log('trying to reset');
  //this.bangAllTimeouts();
  this.props.reset(); 
 }
 
 render(){
  setTimeout( ()=> {console.log('gameState '+this.props.getGameState());                    
                    if(this.props.getGameState()=='setup')
                     {this.setState({gameState: 'running',nextGameState: 'Pause'});
                      this.props.setGameState('paused');
                     }
                    if(this.props.getGameState()=='lost')
                     {this.setState({gameState: 'lost',nextGameState: 'Retry'});
                      this.gameMessageColor='redMessage';
                      this.gameMessage='GAME OVER';
                      this.extraButton='extraButton';                      
                      this.forceUpdate();
                     }  
                    if((this.state.gameState=='running')&&(this.props.getGameState()!='lost'))
                     {this.gameTime+=0.2;                
                      this.gameMessageColor='yellowMessage';      
                     }
                   }, 200); 
                   
  //console.log('cups '+this.props.settings);
  if(this.props.show){   
    return(<div className="centered">
          <p className="cupcentered">
            <center>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={1} cups={this.props.settings}></Cup>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={2} cups={this.props.settings}></Cup>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={3} cups={this.props.settings}></Cup>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={4} cups={this.props.settings}></Cup>
            </center>
          </p>
          <p className="cupcentered">
            <center>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={5} cups={this.props.settings}></Cup>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={6} cups={this.props.settings}></Cup>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={7} cups={this.props.settings}></Cup>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={8} cups={this.props.settings}></Cup>  
            </center>
          </p>  
          <p className="blueTime">{this.gameTime.toFixed(2)}s</p>
          <p className={this.gameMessageColor}>{this.gameMessage}</p>
          <p><button onClick={()=>this.runOrPauseGame()} className="finalButton">{this.state.nextGameState}</button></p>
          <p><button onClick={()=>this.changeSettings()}className={this.extraButton}>Change Settings</button></p>
         </div>);    
   }
  else{return(<div></div>)} 
 } 
}

export default Game
