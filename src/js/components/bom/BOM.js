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
import {transition} from '../../css-transition'

class BOM extends React.Component {

  render(){
    let {animationClasses} = this.props;

    return(
      <Box className={animationClasses}>
      <Box style={{width:940,margin:"0 auto"}}>
        <BomHeader/>
        <BomItems items={[{a:1},{a:1},{a:1},{a:1}]} />
      </Box>
      </Box>
    )
  }

}

export default transition(BOM,{
  willEnter: {
    classNames: "section animated fadeInRightBig",
    duration: 1000
  },
  willLeave: {
    classNames: "section animated fadeOutRightBig",
    duration: 1000
  },
});
