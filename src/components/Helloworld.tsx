import * as React from 'react'

export interface IHelloWorldProps { }

export class HelloWorld extends React.Component<IHelloWorldProps, object> {
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>This is pretty cool though right?!</p>
      </div>
    )
  }
}
