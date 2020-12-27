import React from 'react';
import './Header.scss'

interface Props
{
  focusLink:string;
}

interface State
{
  tabList: string[];
}

export default class Header extends React.Component<Props,State>{
  constructor(props: Props)
  {
    super(props);
    this.state = {
      tabList: ["Top","Profile","Works","Contact"]
    }
  }

  render(){
    return (
      <div className="navbar">
        <ul className="top-tab-ul">
        {this.state.tabList.map( (element:string , index:number) =>
          (this.props.focusLink == element) ?
            <li key = {element} className = "top-tab active">
              <a onClick = {() => {}} className = "tab1">
                <p className = "top-tab-container">
                  {element}
                </p>
              </a>
            </li>
            :
            <li key = {element} className = "top-tab">
              <a onClick = {() =>{}} className = "tab1">
                <p className = "top-tab-container">
                  {element}
                </p>
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
