import React from 'react';
import getDisplayName from 'react-display-name';
import merge from 'lodash/merge'
import classnames from 'classnames'
export function transition(WrappedComponent, options) {
  return class Transition extends React.Component {
    static displayName = `Transition(${getDisplayName(WrappedComponent)})`;
    constructor(props) {
      super(props);
      this.state = {
          willLeave:false,
          willEnter:false,
      };
    }
    resetState(){
      this.setState(merge(this.state,{
        willLeave: false,
        willEnter: false
      }));
    }
    componentWillLeave(callback){
      this.setState(merge(this.state,{
        willLeave: true,
        willEnter: false
      }));
      setTimeout(()=>{this.resetState();callback();},options.willLeave.duration);
    }
    componentWillEnter(callback){
      this.setState(merge(this.state,{
        willEnter: true,
        willLeave: false
      }));
      setTimeout(()=>{this.resetState();callback();},options.willEnter.duration);
    }
    render() {
      var classes = classnames(
        {[options.willEnter.classNames] : this.state.willEnter},
        {[options.willLeave.classNames] : this.state.willLeave},
      )
      return <WrappedComponent animationClasses={classes} {...this.props}/>
    }
  }
}
