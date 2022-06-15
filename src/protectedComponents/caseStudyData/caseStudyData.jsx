import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingCaseStarts } from "../../store/resourceReducer/resourceStore.actions";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import EditorConvertToHTML from "../Editor/Editor";
const CaseStudyData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [caseStudyValues, setCaseStudyValues] = useState({
    title: "",
    detail: "",
    image: "",
  });
  const [editorState, setEditorState] = React.useState(
    props.updateData
      ? () =>
          EditorState.createWithContent(
            convertFromRaw(JSON.parse(props.updateData.detail))
          )
      : () => EditorState.createEmpty()
  );
  useEffect(() => {
    setCaseStudyValues({
      title: props.updateData ? props.updateData.title : "",
      image: props.updateData ? props.updateData.image : "",
      detail: props.updateData ? props.updateData.detail : "",
    });
  }, [props.updateData]);
  const addData = () => {
    const contentState = editorState.getCurrentContent();

    if (!caseStudyValues.title || !caseStudyValues.image) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? {
              ...caseStudyValues,
              detail: JSON.stringify(convertToRaw(contentState)),
              id: props.updateData.id,
            }
          : {
              ...caseStudyValues,
              detail: JSON.stringify(convertToRaw(contentState)),
            }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingCaseStarts());
        console.log(`Case Study ${props.updateData ? "Updated" : "Added"}`);
        message.success(
          `Case Study ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Case Study Failed`
        );
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Case Study Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={caseStudyValues}
            onTextAreaValueChange={setCaseStudyValues}
            textName="title"
            name="caseStudyTitle"
            title="Title"
          />
        </div>
      </div>

      <div className="image-select-heading">Select Case Studt Image</div>
      <ImageSelect
        myImage={caseStudyValues.image}
        setMyImage={setCaseStudyValues}
        name="image"
      />
      <EditorConvertToHTML
        editorState={editorState}
        setEditorState={setEditorState}
        editorClassName="greyEditor"
      />
      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default CaseStudyData;
