/*H**********************************************************************
* FILENAME :        js/components/Modal.js 
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
import classNames from 'classnames';

export default class Modal extends React.Component{

  render(){

    let classes=classNames({
      'easymodal': true,
      'easymodal__is_open': this.props.open,
      'easymodal__is_closed': !this.props.open
    });


    return (
      <div className={classes}>
        <div className="easymodal__wrapper" onClick={(click) => console.log(click.relatedTarget)}>

          <div className="easymodal__body" style={this.props.style}>
            <button className="easymodal__close" onClick={this.props.onCloseClick}></button>
            {this.props.children}
          </div>

        </div>
        <div className="easymodal__overlay"></div>
      </div>
    )

  }


}
