"use client"

import { useEffect, useState } from "react";

export function ToggleButtonComponent({
  name,
  label,
  formValues,
  setFormValues = () => {},
}) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setFormValues({
      ...formValues,
      [name]: isChecked,
    });
  }, [isChecked]);

  const labelClassName = isChecked
    ? "button-check-label"
    : "button-not-check-label";

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  
  return (
    <>
      <label htmlFor={`button-checkbox-${name}`} className={labelClassName}>
        <input
          id={`button-checkbox-${name}`}
          className="button-checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        {label}
      </label>
    </>
  );
}
