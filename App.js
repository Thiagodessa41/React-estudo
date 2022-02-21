import React, {Component} from "react";
import Membro from "./Componentes/Membro";



class App extends Component{
  render(){
    return(
        <div>
           <h2>
              <Membro nome="Visitante"/>
           </h2>       
        </div>
    );
  }
}


export default App;