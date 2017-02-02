import React from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Title from 'grommet/components/Title';
import AddIcon from 'grommet/components/icons/base/Add';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark'
import RefreshIcon from 'grommet/components/icons/base/Refresh'
import Header from 'grommet/components/Header';

export class HomeHeader extends React.Component{
  render(){
    return(
      <Box><Box pad="small">
        <Header>
          <Title style={{fontSize:35}}>
              Bill of Materials
          </Title>
          <Box flex={true}
            justify="end"
            direction="row"
            responsive={false}>


            <Button icon={<CheckmarkIcon size="medium"/>}
              className = "actionButton bg-green fg-white"
              primary={true}
              label="Conflicts"
              href="#" />

            <Button icon={<RefreshIcon size="medium"/>}
              className="actionButton bg-red fg-white"
              primary={true}
              label="Refresh"
              href="#"
              onClick={() => this.props.onRefreshButtonClick()} />


            <Button icon={<AddIcon size="medium"/>}
              className="actionButton bg-orange fg-white"
              primary={true}
              label="Add BOM"
              href="#"
              onClick={() => this.props.onAddButtonClick()}/>
          </Box>
        </Header>
      </Box>
      <hr /></Box>)
  }
}
