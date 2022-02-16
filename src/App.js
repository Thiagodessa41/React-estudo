import React,{ Component } from 'react';

class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
        <Social/>
          <hr/>  
      </div>
    )
  }
}

const Social = () => {
  return(
    <div>
       <a>Facebook </a>
       <a>LinkedIn </a>
       <a>GitHub </a>
    </div>
  )
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h3>Olá sou o (a) {this.props.nome} </h3>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} </h3>
      </div>
    )
  }
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Thiago" cargo="Desenvolvedor" idade="38" />
      <Equipe nome="Carlos" cargo="Analista de sistemas" idade="25" />
    </div>
  )
}


export default App;

