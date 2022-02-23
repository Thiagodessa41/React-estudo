import React, {Component} from "react";
import Membro from "./Componentes/Membro";

class App extends Component{

constructor(props){
  super(props);
  this.state =  {
        fedd: [
          {id:1, username:'Thiago', curtidas:10, comentarios:2},
          {id:2, username: 'Karol', curtidas:22, comentarios:5},
          {id:3, username:'Tifany', curtidas:30, comentarios:4},
          {id:4,username:'Carlos', curtidas:1, comentarios:0},
        ]
  };
}
  render(){
   return(
      <div>
        {this.state.fedd.map((item)=>{
             return(      
              <Membro id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}  />
           );
        })}
      </div>
   );  
  }
}

export default App;