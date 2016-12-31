import React from 'react';
import BomItemsRow from './BomItemsRow';
import chunk from 'lodash/chunk'
export class BomItems extends React.Component{

  render(){
    let {
      items
    } = this.props

    var itemGroups = chunk(items,4)

    return(
      <div className="grid_container">
      {
        itemGroups.map((itemGroup,ig) =>(
          <BomItemsRow items={itemGroup} />
        ))
      }
      </div>
    )


  }



}
