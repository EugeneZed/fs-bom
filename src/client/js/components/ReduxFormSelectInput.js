import React from 'react';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';


export default field => {
  var placeholder = field.placeholder || "";
  var onSearch = field.onSearch || null;
  var options = field.options || {};
  var multiple = field.multiple || false;

  return(
  <FormField label={field.label} error={field.meta.touched ? field.meta.error : undefined}>
    <Select
        onChange={({target, option, value}) => field.input.onChange(value)}
        options={options}
        onSearch={onSearch}

        placeHolder={placeholder}
        multiple = {multiple}
        value={field.input.value}
        onBlur={field.input.onBlur}/>
  </FormField>
)}
