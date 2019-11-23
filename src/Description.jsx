import React from 'react'

class Description extends React.Component{

  constructor(props)
   {super(props);
    this.description='The cups will fill from time to time. You can drink them empty by clicking on a cup. Try to drink all cups before they get too full. The speed of the filling process will increase after time.';
    this.skipMsg="Don't show this description again.";
    this.state={skip: this.shouldBeSkipped(), skipcheck: ' '}
   }

   shouldBeSkipped(){
    const check=localStorage.getItem("noCoffeeTranscription");   
    return (check=='true');
     
   }

   noDescription(){
    const newState={skip: this.shouldBeSkipped(),skipcheck: 'x'};   
    this.setState(newState);   
    localStorage.setItem("noCoffeeTranscription", true);   
    this.props.onSkipDescription();
   }

   skipDescription(){
    const newState={skip: true, skipcheck: 'x'};  
    this.setState(newState);    
    this.props.onSkipDescription();
   }

   render(){
    if(!this.state.skip)    
     {return (<div className="centered"><p>{this.description}</p>
                 <p><button className="white" onClick={()=>this.noDescription()}>{this.state.skipcheck}</button> {this.skipMsg}</p>
                 <p><button className="finalButton" onClick={()=>this.skipDescription()}>Start</button></p>
            </div>);  
     }       
    else
     {return <div></div>;}     
   } 
}

export default Description