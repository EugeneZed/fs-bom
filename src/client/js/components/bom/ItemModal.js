import React from 'react';
import Modal from '../Modal';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import AppsIcon from 'grommet/components/icons/base/Apps';
import {getItemNeeded, getItemStatus} from '../../reducers/bom';
export default class ItemModal extends React.Component{

  render(){

    let {onCloseClick, item} = this.props;

    let actionButtonStyles = {
      top: "5px",
      right: "5px",
      height: "40px",
      width: "40px",
      position: "absolute",
      display: "block",
      borderRadius: "100%"
    }

    var needed = getItemNeeded(item);
    var status = getItemStatus(item)

    return(

      <Modal style={{maxWidth:"100%", minHeight: "100%"}} open={true} onCloseClick={onCloseClick}>
        <h2>{item.desc}</h2>
        <div className="grid_container">
          <div className="itemModalPicture">
            <div className="square-box" style={{borderBottom:0}}>
               <div className="square-content">
                  <span className="helper"></span>
                  <img style={{width:"100%"}} src={"http://bom.team4096.org" + item.imgPath} />
                </div>
            </div>
          </div>
          <div className="itemModalContent">

            <h3 style={{textDecoration: "underline"}}>Item Information</h3>
            <h4>Part Number : {item.partNumber}</h4>
            <h4>Vendor : {item.vendor}</h4>
            {item.cust && <h4 className="fg-white">Customization : {item.cust}</h4>}

            <div>
              <div className="grid_container marginTop20">
                <div className="bg-orange itemModal1of8Left border1pxBlack">
                  <h4 className="fg-white">{item.unitsNeeded} needed</h4>
                </div>
                <div className="bg-orange itemModal1of8Right border1pxBlack">
                  <h4 className="fg-white"> {item.spareUnitsNeeded} spare</h4>
                </div>
              </div>
              <div className="grid_container marginTop20">
                <div className="bg-orange itemModal2of8Left border1pxBlack">
                  <h4 className="fg-white"> {item.unitsInShop}  in shop</h4>
                </div>
              </div>
              <div className="grid_container marginTop20">
                <div className="bg-lightBlue itemModal2of8Left border1pxBlack">
                  <h4 className="fg-white"> {needed} needed total
                  </h4>
                </div>
                <div className="bg-lightBlue itemModal2of8Right border1pxBlack">
                  <h4 className="fg-white"> {item.unitsPerPackage} per pack</h4>
                </div>
              </div>
              <div className="grid_container marginTop20">
                <div className="bg-green itemModal4of8Left border1pxBlack">
                  <h4 className="fg-white"> {Math.ceil(needed/item.unitsPerPackage)} packs needed </h4>
                </div>
                <div className="bg-green itemModal4of8Right border1pxBlack">
                  <h4 className="fg-white"> ${item.packagePrice} per pack</h4>
                </div>
              </div>
              <div className="grid_container marginTop20">
                <div className="bg-magenta itemModal8of8 border1pxBlack">
                  <h4 className="fg-white">Item Total : ${(Math.ceil(needed/item.unitsPerPackage) * item.packagePrice).toFixed(2)}</h4>
                </div>
              </div>
            </div>


            {item.notes && <h4>Notes</h4> }
            {item.notes && <p>{item.notes}</p>}
            <br />
            <h3 style={{marginTop: "60px"}}>Status</h3>
            <h2>{status}</h2>
          </div>



        </div>
      </Modal>

    )
  }
}
