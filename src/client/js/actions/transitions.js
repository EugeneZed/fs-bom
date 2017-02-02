export const REGISTER_COMPONENT_ACTION = '@@css-transitions/REGISTER_COMPONENT';
export const DESTROY_COMPONENT_ACTION = '@@css-transitions/DESTROY_COMPONENT';
export const WILL_ENTER = 'WILL_ENTER';
export const WILL_LEAVE = 'WILL_LEAVE';
export const TRANSITION_COMPLETE = 'TRANSITION_COMPLETE';
export const WILL_ENTER_ACTION = '@@css-transitions/WILL_ENTER';
export const WILL_LEAVE_ACTION = '@@css-transitions/WILL_LEAVE';
export const TRANSITION_COMPLETE_ACTION = '@@css-transitions/TRANSITION_COMPLETE';

export const willEnter = (key) => ({type: WILL_ENTER_ACTION, key: key})
export const willLeave = (key) => ({type: WILL_LEAVE_ACTION, key: key})
export const transitionComplete = (key) => ({type: TRANSITION_COMPLETE_ACTION, key: key})
export const registerComponent = (key) => ({type: REGISTER_COMPONENT_ACTION, key: key})
export const destroyComponent = (key) => ({type: DESTROY_COMPONENT_ACTION, key: key})
