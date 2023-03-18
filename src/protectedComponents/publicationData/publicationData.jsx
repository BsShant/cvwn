import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingArticleStarts } from "../../store/resourceReducer/resourceStore.actions";
import {
  fetchingAnnouncementStarts,
  fetchingVolunteerStarts,
} from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import ImageSelect from "../imageSelect/ImageSelect";
import { fetchingPartnerStarts } from "../../store/landingReducer/landingStore.actions";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import EditorConvertToHTML from "../Editor/Editor";
import FileSelect from "../imageSelect/fileSelect";
const PublicationData = (props) => {
  const dispatch = useDispatch();
  const [PublicationValues, setPublicationValues] = useState({
    title: "",
    image: "",
    file: "",
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
    setPublicationValues({
      title: props.updateData ? props.updateData.title : "",
      image: props.updateData ? props.updateData.image : "",
      detail: props.updateData ? props.updateData.detail : "",
      file: props.updateData ? props.updateData.file : "",
    });
  }, [props.updateData]);
  const addData = () => {
    const contentState = editorState.getCurrentContent();

    if (!PublicationValues.title || !PublicationValues.image) {
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
              ...PublicationValues,
              id: props.updateData.id,
              detail: JSON.stringify(convertToRaw(contentState)),
            }
          : {
              ...PublicationValues,
              detail: JSON.stringify(convertToRaw(contentState)),
            }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingPartnerStarts());
        message.success(
          `Publication${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New PublicationFailed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={PublicationValues}
            onTextAreaValueChange={setPublicationValues}
            textName="title"
            name="PublicationTitle"
            title="Title"
          />
        </div>

        <div className="image-select-heading">Select Publication Image</div>
        <ImageSelect
          myImage={PublicationValues.image}
          setMyImage={setPublicationValues}
          name="image"
        />

        <EditorConvertToHTML
          editorState={editorState}
          setEditorState={setEditorState}
          editorClassName="greyEditor"
        />

        <div className="image-select-heading">Select Publication File</div>
        <ImageSelect
          myImage={PublicationValues.file}
          setMyImage={setPublicationValues}
          name="file"
        />
      </div>
      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default PublicationData;
