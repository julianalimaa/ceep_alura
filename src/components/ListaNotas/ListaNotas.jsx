import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css"

class ListaNotas extends Component {
  render() {
    return (
      <section className="lista-notas">
        <ul className="lista-notas_itens">
					{Array.of("Trabalho", "Trabalho", "Estudo", 1 , 1 , 1 , 1 , 1).map((categoria, index) => {
						return (
							<li className="lista-notas_item" key={index}>
								<div>{}</div>
            		<CardNota />
          	</li>
						)
					})}
        </ul>
      </section>
    );
  }
}

export default ListaNotas;
