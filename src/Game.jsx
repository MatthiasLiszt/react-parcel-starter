import React from 'react'
import Cup from './Cup.jsx'

class Game extends React.Component{

 constructor(props){
  super(props);   
  this.gameTime=0;
  this.state={gameState:'paused',nextGameState:'Resume'};
  this.gameMessage='Game Paused';
  this.gameMessageColor='yellowMessage';
  this.extraButton='finalButton';
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
   {
   }  
 }
 
 render(){
  let tid=setTimeout( ()=> {console.log('gameState '+this.props.getGameState());                    
                    if(this.props.getGameState()=='setup')
                     {this.setState({gameState: 'paused',nextGameState: 'Resume'});
                      this.props.setGameState('paused');
                     }
                    if(this.props.getGameState()=='lost')
                     {this.setState({gameState: 'lost',nextGameState: 'Retry'});
                      this.gameMessageColor='redMessage';
                      this.gameMessage='GAME OVER';
                      this.extraButton='invisible';
                      this.forceUpdate();
                     }
                       
                    if((this.state.gameState=='running')&&(this.props.getGameState()!='lost'))
                     {this.gameTime+=0.2;                
                      this.gameMessageColor='yellowMessage';      
                     }
                   }, 200); 

  this.props.pTId(tid);                 
  //console.log('cups '+this.props.settings);
  if(this.props.show){   
    return(<div className="centered">
          <p className="cupcentered">
            <center>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={1} cups={this.props.settings} pTId={this.props.pTId}></Cup>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={2} cups={this.props.settings} pTId={this.props.pTId}></Cup>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={3} cups={this.props.settings} pTId={this.props.pTId}></Cup>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={4} cups={this.props.settings} pTId={this.props.pTId}></Cup>
            </center>
          </p>
          <p className="cupcentered">
            <center>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={5} cups={this.props.settings} pTId={this.props.pTId}></Cup>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={6} cups={this.props.settings} pTId={this.props.pTId}></Cup>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={7} cups={this.props.settings} pTId={this.props.pTId}></Cup>
            <Cup report={this.props.setGameState} gState={this.state.gameState} index={8} cups={this.props.settings} pTId={this.props.pTId}></Cup>  
            </center>
          </p>  
          <p className="blueTime">{this.gameTime.toFixed(2)}s</p>
          <p className={this.gameMessageColor}>{this.gameMessage}</p>
          <p><button onClick={()=>this.runOrPauseGame()} className={this.extraButton}>{this.state.nextGameState}</button></p>
         </div>);    
   }
  else{return(<div></div>)} 
 } 
}

export default Game
