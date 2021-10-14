// Esse componente representa uma imagem, 
// que ao passar o mouse uma capa cobre a imagem e apresenta um texto.

import * as React from 'react';
import "../../assets/css/books/legendWhenHover.css"

function LegendWhenHover(props) {
  return (
        <>
            <div class="container">
                <img src={props.urlImg} alt="" class="image"/>
                <div class="overlay">
                    <div class="text">{props.ImgText}</div>
                </div>
            </div>
        </>
    );
}

export default LegendWhenHover;