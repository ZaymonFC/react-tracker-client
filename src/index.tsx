import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from './components/AppContainer'

import './styles/entry.scss'

const mount = document.getElementById('js-react-app-mount')

ReactDOM.render (
  <AppContainer />,
  mount,
)
