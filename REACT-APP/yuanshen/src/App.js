import React from 'react';
import Header from './Commen/Header'
import Footer from './Commen/Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import {Main, World, News, Community, Comics, Charcator}from './Pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={Main}></Route>
        <Route path="/charator" component={Charcator}></Route>
        <Route path="/comics" component={Comics}></Route>
        <Route path="/community" component={Community}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/world" component={World}></Route>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
