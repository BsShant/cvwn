import React, { useEffect, useState } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { server } from "../../utils/fetch";

const VideoSelectMultiple = (props) => {
  const { Dragger } = Upload;
  const { myVideo, setMyVideo, name } = props;
  const [videos, setVideos] = useState([]);

  const [videoFetching, setVideoFetching] = useState(false);
  const uploadProps = {
    name: "file",
    multiple: true,
    action: `${server}/videoUpload/addVideo`,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setVideoFetching(true);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const deleteVideo = (img) => {
    let id = { id: img.id };
    fetch(`${server}/videoUpload`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((data) => {
        setVideoFetching(true);
        message.success(`${img.image} file deleted successfully.`);
      })
      .catch((error) => {
        console.log("Deleting Image failed: ", error);
        message.error(`${img.image} file deletion failed.`);
      });
  };
  useEffect(() => {
    fetch(`${server}/videoUpload`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.data);
        setVideoFetching(false);
      });

    return () => {};
  }, [videoFetching]);
  console.log(myVideo);
  return (
    <div className="image-select-container">
      <Dragger {...uploadProps} accept="video/*">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
      <div className="my-images">My Media</div>
      <div className="image-list-container">
        {videos.length > 0
          ? videos
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((video) => {
                console.log(`${server}/${video.video}`, "Ser");
                return (
                  <div className="image-list">
                    <video onClick={() => {
                          console.log("hi")
                          if (myVideo.includes(video.video)) {
                            for (let i = 0; i < myVideo.length; i++) {
                              if (myVideo[i] === video.video) {
                                let c = myVideo;
                                c.splice(i, 1);
                                setMyVideo((prev) => ({
                                  ...prev,
                                  [name]: [...c],
                                }));
                              }
                            }
                          } else {
                            setMyVideo((prev) => ({
                              ...prev,
                              [name]: [...myVideo, video.video],
                            }));
                          }
                        }} width="320" height="240" autoPlay muted>
                      <source
                        src={`${server}/${video.video}`}
                        type="video/mp4"
                      />
                    </video>
                    {myVideo && myVideo.includes(video.video) && (
                      <FontAwesomeIcon className="image-check" icon={faCheck} />
                    )}
                    <FontAwesomeIcon
                      className="image-trash"
                      onClick={() => deleteVideo(video)}
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

export default VideoSelectMultiple;
