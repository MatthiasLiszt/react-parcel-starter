import React from 'react'

class Cup extends React.Component{

 constructor(props){
  super(props);   
  this.fullness=0;
 } 

 emptyCup(){
   if(this.props.gState=='running')
    {this.fullness=0;}
 }

 gameFlow(){
            if(this.props.gState!='running')
             {console.log('gameFlow'); }
           else 
             {setTimeout( ()=>{console.log('settimeout running');
                           if(this.props.gState=='running')
                            {if(this.fullness<4){this.fullness+=0.1;
                                                 console.log(this.fullness);
                                                 //setTimeout(this.gameFlow,200);
                                                }   
                             if(this.fullness>=4){this.props.report();}
                            }
                          },200);  
             }            
           }
 render(){
  //console.log(this.props.index+' '+this.props.cups);   
  if(this.props.index<=this.props.cups)   
   {this.gameFlow();    
    return(<div onClick={()=>this.emptyCup()}>Cup {this.fullness}</div>);   
   }
  else
   {return(<div></div>);}  
 }
}

export default Cup



