import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingArticleStarts } from "../../store/resourceReducer/resourceStore.actions";
import {
  fetchingAnnouncementStarts,
  fetchingVolunteerTypeStarts,
} from "../../store/getInvolvedReducer/getInvolvedStore.actions";
import ImageSelect from "../imageSelect/ImageSelect";

const VolunteerTypeData = (props) => {
  const dispatch = useDispatch();
  const [volunteerTypeValues, setVolunteerTypeValues] = useState({
    name: "",
    rank: "",
  });
  useEffect(() => {
    setVolunteerTypeValues({
      name: props.updateData ? props.updateData.name : "",
      rank: props.updateData ? props.updateData.rank : "",
    });
  }, [props?.updateData]);
  const addData = () => {
    if (!volunteerTypeValues.name || !volunteerTypeValues.rank) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? { ...volunteerTypeValues, id: props.updateData.id }
          : { ...volunteerTypeValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingVolunteerTypeStarts());
        message.success(`Team type ${props.updateData ? "Updated" : "Added"}!`);
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        message.error(
          `${props.updateData ? "Updating" : "Adding"} New Team type Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={volunteerTypeValues}
            onTextAreaValueChange={setVolunteerTypeValues}
            textName="name"
            name="VolunteerTypename"
            title="Name"
          />
        </div>

        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={volunteerTypeValues}
            onTextAreaValueChange={setVolunteerTypeValues}
            textName="rank"
            name="VolunteerTypeRank"
            title="Rank"
          />
        </div>
      </div>
      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default VolunteerTypeData;
