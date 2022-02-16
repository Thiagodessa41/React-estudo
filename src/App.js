import React from 'react';





const Equipe = (props) => {
  return(
      <div>
        <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
        <Social fb={props.facebook} />

      <hr/>  
      </div>
  )
}

const Social = (props) => {
  return(
    <div>
      <a href='facebook' >Facebook </a>
      <a> LinkedIn </a>
      <a>Youtube</a>
    </div>
  );
}



const Sobre = (props) =>{
  return(
    <div>
          <h2>Olá sou o(a) {props.nome} </h2>
          <h3>Cargo: {props.cargo} </h3>
          <h3>Idade: {props.idade} </h3>
    </div> 
  );
}


function App(){
  return (
     <div>
       <h1>Conheça nossa equipe:</h1>
       <Equipe nome="Thiago" cargo="Desenvolvedor" idade="38" social="https://facebook.com"/>
       <Equipe nome="Karoline" cargo="AnaliseQA" idade="22" social="https://facebook.com"/>
       <Equipe nome="Tifany" cargo="Front end" idade="38" social="https://facebook.com"/>
     </div>
  );
}



export default App;

