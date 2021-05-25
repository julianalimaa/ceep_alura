import React, { Component } from "react";
import {CardNota} from "./components/CardNota/CardNota"
import "./estilo.css"


class ListDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos", "Lazer").map((categoria, index) => {
          return (
            <li key={index} >
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
				})}
    	</ul>
		);
  }
}

export default ListDeNotas;
