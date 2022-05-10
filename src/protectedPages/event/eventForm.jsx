import React, { useRef, useState } from "react";
import { Form, Button, message, Select } from "antd";
import FormItem from "../../components/formItem/formItem";
import { server } from "../../utils/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./event.css";
import ImagePlaceholder from "../../assets/images/imagePlaceholder.jpg";
import { useDispatch, useSelector } from "react-redux";

import { logoutProcessStarts } from "../../store/authStore/auth.action";
import { fetchingOurCompanyContentStarts } from "../../store/ourCompanyStore/ourCompanyAction";
// import { fetchingPublicationContentStarts } from "../../../store/publicationStore/publication.action";
const key = "updatable";
const newServer = `${server}/ourCompany/company`;
const EventForm = (props) => {
  const formRef = useRef();
  const { Option } = Select;
  const dispatch = useDispatch();
  const parsedToken = useSelector((state) => state.authStore.userToken);

  let imageHolder = props.value
    ? `${server}/${props.value.image}`
    : ImagePlaceholder;

  const [imageFile, updateImageFile] = useState(imageHolder);
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const imageFileChange = (e) => {
    setSelectedImageFile(e.target);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        updateImageFile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onFinish = async (values) => {
    console.log("values", values);

    if (!props.value) {
      if (!selectedImageFile) {
        message.error({ content: "Please select an image", duration: 2 });
        return;
      }
      message.loading({ content: "Loading...", key, duration: 2 });

      const formData = new FormData();
      Object.keys(values).map((data) => {
        return formData.append(data, values[data]);
      });

      formData.append(selectedImageFile.name, selectedImageFile.files[0]);
      try {
        const res = await fetch(`${newServer}`, {
          method: props.method,
          body: formData,
          headers: {
            Accept: "multipart/form-data",
            authorization: `Bearer ${parsedToken}`,
          },
        });
        const data = await res.json();
        if (data.hasOwnProperty("user")) {
          message.error({ content: data.message, key, duration: 2 });
          return dispatch(logoutProcessStarts(data.user));
        }
        console.log(data);

        if (data) {
          formRef.current.resetFields();
          updateImageFile(imageHolder)
          props.setIsModalVisible(false);
          message.success({ content: data.message, key, duration: 2 });
        }
        dispatch(fetchingOurCompanyContentStarts());
      } catch (error) {
        console.log(error);
        message.error({ content: "The operation failed", key, duration: 2 });
      }
    } else {
      if (!selectedImageFile && !props.value) {
        message.error({ content: "Please select an image", duration: 2 });
        return;
      }
      message.loading({ content: "Loading...", key, duration: 2 });

      const formData = new FormData();
      Object.keys(values).map((data) => {
        return formData.append(data, values[data]);
      });
      if (!selectedImageFile) {
        formData.append("filename", props.value.image);
      } else {
        formData.append(selectedImageFile.name, selectedImageFile.files[0]);
      }
      try {
        const res = await fetch(`${server}/ourCompany/company`, {
          method: props.method,
          body: formData,
          headers: {
            Accept: "multipart/form-data",
            authorization: `Bearer ${parsedToken}`,
          },
        });
        const data = await res.json();
        if (data.hasOwnProperty("user")) {
          message.error({ content: data.message, key, duration: 2 });
          return dispatch(logoutProcessStarts(data.user));
        }
        console.log(data);
        if (data) {
          formRef.current.resetFields();
          updateImageFile(imageHolder)
          props.setIsModalVisible(false);
          message.success({ content: data.message, key, duration: 2 });
        }
        dispatch(fetchingOurCompanyContentStarts());
      } catch (error) {
        console.log(error);
        message.error({ content: "The operation failed", key, duration: 2 });
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="row pageHeading">
      <h3 style={{ paddingLeft: "15px" }}>{props.title}</h3>
      <div className="col-sm-12 col-md-12">
        <div className="imageBox">
          <h3>Logo</h3>
          <div>
            <label
              for={props.imageId}
              className="uploadPhotoContainer"
              style={{
                backgroundImage: `url(${imageFile})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <FontAwesomeIcon
                icon={faPlus}
                style={{ color: "#f6b745", fontSize: "60px" }}
              />
            </label>
            <input
              id={props.imageId}
              type="file"
              name="image"
              onChange={imageFileChange}
              style={{ display: "none" }}
              accept="image/*"
            />
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <Form
          name="basic"
          labelCol={{
            span: 24,
          }}
          ref={formRef}
          layout="Vertical"
          initialValues={props.value}
          // initialValues={{
          // remember: true,
          // }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {props.value ? (
            <FormItem hidden="true" label="News Id" name="id" />
          ) : null}
          <FormItem label="Event Name" name="name" />
          
          {/* <FormItem label="Company Rank" name="rank" /> */}

          <Form.Item
            wrapperCol={{
              span: 16,
            }}
          >
            <Button className="buttonNormal" htmlType="submit">
              {props.value ? "Update Company" : "Create Company"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EventForm;
