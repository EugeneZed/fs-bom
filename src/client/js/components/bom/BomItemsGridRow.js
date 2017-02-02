import React from 'react';
import BomItem from './BomItem'
export default class BomItemsGridRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      height : "auto"
    }
  }
  onHeightChange(height){
    this.setState({
      height : height
    })
  }
  render(){
    let {items, onItemClick} = this.props;
    return(
      <div style={{height: this.state.height}}>
      {
        items.map(
          (item,i) =>
              <BomItem item={items[i]} pos={i+1}
                onHeightChange={this.onHeightChange.bind(this)}
                height={this.state.height}
                onItemClick={onItemClick}/>
        )
      }
      </div>
    )
  }
}
