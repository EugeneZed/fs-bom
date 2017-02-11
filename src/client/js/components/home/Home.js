/*H**********************************************************************
* FILENAME :        js/components/Home.js
*
* DESCRIPTION :
*       Defines the Home component. This is the landing page for the BOM subsystem.
*
* EXPORTS :
*       ---
*
* NOTES :
*       ---
*
* AUTHOR :    Jay Sridharan       START DATE :    22 Dec 16
*
*H*/
import React from 'react';
/****************Presentation*******************/
import Box from 'grommet/components/Box';
import {HomeHeader} from './HomeHeader'
import {HomeAccordions} from './HomeAccordions'
import {AddBomModal} from './AddBomModal'

/*******************Redux***************************/
import {connect} from 'react-redux';
import {fetchBoms, addBom, addBomModalOpen, addBomModalClose, accordionChange, willEnter, willLeave, transitionComplete} from '../../actions/home'
import {transition} from 'reactimate'
import {WILL_LEAVE, WILL_ENTER} from 'reactimate/lib/transitionActions'
import invertBy from 'lodash/invertBy';
import includes from 'lodash/includes';

import {getHomeState} from '../../store';
/****************************************************/
class Home extends React.Component {
  componentDidMount(){
    this.props.onMount();
  }
  render(){
    let {activeAccordion,
          isFetching,
          boms,
          addBomModalOpen,
          onAddButtonClick,
          onRefreshButtonClick,
          onAddBomModalCloseClick,
          onAddBomButtonClick,
          onAccordionChange,
          animationClasses} = this.props

    return(
        <Box className={animationClasses}>
        <Box style={{width:940,margin:"0 auto"}}>
          <HomeHeader
            onAddButtonClick={onAddButtonClick}
            onRefreshButtonClick = {onRefreshButtonClick} />
          {isFetching &&
              <p>Loading....</p>
          }
          {!isFetching &&
              <HomeAccordions
                  boms={boms}
                  activeAccordion={activeAccordion}
                  onAccordionChange={onAccordionChange}/>
           }
          {addBomModalOpen &&
              <AddBomModal
                  onAddBomClick={onAddBomButtonClick}
                  onCloseClick={onAddBomModalCloseClick} />
          }
        </Box>
        </Box>
      );
  }
}

var connected =  connect(
      (state) => ({...getHomeState(state)}),
      {
        onMount: fetchBoms,
        onAddButtonClick: addBomModalOpen,
        onRefreshButtonClick: fetchBoms,
        onAddBomModalCloseClick: addBomModalClose,
        onAddBomButtonClick: addBom,
        onAccordionChange: accordionChange
      }
)(Home)
var transitioned = transition(connected,{
  key: "home",
  willEnter: {
    classNames: (tState) => {
      var d = "section animated ";
      var inverseTState = invertBy(tState);
      var other = includes(inverseTState.WILL_LEAVE,"bom") ? "fadeInLeftBig" : "";
      return d + " " + other;
    },
    duration: 1000
  },
  willLeave: {
    classNames: (tState) => {
      var d = "section animated ";
      var inverseTState = invertBy(tState);
      var other = includes(inverseTState.WILL_ENTER,"bom") ? "fadeOutLeftBig" : "";
      return d + " " + other;
    },
    duration: 1000
  },
});
export default transitioned;
