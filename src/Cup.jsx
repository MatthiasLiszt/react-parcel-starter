import React from 'react'

class Cup extends React.Component{

 constructor(props){
  super(props);   
  this.fullness=0;
  this.speed=1;
  this.visual=0;
  this.oldTime=this.props.time;  
 } 

 emptyCup(){
   this.fullness=this.visual=0;
   this.speed/=0.9;        
   console.log('speed '+this.speed); 
 }

 gameOver(){
  console.log('game over');
  this.props.report('lost'); 
 }
 /*
 gameFlow(){
            if(this.props.gState=='paused')
             {console.log('gameFlow paused'); }
            if(this.props.gState=='restart')
             {console.log('gameFlow reset'); 
              this.fullness=0;
              this.visual=0;
              this.speed=1;
              //this.forceUpdate();
             } 
            if(this.props.gState=='running')
             {let tid=setTimeout( ()=>{console.log('settimeout running');
                                       if(this.props.gState=='running')
                                        {if(this.fullness<5){this.fullness+=(0.6*this.speed);
                                                             this.visual=Math.floor(this.fullness);
                                                             console.log(this.fullness+' '+this.visual);
                                                             //setTimeout(this.gameFlow,200);
                                                            }   
                                         if(this.fullness>=5){this.visual=5;
                                                              this.forceUpdate();
                                                              if(this.fullness!=11)
                                                               {this.gameOver();}
                                                                this.fullness=11; 
                                                               }
                                         }
                                       },200);  
              this.props.pTId(tid);                         
             }            
           }
  */         
 gameFlow(){
  if(this.fullness<5) 
   {this.fullness+=(0.3*this.speed);
    this.visual=Math.floor(this.fullness);
    console.log(this.fullness+' '+this.visual);
   }
  else{this.gameOver();}     
 }

 componentDidUpdate(){
  this.gameFlow(); 
 }

 render(){  
    return(<div onClick={()=>this.emptyCup()}>
            <span className={'full'+String(this.visual)}></span>
           </div>);  
 }          
  
  
}

export default Cup;



