import React, { useEffect, useState } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { server } from "../../utils/fetch";

const FileSelect = (props) => {
  const { Dragger } = Upload;
  const { myFile, setMyFile, name } = props;
  const [files, setFiles] = useState([]);

  const [FileFetching, setFileFetching] = useState(false);
  const uploadProps = {
    name: "file",
    multiple: true,
    action: `${server}/fileUpload/addFile`,

    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
      }
      if (status === "done") {
        setFileFetching(true);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
    },
  };

  const deleteFile = (img) => {
    let id = { id: img.id };
    fetch(`${server}/fileUpload`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((data) => {
        setFileFetching(true);
        message.success(`${img.file} file deleted successfully.`);
      })
      .catch((error) => {
        ""
        message.error(`${img.file} file deletion failed.`);
      });
  };
  useEffect(() => {
    fetch(`${server}/FileUpload`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setFiles(data.data);
        setFileFetching(false);
      });

    return () => {};
  }, [FileFetching]);
  return (
    <div className="File-select-container">
      <Dragger {...uploadProps} accept={".pdf, .doc, .docx"}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
      <div className="my-Files">My Files</div>
      <div className="File-list-container">
        {files.length > 0
          ? files
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((img) => {
                return (
                  <div
                    className="my-File-list"
                    onClick={() => {
                      ""
                      if (myFile && myFile === img.file) {
                        setMyFile((prev) => ({ ...prev, [name]: "" }));
                      } else {
                        setMyFile((prev) => ({
                          ...prev,
                          [name]: img.file,
                        }));
                      }
                    }}
                  >
                    <span>{img.file}</span>

                    {myFile && img.file == myFile && (
                      <FontAwesomeIcon
                        className="File-check"
                        icon={faCheck}
                        style={{
                          left: "50%",
                          fontSize: "32px",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          position: "absolute",
                        }}
                      />
                    )}
                    <FontAwesomeIcon
                      className="File-trash"
                      onClick={() => deleteFile(img)}
                      icon={faTrash}
                    />
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
};

export default FileSelect;
