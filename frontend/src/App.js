import HeaderPag from "./componentes/header/index.jsx";
import React from 'react';
import FooterPag from "componentes/footer/index.jsx";
// import TheMostReadBooksList from "componentes/books/theMostReadBooks"
import ListOfEvents from "componentes/events/index.jsx";


function App() {
  return (
      <>
        <HeaderPag></HeaderPag>

        <ListOfEvents/>

        <FooterPag></FooterPag>
      </>
  );
}

export default App;
