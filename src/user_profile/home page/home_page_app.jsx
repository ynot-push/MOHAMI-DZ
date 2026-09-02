import React from 'react';
import Header from "./header";
import Content from './content';
import Content2 from "./content2";

import Footer from "./footer"
import CARDS from './CARDS';
function HomeApp() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Content2/>
      <CARDS/>
      <Footer/>
    </div>
  );
}
export default HomeApp;

