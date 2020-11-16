import './dependencies'
import React, { Component } from 'react'
import './app.css'
import Cookies from 'js-cookie'

import Rotas from './rotas'

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    const cookie = Cookies.get('cookieRecebida')
    
    if(cookie) {
      window.location.href = "#/usuario"
    }
  }

    render() {
      return (
        <div>
          <Rotas />
        </div>
      )   
    }
}
export default App