import React from "react";
import "./styles.css";
const AdminModalTextArea = (props) => {
  const { onTextAreaValueChange, textAreaValue, textName, name, title } = props;
  const onTextAreaChange = (e) => {
    onTextAreaValueChange((prev) => ({ ...prev, [textName]: e.target.value }));
  };

  return (
    <>
      <div className="data-heading">{title}</div>
      <div className="data-box admin-modal-text-box">
        <textarea
          autoFocus
          value={textAreaValue[textName]}
          onChange={(e) => onTextAreaChange(e)}
          type="text"
          name={name}
        />
      </div>
    </>
  );
};

export default AdminModalTextArea;
