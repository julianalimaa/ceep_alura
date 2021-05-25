import React, { Component } from "react";
import "./estilo.css"

class Formulario extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default Formulario;
