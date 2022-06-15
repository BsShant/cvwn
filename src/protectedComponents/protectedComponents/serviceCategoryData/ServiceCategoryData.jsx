import { message } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";

const ServiceCategoryData = (props) => {
  const dispatch = useDispatch();
  const [ServiceCategoryValues, setServiceCategoryValues] = useState({
    name: "",
    image: "",
    rank: "",
  });

  useEffect(() => {
    setServiceCategoryValues({
      name: props.ServiceCategoryData
        ? props.ServiceCategoryData.name
        : "",
      image: props.ServiceCategoryData ? props.ServiceCategoryData.image : "",
      rank: props.ServiceCategoryData ? props.ServiceCategoryData.rank : "",
    });
  }, [props.ServiceCategoryData]);
  const addServiceCategoryData = () => {
    if (
      !ServiceCategoryValues.name ||
      !ServiceCategoryValues.image ||
      !ServiceCategoryValues.rank
    ) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.ServiceCategoryData
          ? { ...ServiceCategoryValues, id: props.ServiceCategoryData.id }
          : { ...ServiceCategoryValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingServiceCategoryStarts());
        console.log(
          `Service Category ${props.ServiceCategoryData ? "Updated" : "Added"}`
        );
        message.success(
          `Service Category ${props.ServiceCategoryData ? "Updated" : "Added"}!`
          );
          props.setDataModalVisible(false)
      })
      .catch((error) => {
        console.log(
          `${
            props.ServiceCategoryData ? "Updating" : "Adding"
          } service category failed`
        );
        message.error(
          `${
            props.ServiceCategoryData ? "Updating" : "Adding"
          } new service category failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={ServiceCategoryValues}
            onTextAreaValueChange={setServiceCategoryValues}
            textName="name"
            name="serviceCategoryName"
            title="Category Name"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={ServiceCategoryValues}
            onTextAreaValueChange={setServiceCategoryValues}
            textName="rank"
            name="serviceCategoryRank"
            title="Rank"
          />
        </div>
      </div>

      <div className="image-select-heading">Select Category Image</div>
      <ImageSelect
        myImage={ServiceCategoryValues.image}
        setMyImage={setServiceCategoryValues}
        name="image"
      />

      <button
        className="update-button"
        onClick={() => addServiceCategoryData()}
      >
        {props.ServiceCategoryData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default ServiceCategoryData;
