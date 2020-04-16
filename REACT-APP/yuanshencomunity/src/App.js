import React from 'react';
import  Header from './Commen/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import { Jiuguan, Main } from './Components'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Route path="/" component={Main} exact/>
        <Route path="/jiuguan" component={Jiuguan}/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
