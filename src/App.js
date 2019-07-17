import React from 'react';
import { Provider } from 'react-redux'
import { GlobalStyled } from './style.js';
import { GlobalIconFontStyled } from './statics/iconfont/iconfont.js';
import Header from './common/header'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled/>
      <GlobalIconFontStyled/>
      <Header/>
    </Provider>
  );
}

export default App;
