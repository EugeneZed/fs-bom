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
  <FormField error={field.meta.touched ? field.meta.error : undefined}>
    <TextInput
        onDOMChange={field.input.onChange}
        placeHolder={placeholder}
        suggestions={suggestions}
        onSelect={({suggestion}) => {field.input.onChange(suggestion)}}
        value={field.input.value}
        onBlur={field.input.onBlur}/>
  </FormField>
)}
