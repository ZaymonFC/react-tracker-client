import * as React from 'react'
import { Header } from '../components/Header/Header'

export interface IAppProps { }

export class AppContainer extends React.Component<IAppProps, object> {
  render () {
    return (
      <div>
        <Header />
        <h1>Hello World!</h1>
        <p>This is pretty cool though right?!</p>
      </div>
    )
  }
}


