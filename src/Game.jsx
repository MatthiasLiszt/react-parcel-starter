import React from 'react'
import Cup from './Cup.jsx'

class Game extends React.Component{

 render(){
  return(<div className="centered">
          <Cup></Cup>
          <p><button className="finalButton">this.gameState</button></p>
         </div>);    
 }
}

export default Game
