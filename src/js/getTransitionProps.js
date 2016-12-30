import React from 'react';
import getDisplayName from 'react-display-name';
import merge from 'lodash/merge'
export function getTransitionProps(WrappedComponent) {
  return class Transition extends React.Component {
    static displayName = `Transition(${getDisplayName(WrappedComponent)})`;
    constructor(props) {
      super(props);
      this.state = {
        transitionHooks: {
          willLeave: {
            called: false,
            callback: null
          },
          willEnter: {
            called: false,
            callback: null
          },
        }
      };
    }
    componentWillLeave(callback){
      console.log("getTransitionProps: componentWillLeave")
      this.setState(merge(this.state,{
        transitionHooks: {
          willLeave: {
            called: true,
            callback: callback
          }
        }
      }));
    }
    componentWillEnter(callback){
      console.log("getTransitionProps: componentWillEnter")

      this.setState(merge(this.state,{
        transitionHooks: {
          willEnter: {
            called: true,
            callback: callback
          }
        }
      }));
    }
    render() {
      return <WrappedComponent transitionHooks={this.state.transitionHooks} {...this.props}/>
    }
  }
}
