import React from 'react';
import Header from './COMMON/header/index.js'
import store from './STORE/index.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/index.js';
import Detail from './pages/detail/loadable'; // 添加loadable使detail按需加载，不会在页面开始时，全部加载
import Login from './pages/login'
import Write from './pages/write'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Route path='/' exact component={Home} />
        <Route path='/detail/:id' exact component={Detail} /> {/**此时通过路由传递的id数据将会传递到loadable而不是直接传递给detail */}
        <Route path='/login' exact component={Login} />
        <Route path='/write' component={Write}/>
      </BrowserRouter>
    </Provider>

  )
}

export default App;
