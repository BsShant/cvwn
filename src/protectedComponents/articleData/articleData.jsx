import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingArticleStarts } from "../../store/resourceReducer/resourceStore.actions";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import EditorConvertToHTML from "../Editor/Editor";
const ArticleData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [articleValues, setArticleValues] = useState({
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
    setArticleValues({
      title: props.updateData ? props.updateData.title : "",
      image: props.updateData ? props.updateData.image : "",
      detail: props.updateData ? props.updateData.detail : "",
    });
  }, [props.updateData]);
  const addData = () => {
    const contentState = editorState.getCurrentContent();
    if (!articleValues.title || !articleValues.image) {
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
              ...articleValues,
              detail: JSON.stringify(convertToRaw(contentState)),
              id: props.updateData.id,
            }
          : {
              ...articleValues,
              detail: JSON.stringify(convertToRaw(contentState)),
            }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingArticleStarts());
        console.log(`Article ${props.updateData ? "Updated" : "Added"}`);
        message.success(`Article ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Article Failed`
        );
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Article Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={articleValues}
            onTextAreaValueChange={setArticleValues}
            textName="title"
            name="ArticleTitle"
            title="Title"
          />
        </div>
      </div>

      <div className="image-select-heading">Select Featured Image</div>
      <ImageSelect
        myImage={articleValues.image}
        setMyImage={setArticleValues}
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

export default ArticleData;
