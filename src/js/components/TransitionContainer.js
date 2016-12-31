import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import {connect} from 'react-redux';
var childFactoryMaker = (transitionState,dispatch) => (child) => (
   React.cloneElement(child, {
    key: (child.props.route.path + "//" + child.type.displayName),
    transitionState: transitionState,
    dispatch: dispatch
  })
)

class TransitionContainer extends React.Component{
  render(){
    let{
      transitionState,
      dispatch,
      children
    } = this.props
    return(
      <div>
      <TransitionGroup childFactory={childFactoryMaker(transitionState,dispatch)}>
      {
        React.Children.map(this.props.children,
            (child) => React.cloneElement(child,
                { key: child.props.route.path + "//" + child.type.displayName}
            )
        )
      }
      </TransitionGroup>
      </div>
    )
  }
}

export default connect(
  (state)=>({transitionState:state.transitions}),
  (dispatch)=>({dispatch:dispatch})
)(TransitionContainer)
