import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker } from "antd";
import { fetchingAboutStarts } from "../../store/aboutReducer/aboutStore.actions";

const eventStatus = ["completed", "ongoing", "upcoming"];
const GalleryImageData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [GalleryImageValues, setGalleryImageValues] = useState({
    title: "",
    image: "",
  });

  useEffect(() => {
    setGalleryImageValues({
      title: props.updateData ? props.updateData.title : "",
      image: props.updateData ? props.updateData.image : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (!GalleryImageValues.title || !GalleryImageValues.image) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? { ...GalleryImageValues, id: props.updateData.id }
          : { ...GalleryImageValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingAboutStarts());
        message.success(
          `Gallery Image ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${
            props.updateData ? "Updating" : "Adding"
          } New Gallery Image Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={GalleryImageValues}
            onTextAreaValueChange={setGalleryImageValues}
            textName="title"
            name="galImageTitle"
            title="Title"
          />
        </div>
      </div>
      <div className="image-select-heading">Select Gallery Image</div>
      <ImageSelect
        myImage={GalleryImageValues.image}
        setMyImage={setGalleryImageValues}
        name="image"
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default GalleryImageData;
