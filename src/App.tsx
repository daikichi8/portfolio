import React from 'react';
import AppContainer from './AppContainer';
import Header from './Header';
import './App.scss'

interface Props
{
}

interface State
{
}

export default class App extends React.Component <Props,State> {
  constructor(props: Props)
  {
    super(props);
    this.state={
    };
  }

  render()
  {
    return(
      <main>
        <Header
          focusLink="Top"
        />
        <AppContainer
        />
      </main>
    )
  }
}