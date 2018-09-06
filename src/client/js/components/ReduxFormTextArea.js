import React from 'react';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';


export default field => {
  console.log(field);
  if(field.suggestions){
    var suggestions = field.suggestions.filter(
      el => el.startsWith(field.input.value)
    )
  }
  else{
    var suggestions = [];
  }

  var placeholder = field.placeholder || "";

  return(
    <FormField label={field.label} error={field.meta.touched ? field.meta.error : undefined}>
      <textarea rows="5" type='text' id='description' name='description' onChange={(e) => {
        field.input.onChange(e.target.value);
      }} />
    </FormField>
)}
