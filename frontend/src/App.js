import HeaderPag from "./componentes/header/index.jsx";
import React from 'react';
import FooterPag from "componentes/footer/index.jsx";
import TheMostReadBooksList from "componentes/books/theMostReadBooks"


function App() {
  return (
      <>
        <HeaderPag></HeaderPag>

        <TheMostReadBooksList/>

        <FooterPag></FooterPag>
      </>
  );
}

export default App;
