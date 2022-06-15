import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { fetchingProductsStarts } from "../../store/productReducer/productStore.actions";

const ProductData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [productValues, setProductValues] = useState({
    name: "",
    detail: "",
    link: "",
    image: "",
    rank: "",
  });

  useEffect(() => {
    setProductValues({
      name: props.updateData ? props.updateData.name : "",
      image: props.updateData ? props.updateData.image : "",
      detail: props.updateData ? props.updateData.detail : "",
      link: props.updateData ? props.updateData.link : "",
      rank: props.updateData ? props.updateData.rank : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !productValues.name ||
      !productValues.image ||
      !productValues.detail ||
      !productValues.rank
    ) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? { ...productValues, id: props.updateData.id }
          : { ...productValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingProductsStarts());
        console.log(`Product ${props.updateData ? "Updated" : "Added"}`);
        message.success(`Product ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Product Failed`
        );
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Product Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={productValues}
            onTextAreaValueChange={setProductValues}
            textName="name"
            name="productName"
            title="Name"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={productValues}
            onTextAreaValueChange={setProductValues}
            textName="detail"
            name="ProductDetail"
            title="Detail"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={productValues}
            onTextAreaValueChange={setProductValues}
            textName="link"
            name="ProductLink"
            title="Link"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={productValues}
            onTextAreaValueChange={setProductValues}
            textName="rank"
            name="ProductRank"
            title="Rank"
          />
        </div>
      </div>

      <div className="image-select-heading">Select Product Image</div>
      <ImageSelect
        myImage={productValues.image}
        setMyImage={setProductValues}
        name="image"
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default ProductData;
