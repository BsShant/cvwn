import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles.css";
import { Form, Input, Button, Table, message, Modal } from "antd";
import { server } from "../../utils/fetch";
const content = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "Initialized from content state.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

class EditorConvertToHTML extends Component {
  onContentStateChange = (contentState) => {
    this.props.setEditorState(contentState);
  };
  uploadImageCallBack = (file) => {
    return new Promise(async (resolve, reject) => {
      const key = "updatable";
      const formData = new FormData();
      formData.append("image", file);
      message.loading({ content: "Loading...", key });
      try {
        const res = await fetch(`${server}/imageUpload/addImage`, {
          method: "POST",
          body: formData,
          headers: { Accept: "multipart/form-data" },
        });
        const data = await res.json();
        //   if(data.hasOwnProperty('user')){
        //     message.error({ content: data.message, key, duration: 2 });
        //     return this.props.logoutProcessStarts(data.user)
        //   }

        if (data) {
          message.success("The image upload succeded");
        }
        resolve({ data: { link: `${server}/${data.image}` } });
      } catch (error) {
        message.error({ content: "The operation failed", key, duration: 2 });
        reject(error);
      }
    });
  };

  render() {
    // const { contentState } = this.props;
    return (
      <div style={{ paddingTop: "20px" }} className="sole">
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          editorState={this.props.editorState}
          onEditorStateChange={this.onContentStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: this.uploadImageCallBack,
              alt: { present: true, mandatory: false },
            },
          }}
        />
      </div>
    );
  }
}

export default EditorConvertToHTML;
