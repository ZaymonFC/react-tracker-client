import * as React from 'react'

// Header Props
export interface IHeaderProps {

}

export const Header = (props: IHeaderProps) => {
  return (
    <div className="navbar">
      <div className="navbar navbar-heading">
        <h1 className="float-left">Refractive Development</h1>
        <ul>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
        </ul>
      </div>
    </div>
  )
}
