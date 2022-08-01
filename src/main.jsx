import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/reset.css'
import './assets/iconfont/iconfont.css'
import { BrowserRouter } from 'react-router-dom'
// 将store引入全局管理 通过Provider
import {Provider} from 'react-redux'
import store from './store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
