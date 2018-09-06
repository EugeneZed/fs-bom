/*H**********************************************************************
* FILENAME :        js/components/BOM.js
*
* DESCRIPTION :
*       Defines the BOM component. This component shows information about one BOM.
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
import BomHeader from './BomHeader'
import BomItemsFilter from './BomItemsFilter'
import {transition} from 'reactimate'
import {fetchBomItems, openItemModal, closeItemModal, openAddBomItemModal, closeAddBomItemModal, grabAddBomItemModalInfo, submitAddBomItemModal} from '../../actions/bom'
import invertBy from 'lodash/invertBy';
import includes from 'lodash/includes';
import reverse from 'lodash/reverse';
import {WILL_LEAVE, WILL_ENTER} from 'reactimate/lib/transitionActions'
import {connect} from 'react-redux';
import TransitionContainer from '../TransitionContainer';
import {getBomItems, getBomItemViewModalItem, getAddBomItemModalOpen} from '../../store';
import ItemModal from './ItemModal';
import AddBomItemModal from './AddBomItemModal';
import {push} from 'react-router-redux';
class BOM extends React.Component {

  componentDidMount(){
    this.props.onMount(this.props.params.bomID);
  }

  render(){
    let {
      animationClasses,
      getItems,
      onItemClick,
      onItemModalCloseClick,
      getItemViewModalItem,
      onGridViewClick,
      onTableViewClick,
      addItemModalOpen,
      onAddItemModalClick,
      onAddItemModalCloseClick,
      onAddItemModalGrabInfo,
      onAddItemModalSubmitClick,
      params: {
        bomID
      }
    } = this.props;

    var itemViewModalItem = getItemViewModalItem(bomID)

    return(
      <Box className={animationClasses}>
        <Box style={{width:940,margin:"0 auto"}}>
          <BomHeader bomID={bomID} onAddItemClick={onAddItemModalClick} onGridViewClick={onGridViewClick} onTableViewClick={onTableViewClick}/>
          <BomItemsFilter />
          <TransitionContainer style={{position:"relative"}}>
          {
            React.Children.map(this.props.children,
                (child) => React.cloneElement(child,
                    {items: reverse(getItems(bomID)),
                     onItemClick: onItemClick(bomID)}
                )
            )
          }
          </TransitionContainer>

        </Box>
        { itemViewModalItem &&
            <ItemModal
                onCloseClick={onItemModalCloseClick(bomID)}
                item={itemViewModalItem} />
        }
        { addItemModalOpen &&
            <AddBomItemModal
                onCloseClick={onAddItemModalCloseClick}
                onGrabInfo={onAddItemModalGrabInfo}
                onSubmitClick={onAddItemModalSubmitClick} />
        }

      </Box>
    )
  }

}

var connected = connect((state)=>({

    getItems: (bomID)=>getBomItems(state,bomID),
    getItemViewModalItem: (bomID) => getBomItemViewModalItem(state,bomID),
    addItemModalOpen: getAddBomItemModalOpen(state)

  }),
  (dispatch, ownProps)=>({
    onMount: (bomID) => dispatch(fetchBomItems(bomID)),
    onItemClick: (bomID) => (itemID) => dispatch(openItemModal(bomID,itemID)),
    onItemModalCloseClick: (bomID) => () => dispatch(closeItemModal(bomID)),
    onGridViewClick: () => dispatch(push(`/bom/${ownProps.params.bomID}/grid#`)),
    onTableViewClick: () => dispatch(push(`/bom/${ownProps.params.bomID}/table#`)),
    onAddItemModalClick: () => dispatch(openAddBomItemModal()),
    onAddItemModalCloseClick: () => dispatch(closeAddBomItemModal()),
    onAddItemModalGrabInfo: (formValues) => () => dispatch(grabAddBomItemModalInfo(formValues)),
    onAddItemModalSubmitClick: (data) => () => dispatch(submitAddBomItemModal(data))
  })

)(BOM);

export default transition(connected,{
  key: "bom",
  willEnter: {
    classNames: (tState) => {
      var d = "section animated ";
      var inverseTState = invertBy(tState);
      var other = includes(inverseTState.WILL_LEAVE,"home") ? "fadeInRightBig" : "";
      return d + " " + other;
    },
    duration: 1000
  },
  willLeave: {
    classNames: (tState) => {
      var d = "section animated ";
      var inverseTState = invertBy(tState);
      var other = includes(inverseTState.WILL_ENTER,"home") ? "fadeOutRightBig" : "";
      return d + " " + other;
    },
    duration: 1000
  },
});
