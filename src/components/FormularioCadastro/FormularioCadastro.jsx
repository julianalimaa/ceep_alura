import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="formulario">
        <input 
          type="text" 
          placeholder="Título"
          className="formulario-cadastro_input"/>
        <textarea 
          rows={15}
          placeholder="Escreva sua nota..." 
          className="formulario-cadastro_input"/>
        <button className="formulario_botao formulario-cadastro_input">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
