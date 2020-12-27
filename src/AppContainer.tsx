import React from 'react';
import $ = require('jquery');
import { keys } from '@material-ui/core/styles/createBreakpoints';
import './AppContainer.scss'

interface Props
{
}

interface State
{
}

export default class AppContainer extends React.Component <Props,State> 
{
  constructor(props: Props)
  {
    super(props);
    this.state =
    {
    }
  }

  render()
  {
    return(
      <div className="container_div">
        <div className = "container" >
        </div> 
      </div>
    )
  }
}