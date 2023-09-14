import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export function ToggleButtonComponent({
  name = "toggleButton",
  label = "Button",
  formValues,
  setFormValues = () => {},
}) {
  const [value, setValue] = useState([]);

  const handleToggle = (e) => {
    console.log(e);
    // setValue(checked);
  };
  
  console.log("value",value);

  return (
    <ToggleButtonGroup className="mb-2"  type="checkbox" value={value} onChange={handleToggle}>
      <ToggleButton
        value={"asdasd"}
        variant="outline-secondary"
        className="btn-outline-secondary"
      >
        {"Recent"}
      </ToggleButton>
      </ToggleButtonGroup>
  );
}
