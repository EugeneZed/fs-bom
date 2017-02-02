import React from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Title from 'grommet/components/Title';
import AddIcon from 'grommet/components/icons/base/Add';
import AppsIcon from 'grommet/components/icons/base/Apps'
import SortIcon from 'grommet/components/icons/base/Sort'
import DocumentDownloadIcon from 'grommet/components/icons/base/CloudDownload'
import RefreshIcon from 'grommet/components/icons/base/Refresh'
import Header from 'grommet/components/Header';
export default class BomHeader extends React.Component{
  render(){
    let{bomID, onGridViewClick, onTableViewClick}=this.props;
    return(
      <Box><Box pad="small">
        <Header>
          <Title style={{fontSize:35}}>
              Drivetrain
          </Title>
          <Box flex={true}
            justify="end"
            direction="row"
            responsive={false}>

            <Button icon={<AppsIcon size="medium"/>}
              className = "actionButton bg-cyan fg-white"
              primary={true}
              label="Item View"
              href="#"
              onClick={onGridViewClick}/>

            <Button icon={<SortIcon size="medium"/>}
              className="actionButton bg-cobalt fg-white"
              primary={true}
              label="List View"
              href="#"
              onClick={onTableViewClick}/>


            <Button icon={<DocumentDownloadIcon size="medium"/>}
              className="actionButton fg-white"
              style={{backgroundColor: "#8B10B1"}}
              primary={true}
              label="Download"
              href="#"/>

            <Button icon={<RefreshIcon size="medium"/>}
              className="actionButton bg-red fg-white"
              primary={true}
              label="Refresh"
              href="#"/>


            <Button icon={<AddIcon size="medium"/>}
              className="actionButton bg-orange fg-white"
              primary={true}
              label="Add BOM"
              href="#"/>

          </Box>
        </Header>
      </Box>
      <hr /></Box>)
  }
}
