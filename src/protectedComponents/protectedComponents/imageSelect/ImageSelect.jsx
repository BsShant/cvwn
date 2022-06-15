import React, { useEffect, useState } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { imageServer, server } from "../../utils/fetch";

const ImageSelect = (props) => {
  const { Dragger } = Upload;
  const { myImage, setMyImage, name } = props;
  const [images, setImages] = useState([]);

  const [imageFetching, setImageFetching] = useState(false);
  const uploadProps = {
    name: "file",
    multiple: true,
    action: `${server}/imageUpload/addImage`,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setImageFetching(true);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const deleteImage = (img) => {
    let id = { id: img.id };
    fetch(`${server}/imageUpload`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((data) => {
        setImageFetching(true);
        message.success(`${img.image} file deleted successfully.`);
      })
      .catch((error) => {
        console.log("Deleting Image failed: ", error);
        message.error(`${img.image} file deletion failed.`);
      });
  };
  useEffect(() => {
    fetch(`${server}/imageUpload`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setImages(data.data);
        setImageFetching(false);
      });

    return () => {};
  }, [imageFetching]);
  return (
    <div className="image-select-container">
      <Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
      <div className="my-images">My Images</div>
      <div className="image-list-container">
        {images.length > 0
          ? images
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((img) => {
                return (
                  <div className="image-list">
                    <img
                      onClick={() => {
                          console.log(img)
                        if (myImage && myImage === img.image) {
                          setMyImage((prev) => ({ ...prev, [name]: "" }));
                        } else {
                          setMyImage((prev) => ({
                            ...prev,
                            [name]: img.image,
                          }));
                        }
                      }}
                      src={`${imageServer}/${img.image}`}
                      alt="Display Image"
                    />
                    {myImage && img.image == myImage && (
                      <FontAwesomeIcon className="image-check" icon={faCheck} />
                    )}
                    <FontAwesomeIcon
                      className="image-trash"
                      onClick={() => deleteImage(img)}
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

export default ImageSelect;
