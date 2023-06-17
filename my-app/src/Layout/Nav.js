import * as React from "react";
import { Link } from "react-router-dom";


export function Nav () {
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/upload'}>Upload</Link>
      </div>
    )
  }