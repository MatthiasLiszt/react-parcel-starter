import React from 'react'
import Cup from './Cup.jsx'

class Game extends React.Component{

 constructor(props){
  super(props);   
  this.state={gameState: 'paused',nextGameState: 'Start'};
  //valid gameStates are : running,  paused, lost
  
 }   

 runOrPauseGame(){
  if(this.state.gameState=='running')
   {this.setState({gameState: 'paused',nextGameState: 'Start'});}
  if(this.state.gameState=='paused')
   {this.setState({gameState: 'running', nextGameState: 'Pause'});} 
 }

 gameOver(){
  this.setState({gameState: 'lost', nextGameState: 'Restart'});   
 }

          
 
 render(){
  console.log('cups '+this.props.settings);
  if(this.props.show){   
    return(<div className="centered">
          <p>
            <Cup report={this.gameOver} gState={this.state.gameState} index={1} cups={this.props.settings}></Cup>
            <Cup report={this.gameOver} gState={this.state.gameState} index={2} cups={this.props.settings}></Cup>
            <Cup report={this.gameOver} gState={this.state.gameState} index={3} cups={this.props.settings}></Cup>
            <Cup report={this.gameOver} gState={this.state.gameState} index={4} cups={this.props.settings}></Cup>
          </p>
          <p>
            <Cup report={this.gameOver} gState={this.state.gameState} index={5} cups={this.props.settings}></Cup>
            <Cup report={this.gameOver} gState={this.state.gameState} index={6} cups={this.props.settings}></Cup>
            <Cup report={this.gameOver} gState={this.state.gameState} index={7} cups={this.props.settings}></Cup>
            <Cup report={this.gameOver} gState={this.state.gameState} index={8} cups={this.props.settings}></Cup> 
          </p>  
          <p><button onClick={()=>this.runOrPauseGame()} className="finalButton">{this.state.nextGameState}</button></p>
         </div>);    
   }
  else{return(<div></div>)} 
 } 
}

export default Game
