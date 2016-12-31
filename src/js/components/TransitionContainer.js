import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import {connect} from 'react-redux';
class TransitionContainer extends React.Component{
  render(){
    console.log(this.props.transitionState);
    console.log("transitionContainer");
    return(
      <div>
      <TransitionGroup>
      {
        React.Children.map(this.props.children,
         (child) => React.cloneElement(child,
           { key: child.props.route.path + "//" + child.type.displayName,
             dispatch: this.props.dispatch,
             transitionState: this.props.transitionState
           }
         )
        )
      }

      </TransitionGroup>
      </div>
    )
  }
}

export default connect((state)=>({transitionState:state.transitions}),(dispatch)=>({dispatch:dispatch}))(TransitionContainer)
