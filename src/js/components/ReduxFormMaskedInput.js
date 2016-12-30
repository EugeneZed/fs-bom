import React from 'react';
import MaskedInput from 'react-maskedinput';
import FormField from 'grommet/components/FormField';

export default field => {

  var placeholder = field.placeholder || "";


  return(
  <FormField error={field.meta.touched ? field.meta.error : undefined}>
    <MaskedInput {...field.input} mask={field.mask} placeholder={placeholder} />
  </FormField>
)}
