import React from 'react';
import Modal from '../Modal';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

import AppsIcon from 'grommet/components/icons/base/Apps';
import AddIcon from 'grommet/components/icons/base/Add';
import ReduxFormTextInput from '../ReduxFormTextInput';
import ReduxFormMaskedInput from '../ReduxFormMaskedInput';
import ReduxFormSelectInput from '../ReduxFormSelectInput';
import ReduxFormTextArea from '../ReduxFormTextArea';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

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
class AddBomItemForm extends React.PureComponent{
  render(){
    let {handleSubmit, formValues, onGrabInfo, onSubmitClick} =this.props;
    return (
      <Form style={{width:"100%",margin:"0 auto"}}>
        <FormFields>
          <div className="grid_container grid_row">
            <div className="addItemModal11of22Left">
              <Field
                  placeholder="Vendor"
                  name="vendor"
                  label="Vendor"
                  component={ReduxFormSelectInput}
                  options={["McMaster-Carr","AndyMark","Vex", "Other"]}/>
            </div>
            <div className="addItemModal11of22Right">
              {(formValues.vendor == "Other") &&
              <Field
                  placeholder="Vendor"
                  name="otherVendor"
                  label="Vendor"
                  component={ReduxFormTextInput}
                  type="text"/>
              }
            </div>
          </div>

          <div className="grid_container grid_row">
            <div className="addItemModalPartNumber">
              <Field
                  placeholder="Part Number"
                  name="partNumber"
                  label="Part Number"
                  component={ReduxFormTextInput}
                  type="text"/>
            </div>
            <div className="addItemModalNeeded">
              <Field
                  placeholder="Needed"
                  name="needed"
                  label="Needed"
                  component={ReduxFormTextInput}
                  type="number"/>
            </div>
            <div className="addItemModalSpare">
              <Field
                  placeholder="Spare"
                  name="spare"
                  label="Spare"
                  component={ReduxFormTextInput}
                  type="number"/>
            </div>
            <div className="addItemModalInShop">
              <Field
                  placeholder="In Shop"
                  name="inShop"
                  label="In Shop"
                  component={ReduxFormTextInput}
                  type="number"/>
            </div>
          </div>

          {(formValues.vendor && formValues.vendor != "Other") &&
            <div className="grid_container grid_row">
              <div className="addItemModalGrab">
                <Button icon={<AddIcon />}
                  label="Grab Info"
                  href="#"
                  secondary={true}
                  accent={true}
                  onClick={onGrabInfo(formValues)}
                  style={{float:"right"}}
                  />

              </div>
            </div>
        }

          <div className="grid_container grid_row">
            <div className="addItemModalDescription">
              <Field
                  placeholder="Item Description"
                  name="itemDesc"
                  label="Description"
                  component={ReduxFormTextInput}
                  type="text"/>
            </div>
            <div className="addItemModalCust">
              <Field
                  placeholder="Cust."
                  name="customization"
                  label="Cust."
                  component={ReduxFormTextInput}
                  type="number"/>
            </div>
          </div>
          <div className="grid_container grid_row">
            <div className="addItemModal11of22Left">
              <Field
                  placeholder="Units per Package"
                  name="unitsPerPackage"
                  label="Units Per Package"
                  component={ReduxFormTextInput}
                  type="text"/>
            </div>
            <div className="addItemModal11of22Right">
              <Field
                  placeholder="Package Price"
                  name="packagePrice"
                  label="Package Price"
                  component={ReduxFormMaskedInput}
                  mask="$11.11"
                  type="number"/>
            </div>
          </div>

          <div className="grid_container grid_row">
            <div className="addItemModalNotes">
              <Field
                  placeholder="Notes"
                  name="notes"
                  label="Notes"
                  component={ReduxFormTextArea}
                  type="text"/>
            </div>
          </div>

          <div className="grid_container grid_row">
            <div className="addItemModalItemLink">
              <Field
                  placeholder="Item Link"
                  name="itemLink"
                  label="Item Link"
                  component={ReduxFormTextInput}
                  type="text"/>
            </div>
          </div>

          <div className="grid_container grid_row">
            <div className="addItemModalImageLink">
              <Field
                  placeholder="Image Link"
                  name="imageLink"
                  label="Image Link"
                  component={ReduxFormTextInput}
                  type="text"/>
            </div>
          </div>
          <div>

          <img src={formValues.imageLink || "/img/no-image.jpg"} alt="/img/no-image.jpg" style={{border:"1px solid black",marginTop: "15px", padding: "20px", height: "244px"}}/>

          </div>

          <div style={{padding: "16px 24px"}}>
            <Button icon={<AddIcon />}
              label="Add"
              href="#"
              primary={true}
              type="submit"
              onClick={handleSubmit(data => {
                  onSubmitClick(data)
                })}/>
          </div>
        </FormFields>
      </Form>
    );
  }
}
AddBomItemForm = reduxForm({
  form: 'addBomItem', // a unique name for this form
  validate
})(AddBomItemForm)

AddBomItemForm = connect((state)=>({
    formValues: (state.form.addBomItem ? state.form.addBomItem.values : {})
  }),
  (dispatch, ownProps)=>({

  })

)(AddBomItemForm);

export default class AddBomItemModal extends React.PureComponent{

  render(){

    let {onCloseClick, onGrabInfo, onSubmitClick} = this.props;

    return(
      <Modal Modal style={{maxWidth:"100%", minHeight: "100%"}} open={true} onCloseClick={onCloseClick}>
        <h1 style={{textAlign:"center"}}>Add BOM Item</h1>
        <Box style={{width: "40%", margin: "0 auto"}}>
          <AddBomItemForm onGrabInfo={onGrabInfo} onSubmitClick={onSubmitClick}/>
        </Box>
      </Modal>
    )
  }
}
