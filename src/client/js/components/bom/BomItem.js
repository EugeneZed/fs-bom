import React from 'react';
import classnames from 'classnames';
import openItemModal from '../../actions/bom';
import {getItemNeeded, getItemStatus} from '../../reducers/bom';
export default class BomItem extends React.Component{


  getStatusClass(status){
    var classes = {
      "Pending Verification": "bg-yellow",
      "Fully Received": "bg-green",
      "Partially Received": "ribbed-green",
      "Partially Received, Order Placed": "ribbed-green",
      "Fully Ordered": "bg-orange",
      "Partially Ordered": "ribbed-orange",
      "Hidden": "bg-gray",
      "Verified": "bg-lightBlue"
    }
    return classes[status];
  }



  render(){
    let {
      item,
      pos,
      onHeightChange,
      height
    } = this.props

    var classes = classnames({
      "bomItem": true,
      "firstBomItem": (pos == 1),
      "middleBomItem": (pos > 1 && pos < 4),
      "lastBomItem": (pos == 4)
    })
    var needed = getItemNeeded(item);
    var status= getItemStatus(item);
    var statusBarClass = this.getStatusClass(status);
    return(
       <div onClick={()=>{this.props.onItemClick(item.id)}} style={{height:height}}className={classes} ref={(el) => { this.container = el; }}>
          <div className="square-box">
             <div className="square-content">
                <span className="helper"></span>
                <img src={"http://bom.team4096.org" + item.imgPath} /></div>
          </div>
          <p className="bomItemTitle"
              onMouseOver={()=>onHeightChange(this.container.offsetHeight + "px")}
              onMouseOut={()=>onHeightChange("auto")}>
            {item.desc}
          </p>
          <p style={{marginBottom: "18%"}}>
            <span style={{textAlign: "center"}}>{item.vendor}</span>
            <br />
            <span>{item.unitsNeeded} needed</span>
            <br />
            <span>{item.spareUnitsNeeded} spare, {item.unitsInShop} in shop</span>
            <br />
            <span>${(((needed) / item.unitsPerPackage) * item.packagePrice).toFixed(2)}</span>
            <br />
            <span style={{visibility: (item.customization?"":"hidden")}}> Custom: {item.customization}</span>
          </p>
          <div className={"statusBar " + statusBarClass}>
            <span>{status}</span>
          </div>
       </div>
    )


  }



}
