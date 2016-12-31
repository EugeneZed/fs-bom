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

class BOM extends React.Component {

  render(){
    return(
      <Box style={{width:940,margin:"0 auto"}}>
        <BomHeader/>
        <BomItems items={[{a:1},{a:1},{a:1},{a:1}]} />
      </Box>
    )
  }

}

export default BOM;
