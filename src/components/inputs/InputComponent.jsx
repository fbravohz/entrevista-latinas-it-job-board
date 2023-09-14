"use client";

import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export const InputComponent = ({
  name = "",
  label = "",
  type = "text",
  placeholder = "placeholder",
  formValues = {},
  setFormValues = () => {},
  formControlProps = {},
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }, [value]);

  return (
    <Form.Group
      className="my-2"
      controlId={`form-group-${name}-${type}-${label}`}
    >
      {label && <Form.Label>{`${label}:`}</Form.Label>}
      <Form.Control
        type={type}
        placeholder={placeholder}
        className="input-component"
        required
        {...formControlProps}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </Form.Group>
  );
};
