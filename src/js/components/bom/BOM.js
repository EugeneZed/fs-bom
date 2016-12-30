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

class BOM extends React.Component {

  render(){
    return(
      <Box style={{width:940,margin:"0 auto"}}>
        <BomHeader/>

      </Box>
    )
  }

}

export default BOM;
