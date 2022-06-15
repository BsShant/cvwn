import { Dropdown, Menu, message, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceStarts } from "../../store/serviceReducer/serviceStore.actions";

const ServiceData = (props) => {
  const dispatch = useDispatch();
  const [serviceValues, setServiceValues] = useState({
    category: "",
    title: "",
    price: "",
    point1: "",
    point2: "",
    point3: "",
    point4: "",
    point5: "",
    para1: "",
    para2: "",
    thumbnail: "",
    image: "",
    rank: "",
    loanType: "",
  });
  const { Option } = Select;
  const serviceCategory = useSelector(
    (state) => state.categoryStore.serviceCategory
  );
  const lonaType = useSelector((state) => state.loanStore.loanType);
  function onChange(value) {
    setServiceValues((prev) => ({ ...prev, category: value }));
  }
  function onChangeLoan(value) {
    setServiceValues((prev) => ({ ...prev, loanType: value }));
  }
  useEffect(() => {
    setServiceValues({
      category: props.serviceData ? props.serviceData.category : "",
      title: props.serviceData ? props.serviceData.title : "",
      price: props.serviceData ? props.serviceData.price : "",
      point1: props.serviceData ? props.serviceData.point1 : "",
      point2: props.serviceData ? props.serviceData.point2 : "2",
      point3: props.serviceData ? props.serviceData.point3 : "",
      point4: props.serviceData ? props.serviceData.point4 : "",
      point5: props.serviceData ? props.serviceData.point5 : "",
      para1: props.serviceData ? props.serviceData.para1 : "",
      para2: props.serviceData ? props.serviceData.para2 : "",
      thumbnail: props.serviceData ? props.serviceData.thumbnail : "",
      image: props.serviceData ? props.serviceData.image : "",
      rank: props.serviceData ? props.serviceData.rank : "",
      loanType: props.serviceData ? props.serviceData.loanType : "",
    });
  }, [props.ServiceData]);
  const addServicedata = () => {
    if (serviceValues.category === "loan-services") {
      if (
        !serviceValues.category ||
        !serviceValues.title ||
        !serviceValues.thumbnail ||
        !serviceValues.rank ||
        !serviceValues.loanType
      ) {
        return message.error("Please insert required values!");
      }
    } else {
      if (
        !serviceValues.category ||
        !serviceValues.title ||
        !serviceValues.para1 ||
        !serviceValues.thumbnail ||
        !serviceValues.image ||
        !serviceValues.rank ||
        !serviceValues.price
      ) {
        return message.error("Please insert required values!");
      }
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.serviceData
          ? { ...serviceValues, id: props.serviceData.id }
          : { ...serviceValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingServiceStarts());
        console.log(`Service  ${props.serviceData ? "Updated" : "Added"}`);
        message.success(`Service  ${props.serviceData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.serviceData ? "Updating" : "Adding"} service  failed`
        );
        message.error(
          `${props.serviceData ? "Updating" : "Adding"} new service failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="data-heading">Category</div>
          <Select placeholder="Select Category"  onChange={onChange}>
            {serviceCategory.map((category, index) => {
              return (
                <Option key={index} value={category.route}>
                  {category.name}
                </Option>
              );
            })}
          </Select>
        </div>
        {serviceValues.category === "loan-services" ? (
          <div className="col-md-6">
            <div className="data-heading">Loan Type</div>
            <Select placeholder="Select Loan Type" defaultValue={serviceValues.loanType}  onChange={onChangeLoan}>
              {lonaType.map((category, index) => {
                return (
                  <Option key={index} value={category.route}>
                    {category.name}
                  </Option>
                );
              })}
            </Select>
          </div>
        ) : null}
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={serviceValues}
            onTextAreaValueChange={setServiceValues}
            textName="title"
            name="serviceTitle"
            title="Title"
          />
        </div>
        {serviceValues.category === "loan-services" ? null : (
          <div className="col-md-6">
            <AdminModalTextArea
              textAreaValue={serviceValues}
              onTextAreaValueChange={setServiceValues}
              textName="price"
              name="servicePrice"
              title="Price"
            />
          </div>
        )}
        {serviceValues.category === "loan-services" ? null : (
          <div className="col-md-6">
            <AdminModalTextArea
              textAreaValue={serviceValues}
              onTextAreaValueChange={setServiceValues}
              textName="point1"
              name="servicePoint1"
              title="Point 1"
            />
          </div>
        )}
        {serviceValues.category === "loan-services" ? null : (
          <div className="col-md-6">
            <AdminModalTextArea
              textAreaValue={serviceValues}
              onTextAreaValueChange={setServiceValues}
              textName="point2"
              name="servicePoint2"
              title="Point 2"
            />
          </div>
        )}
        {serviceValues.category === "loan-services" ? null : (
          <div className="col-md-6">
            <AdminModalTextArea
              textAreaValue={serviceValues}
              onTextAreaValueChange={setServiceValues}
              textName="point3"
              name="servicePoint3"
              title="Point 3"
            />
          </div>
        )}
        {serviceValues.category === "loan-services" ? null : (
          <div className="col-md-6">
            <AdminModalTextArea
              textAreaValue={serviceValues}
              onTextAreaValueChange={setServiceValues}
              textName="point4"
              name="servicePoint4"
              title="Point 4"
            />
          </div>
        )}
        {serviceValues.category === "loan-services" ? null : (
          <div className="col-md-6">
            <AdminModalTextArea
              textAreaValue={serviceValues}
              onTextAreaValueChange={setServiceValues}
              textName="point5"
              name="servicePoint5"
              title="Point 5"
            />
          </div>
        )}
        {serviceValues.category === "loan-services" ? null : (
          <div className="col-md-6">
            <AdminModalTextArea
              textAreaValue={serviceValues}
              onTextAreaValueChange={setServiceValues}
              textName="para1"
              name="servicePara1"
              title="Paragraph 1"
            />
          </div>
        )}
        {serviceValues.category === "loan-services" ? null : (
          <div className="col-md-6">
            <AdminModalTextArea
              textAreaValue={serviceValues}
              onTextAreaValueChange={setServiceValues}
              textName="para2"
              name="servicePara2"
              title="Paragraph 2"
            />
          </div>
        )}
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={serviceValues}
            onTextAreaValueChange={setServiceValues}
            textName="rank"
            name="serviceRank"
            title="rank"
          />
        </div>
      </div>
      <div className="image-select-heading">Select Service Thumbnail</div>
      <ImageSelect
        myImage={serviceValues.thumbnail}
        setMyImage={setServiceValues}
        name="thumbnail"
      />
      {serviceValues.category === "loan-services" ? null : (
        <div className="image-select-heading">Select a Image</div>
      )}
      {serviceValues.category === "loan-services" ? null : (
        <ImageSelect
          myImage={serviceValues.image}
          setMyImage={setServiceValues}
          name="image"
        />
      )}
      <button className="update-button" onClick={() => addServicedata()}>
        {props.serviceData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default ServiceData;
