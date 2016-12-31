import React from 'react';
import BomItem from './BomItem'
export default class BomItemsRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      height : "auto"
    }
    console.log(this);
  }
  onHeightChange(height){
    console.log("heightchange")
    console.log(this);
    this.setState({
      height : height
    })
  }
  render(){
    let {items} = this.props;
    return(
      <div>
      {
        items.map(
          (item,i) =>
              <BomItem item={items[i]} pos={i+1}
                onHeightChange={this.onHeightChange.bind(this)}
                height={this.state.height}/>
        )
      }
      </div>
    )
  }
}
