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
import {BomHeader} from './BomHeader'
import {BomItems} from './BomItems'
import {getTransitionProps} from '../../getTransitionProps'

class BOM extends React.Component {

  render(){

    let {transitionHooks} = this.props;
    console.log("render BOM");
    console.log(transitionHooks);
    if(transitionHooks.willEnter.called){
      console.log("willEnter called");
      setTimeout(transitionHooks.willEnter.callback,10000)
    }
    if(transitionHooks.willLeave.called){
      console.log("willLeave called");
      setTimeout(transitionHooks.willLeave.callback,10000)
    }

    return(
      <Box style={{width:940,margin:"0 auto"}}>
        <BomHeader/>
        <BomItems items={[{a:1},{a:1},{a:1},{a:1}]} />
      </Box>
    )
  }

}

export default getTransitionProps(BOM);
