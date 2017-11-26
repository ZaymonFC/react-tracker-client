import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/App'

import './styles/entry.scss'

const mount = document.getElementById('js-react-app-mount')

ReactDOM.render (
  <App />,
  mount,
)
