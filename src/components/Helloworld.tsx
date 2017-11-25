import * as React from 'react'

export interface HelloWorldProps {
  compiler: string
  framework: string
}

export class HelloWorld extends React.Component<HelloWorldProps, object> {
  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
}
