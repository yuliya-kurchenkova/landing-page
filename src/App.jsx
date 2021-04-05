import React from 'react'
import "./assets/scss/style.scss"
import ContainerTemplate from './components/ContainerTemplate'
import PriceTemplate from './components/price/PriceTemplate'
import AsideTemplate from "./containers/asideTemplate/AsideTemplate";
import MainContent from './components/mainСontent/MainСontent'
import FooterTemplate from "./components/footer/FooterTemplate";


function App() {
  return (
      <div>
        <MainContent />
        <AsideTemplate/>
        <ContainerTemplate />
        <PriceTemplate />
        <FooterTemplate/>
      </div>
  )
};

export default App;
