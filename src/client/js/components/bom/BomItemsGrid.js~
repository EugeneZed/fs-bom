import React from 'react';
import BomItemsGridRow from './BomItemsGridRow';
import chunk from 'lodash/chunk'
import {transition} from 'reactimate'
class BomItemsGrid extends React.Component{

  render(){
    let {
      items,animationClasses, onItemClick
    } = this.props

    var itemGroups = chunk(items,4)
    return(
      <div className={"grid_container bomItemsView" + animationClasses}>
      {

        itemGroups.map((itemGroup,ig) =>(
          <BomItemsGridRow items={itemGroup} onItemClick={onItemClick} />
        ))
      }
      </div>
    )


  }
}

export default transition(BomItemsGrid,{
  key: "bomItemsGrid",
  willEnter: {
    classNames: "section animated fadeInLeftBig",
    duration: 1000
  },
  willLeave: {
    classNames: "section animated fadeOutLeftBig" ,
    duration: 1000
  },
})
