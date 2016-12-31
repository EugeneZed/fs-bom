import React from 'react';
import classnames from 'classnames';
export default class BomItem extends React.Component{

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

    return(
       <div style={{height:height}}className={classes} ref={(el) => { this.container = el; }}>
          <div className="square-box">
             <div className="square-content">
                <span className="helper"></span>
                <img src="http://bom.team4096.org/util/img/img-648.png" /></div>
          </div>
          <p className="bomItemTitle"
              onMouseOver={()=>onHeightChange(this.container.offsetHeight + "px")}
              onMouseOut={()=>onHeightChange("auto")}>
            AmazonBasics HDMI to DVI Adapter Cable - 3 Feet (Latest Standard)
          </p>
          <p style={{marginBottom: "18%"}}>
            <span style={{textAlign: "center"}}>Amazon</span>
            <br />
            <span>3 needed</span>
            <br />
            <span>0 spare, 0 in shop</span>
            <br />
            <span>$16.47</span>
          </p>
          <div className="bg-orange statusBar">
            <span>Fully Ordered</span>
          </div>
       </div>
    )


  }



}
