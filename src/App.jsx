import React from 'react'
import "./assets/scss/style.scss"
import Header from "./components/headerTemplate/Header"
import {ContainerTemplate} from './containers/ContainerTemplate'
import PriceTemplate from './components/price/PriceTemplate'


function App() {

  return (
      <div>
        <Header />
        <ContainerTemplate />
        <PriceTemplate />
      </div>
  )
};

export default App;
