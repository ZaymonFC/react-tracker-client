import * as React from 'react'
import { Header } from '../components/Header/Header'

export interface IAppProps { }

export class App extends React.Component<IAppProps, object> {
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>This is pretty cool though right?!</p>
        <Header />
      </div>
    )
  }
}


