import React from 'react';
import TransitionGroup from 'react-addons-transition-group';

export default class TransitionContainer extends React.Component{
  render(){
    console.log(this.props.children)
    return(
      <div>
      <TransitionGroup>
      {React.cloneElement(this.props.children, { key: this.props.children.props.route.path + "//" + this.props.children.type.displayName})}
      </TransitionGroup>
      </div>
    )
  }
}
