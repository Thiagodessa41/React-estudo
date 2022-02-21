import React, {Component} from "react";

class Membro extends Component{

    constructor(props){
        super(props);
        this.state ={
            nome: props.nome
        };
        this.entrar=this.entrar.bind(this);
    }
entrar(){
    this.setState({nome: 'Thiago'})
}

    render(){
        return(
            <div>
                <h3>
               Bem vindo(a) {this.state.nome}
                </h3>

                <button onClick={this.entrar}> 
                    Entrar como Thiago
                </button>

                <button onClick={()=> this.setState({nome: ''}) }>
                    Sair
                </button>
              
            </div>
        )
    }
}

export default Membro;