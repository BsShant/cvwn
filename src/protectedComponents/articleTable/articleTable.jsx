import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingArticleStarts } from "../../store/resourceReducer/resourceStore.actions";
import { server } from "../../utils/fetch";
import ArticleData from "../articleData/articleData";
import DataInputModal from "../dataInputmodal/DataInputModal";
import "./styles.css";

const ArticleTable = () => {
  let url = `${server}/article`;
  const dispatch = useDispatch();
  const article = useSelector((state) => state.resourceStore.article);
  const [ArticleEditModalVisible, setArticleEditModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState({});
  const tableItemEdit = (record) => {
    setSelectedArticle(article.find((data) => data.id == record.id));
    setArticleEditModalVisible(true);
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
        dispatch(fetchingArticleStarts());
        message.success("Article Deleted!");
      })
      .catch((error) => {
        message.error("Article Deletion Failed!");
      });
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
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
      <Table dataSource={article} columns={columns} />
      <DataInputModal
        setDataModalVisible={setArticleEditModalVisible}
        dataModalVisible={ArticleEditModalVisible}
      >
        <ArticleData updateData={selectedArticle} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default ArticleTable;
