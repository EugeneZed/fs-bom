import React from 'react';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

import ReduxFormTextInput from '../ReduxFormTextInput';
import ReduxFormMaskedInput from '../ReduxFormMaskedInput';
import AddIcon from 'grommet/components/icons/base/Add';
import Modal from '../Modal'
import {Field, reduxForm} from 'redux-form';


const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.season) {
    errors.season = 'Required'
  }
  console.log(errors);
  return errors
}
class AddBomForm extends React.Component{
  render(){
    let {handleSubmit, onAddBomClick} =this.props;
    return (
      <Form >
        <FormFields>
          <Field
              placeholder="name eg. &quot;Drivetrain&quot;"
              name="name"
              component={ReduxFormTextInput}
              type="text"/>
          <Field
              placeholder="season eg. 2014-2015"
              mask="1111-1111"
              name="season"
              component={ReduxFormMaskedInput}
              type="text"/>
          <div style={{padding: "16px 24px"}}>
            <Button icon={<AddIcon />}
              label="Add"
              href="#"
              primary={true}
              type="submit"
              onClick={handleSubmit(data => {
                  onAddBomClick(data.name, parseInt(data.season.substring(0,4)))
                })}/>
          </div>
        </FormFields>
      </Form>
    );
  }
}
AddBomForm = reduxForm({
  form: 'addBom', // a unique name for this form
  validate
})(AddBomForm)

export class AddBomModal extends React.Component{

  render(){

    let {onCloseClick,onAddBomClick} = this.props;

    return(

      <Modal style={{maxWidth:"40%"}} open={true} onCloseClick={onCloseClick}>

        <h1 style={{textAlign:"center"}}>New BOM</h1>
        <Box style={{width: "60%", margin: "0 auto"}}>

          <AddBomForm onAddBomClick={onAddBomClick}/>
        </Box>

      </Modal>

    )
  }
}
