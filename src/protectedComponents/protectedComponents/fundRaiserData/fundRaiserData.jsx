import { message, Select, DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingFundRaiserStarts } from "../../store/fundRaiserReducer/fundRaiserStore.actions";

const FundRaiserData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [fundRaiserValues, setFundRaiserValues] = useState({
    title: "",
    detail: "",
    projected: "",
    raised: "",
    start: "",
    end: "",
    days: "",
    category: "",
    rank: "",
    image: "",
  });
  const fundRaiserCategory = useSelector(
    (state) => state.fundCategoryStore.fundRaiserCategory
  );
  const { RangePicker } = DatePicker;

  useEffect(() => {
    setFundRaiserValues({
      title: props.updateData ? props.updateData.title : "",
      detail: props.updateData ? props.updateData.detail : "",
      projected: props.updateData ? props.updateData.projected : "",
      raised: props.updateData ? props.updateData.raised : "",
      start: props.updateData ? props.updateData.start : "",
      end: props.updateData ? props.updateData.end : "",
      days: props.updateData ? props.updateData.days : "",
      category: props.updateData ? props.updateData.category : "",
      rank: props.updateData ? props.updateData.rank : "",
      image: props.updateData ? props.updateData.image : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !fundRaiserValues.title ||
      !fundRaiserValues.detail ||
      !fundRaiserValues.projected ||
      !fundRaiserValues.start ||
      !fundRaiserValues.end ||
      !fundRaiserValues.days ||
      !fundRaiserValues.category ||
      !fundRaiserValues.rank
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
          ? { ...fundRaiserValues, id: props.updateData.id }
          : { ...fundRaiserValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingFundRaiserStarts());
        console.log(`Fund Raiser ${props.updateData ? "Updated" : "Added"}`);
        message.success(
          `Fund Raiser ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Fund Raiser Failed`
        );
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Fund Raiser Failed!`
        );
      });
  };
  function onChange(value) {
    setFundRaiserValues((prev) => ({ ...prev, category: value }));
  }
  function onDateChange(s, e) {
    setFundRaiserValues((prev) => ({ ...prev, start: e[0], end: e[1] }));
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="data-heading">Category</div>
          <Select placeholder="Select Category" onChange={onChange}>
            {fundRaiserCategory.map((category, index) => {
              return (
                <Option key={index} value={category.route}>
                  {category.name}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={fundRaiserValues}
            onTextAreaValueChange={setFundRaiserValues}
            textName="title"
            name="fundRaiserTitle"
            title="Title"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={fundRaiserValues}
            onTextAreaValueChange={setFundRaiserValues}
            textName="detail"
            name="FundRaiserDetail"
            title="Detail"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={fundRaiserValues}
            onTextAreaValueChange={setFundRaiserValues}
            textName="projected"
            name="fundRaiserProjected"
            title="Projected"
          />
        </div>
        <div className="col-md-6">
          <div className="data-heading">Select Start And End Date</div>
          <RangePicker onChange={(s, e) => onDateChange(s, e)} />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={fundRaiserValues}
            onTextAreaValueChange={setFundRaiserValues}
            textName="days"
            name="fundRaiserDays"
            title="days"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={fundRaiserValues}
            onTextAreaValueChange={setFundRaiserValues}
            textName="rank"
            name="fundRaiserRank"
            title="Rank"
          />
        </div>
      </div>
      <div className="image-select-heading">Select Fund Raiser Image</div>
      <ImageSelect
        myImage={fundRaiserValues.image}
        setMyImage={setFundRaiserValues}
        name="image"
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default FundRaiserData;
