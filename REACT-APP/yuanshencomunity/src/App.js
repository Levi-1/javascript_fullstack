import React from 'react';
import Header from './Commen/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import { Jiuguan, Main } from './Components'
import store from './Store/index'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Route path="/" component={Main} exact />
          <Route path="/jiuguan" component={Jiuguan} />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
