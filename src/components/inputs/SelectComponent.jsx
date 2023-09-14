import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

export function SelectComponent({
  name="",
  label="",
  optionsMap = [],
  formValues = {},
  setFormValues = () => {},
  formSelectProps = {}
  }) {

  const [value, setValue] = useState("");
  
  useEffect(() => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  },[value]);

  return (
    <Form.Group
      className="my-2"
      controlId={`form-group-${name}-${label}`}
    >
      {label !== "" && 
        <Form.Label>
          {`${label}:`}
        </Form.Label>
      }
      <Form.Select
        required
        {...formSelectProps}
        onChange={(e) => setValue(e.target.value)}
      >
        {optionsMap}
      </Form.Select>
    </Form.Group>
  );
}