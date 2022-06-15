import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { fetchingProductsStarts } from "../../store/productReducer/productStore.actions";
import { fetchingTeamStarts } from "../../store/landingReducer/landingStore.actions";

const TeamData = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [teamValues, setTeamValues] = useState({
    name: "",
    role: "",
    rank: "",
    image: "",
    type: "",
  });

  useEffect(() => {
    setTeamValues({
      name: props.updateData ? props.updateData.name : "",
      image: props.updateData ? props.updateData.image : "",
      role: props.updateData ? props.updateData.role : "",
      type: props.updateData ? props.updateData.type : "",
      rank: props.updateData ? props.updateData.rank : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (
      !teamValues.name ||
      !teamValues.image ||
      !teamValues.role ||
      !teamValues.rank ||
      !teamValues.type
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
          ? { ...teamValues, id: props.updateData.id }
          : { ...teamValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingTeamStarts());
        console.log(`Team ${props.updateData ? "Updated" : "Added"}`);
        message.success(`Team ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(`${props.updateData ? "Updating" : "Adding"} Team Failed`);
        message.error(
          `${props.updateData ? "Updating" : "Adding"} Team Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={teamValues}
            onTextAreaValueChange={setTeamValues}
            textName="name"
            name="teamName"
            title="Name"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={teamValues}
            onTextAreaValueChange={setTeamValues}
            textName="role"
            name="teamRole"
            title="Role"
          />
        </div>
       
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={teamValues}
            onTextAreaValueChange={setTeamValues}
            textName="rank"
            name="TeamRank"
            title="Rank"
          />
        </div>
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={teamValues}
            onTextAreaValueChange={setTeamValues}
            textName="type"
            name="TeamType"
            title="Type"
          />
        </div>
      </div>

      <div className="image-select-heading">Select Team Image</div>
      <ImageSelect
        myImage={teamValues.image}
        setMyImage={setTeamValues}
        name="image"
      />

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default TeamData;
