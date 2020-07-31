import React from "react";

function FormField({ label, type, value, name, onChange }) {
  return (
    <div>
      <label>
        {label}
        <input type={type} value={value} name={name} onChange={onChange} />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: "text",
  value: "",
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default FormField;
