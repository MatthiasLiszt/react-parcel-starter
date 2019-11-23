import React from 'react'
import Cup from './Cup.jsx'

class Game extends React.Component{

 constructor(props){
  super(props);   
  this.interval=200;
  this.gameTime=0;
  this.tid=0;
  this.state={gameState:'paused',nextGameState:'Resume'};
  this.gameMessage='Game Paused';
  this.gameMessageColor='yellowMessage';
  this.extraButton='finalButton';
  //valid gameStates are : running,  paused, lost,restart
  this.setGameState= (value) => {
   let newState=this.state;
   if(this.state.gameState!=='lost')
    {newState.gameState='lost';
     newState.nextGameState='Retry';
     this.setState(newState); 
     clearTimeout(this.tid);
    } 
  }
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

 gameFlow(){
  this.tid=setTimeout( ()=>{console.log('gameState '+this.state.gameState);
                           if(this.state.gameState==='running')
                            {this.gameTime+=0.2;                
                             this.gameMessageColor='yellowMessage'; 
                             this.forceUpdate();
                             
                            } 
                            if(this.state.gameState==='lost')
                             {this.gameMessageColor='redMessage';
                              this.gameMessage='GAME OVER';
                              this.extraButton='invisible';
                              this.interval*=10000;
                              this.props.report('lost');
                              //this.forceUpdate();
                             }
                          },this.interval);
  //return clearTimeout(this.tid);                        
 } 

 componentWillUnmount(){
  clearTimeout(this.tid);
 }

 componentDidUpdate(){
  this.gameFlow(); 
 }
 
 render(){               
  console.log('cups '+this.props.settings);
  //<Cup report={this.props.setGameState} gState={this.state.gameState} index={1} cups={this.props.settings} ></Cup>
  let mydata=[...Array(this.props.settings)];       
  return(<div className="centered">

          <div className="cupcentered">
            {mydata.map((x,i) => <Cup key={i+1} report={this.setGameState} time={this.gameTime}/>  )}
          </div>
             
  
          <p className="blueTime">{this.gameTime.toFixed(2)}s</p>
          <p className={this.gameMessageColor}>{this.gameMessage}</p>
          <p><button onClick={()=>this.runOrPauseGame()} className={this.extraButton}>{this.state.nextGameState}</button></p>
         </div>);    
   
  
 } 
}

export default Game
