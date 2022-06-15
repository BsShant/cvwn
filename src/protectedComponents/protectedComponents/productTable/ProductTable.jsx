import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { fetchingProductsStarts } from "../../store/productReducer/productStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import LoanFactorData from "../loanFactorData/LoanFactorData";
import ProductData from "../productData/productData";
import "./styles.css";

const ProductTable = () => {
  let url = `${server}/product`;
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.productStore.products
  );
  const [productEditModalVisible, setProductEditModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const tableItemEdit = (record) => {
    setSelectedProduct(products.find((data) => data.id == record.id));
    setProductEditModalVisible(true);
  };
  const tableItemDelete = (record) => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: record.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingProductsStarts());
        console.log("DeleteingProduct Success");
        message.success("Product Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Loan Factor Failed: ", error);
        message.error("Product Deletion Failed!");
      });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="category-table-name">{text}</div>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "Edit",
      key: "edit",
      render: (text, record) => (
        <button className="table-button" onClick={() => tableItemEdit(record)}>
          Edit
        </button>
      ),
      responsive: ["lg"],
    },
    {
      title: "Delete",
      key: "delete",
      render: (text, record) => (
        <button
          className="table-button"
          onClick={() => tableItemDelete(record)}
        >
          Delete
        </button>
      ),
      responsive: ["lg"],
    },
  ];
  return (
    <div>
      <Table dataSource={products} columns={columns} />
      <DataInputModal
        setDataModalVisible={setProductEditModalVisible}
        dataModalVisible={productEditModalVisible}
      >
        <ProductData updateData={selectedProduct} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default ProductTable;
