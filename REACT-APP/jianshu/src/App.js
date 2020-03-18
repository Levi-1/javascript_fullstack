import React from 'react';
import Header from './COMMON/header/index.js'
import store from './STORE/index.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js';

function App() {
  return(
    <Provider store={store}>
      <Header></Header>
      <BrowserRouter>
        <Route path='/' exact component={Home}/>
        <Route path='/detail' component={Detail}/>
      </BrowserRouter>
    </Provider>
    
  )
}

export default App;
