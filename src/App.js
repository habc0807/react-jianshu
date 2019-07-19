import React from 'react';
import { Provider } from 'react-redux'
import { GlobalStyled } from './style.js';
import { GlobalIconFontStyled } from './statics/iconfont/iconfont.js';
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled/>
      <GlobalIconFontStyled/>
      <Header/>
      <BrowserRouter>
        <Route path='/detail' exact component={Detail}></Route>
        <Route path='/home' exact component={Home}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
