import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HelloWorld } from './components/HelloWorld'

const mount = document.getElementById('js-react-app-mount')

ReactDOM.render (
  <HelloWorld/>,
  mount,
)
