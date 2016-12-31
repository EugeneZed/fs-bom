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
import {transition} from '../../css-transition'
import {WILL_LEAVE, WILL_ENTER} from '../../actions/transitions'
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

export default transition(connect(
      (state) => ({
        boms: state.home.boms,
        isFetching : state.home.isFetching,
        addBomModalOpen: state.home.addBomModalOpen,
        activeAccordion: state.home.activeAccordion
      }),
      {
        onMount: fetchBoms,
        onAddButtonClick: addBomModalOpen,
        onRefreshButtonClick: fetchBoms,
        onAddBomModalCloseClick: addBomModalClose,
        onAddBomButtonClick: addBom,
        onAccordionChange: accordionChange
      }
)(Home),{
  key: "home",
  willEnter: {
    classNames: (tState) => {
      var d = "section animated ";
      if(tState.bom == WILL_LEAVE){
        return d + "fadeInLeftBig";
      }
      else{
        return "";
      }
    },
    duration: 1000
  },
  willLeave: {
    classNames: (tState) => {
      var d = "section animated ";
      if(tState.bom == WILL_ENTER){
        return d + "fadeOutLeftBig";
      }
      else{
        return "";
      }
    },
    duration: 1000
  },
})
