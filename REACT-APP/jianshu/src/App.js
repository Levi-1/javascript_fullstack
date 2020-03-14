import React from 'react';
import Header from './COMMON/header/index.js'
import store from './STORE/index.js'
import { Provider } from 'react-redux'

function App() {
  return(
    <Provider store={store}>
      <Header></Header>
    </Provider>
    
  )
}

export default App;
