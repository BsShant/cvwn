import React from "react";
import "./styles.css";
const AdminTextArea = (props) => {
  const {
    textAreaRef,
    onTextAreaValueChange,
    textAreaValue,
    textEditName,
    textName,
    textEdit,
    setTextEdit,
    name
  } = props;
  const onTextAreaChange = (e) => {
    onTextAreaValueChange((prev) => ({ ...prev, [textName]: e.target.value }));
  };
  const onTextEditChange = (bool) => {
    setTextEdit((prev) => ({ ...prev, [textEditName]: bool }));
  };
  return (
    <div className="data-box">
      <textarea
        ref={textAreaRef}
        value={textAreaValue[textName]}
        onChange={(e) => onTextAreaChange(e)}
        onBlur={() => onTextEditChange(false)}
        type="text"
        name={name}
        readOnly={!textEdit[textEditName]}
      />
      <button
        className="admin-button"
        onClick={() => {
          onTextEditChange(true);
          textAreaRef.current.focus();
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default AdminTextArea;
