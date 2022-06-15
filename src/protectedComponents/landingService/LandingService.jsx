import { message } from "antd";
import useSelection from "antd/lib/table/hooks/useSelection";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingLandingServiceStarts } from "../../store/landingReducer/landingStore.actions";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import "./styles.css";
const LandingService = () => {
  let url = `${server}/landingService`;
  const dispatch = useDispatch();
  const landingService = useSelector(
    (state) => state.landingStore.landingService
  );
  const [landingServiceValues, setLandingServiceValues] = useState({
    heading: "",
    detail: "",
    blueSpan: "",
  });
  const [landingServiceTextEdit, setLandingServiceTextEdit] = useState({
    headingEdit: false,
    detailEdit: false,
    blueSpanEdit: false,
  });
  useEffect(() => {
    if (landingService) {
      setLandingServiceValues({
        heading: landingService.heading,
        detail: landingService.detail,
        blueSpan: landingService.blueSpan,
      });
    }
  }, [landingService]);
  const adminLandingServiceHeadingRef = useRef(null);
  const adminLandingServiceSubHeadingRef = useRef(null);
  const adminLandingServiceBlueSpanRef = useRef(null);
  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(landingServiceValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingLandingServiceStarts());
        console.log(`Landing Service Section Updated!`);
        message.success(`Landing Service Section Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Landing Service Section Failed!! : `, error);
        message.success(`Updating Landing Service Section Failed!!`);
      });
  };
  return (
    <div className="admin-landing-service admin-box-container">
      <div className="row">
        <div className="col-md-12">
          <div className="admin-sub-heading">Service Section</div>
          <div className="data-container">
            <div className="data-heading">Heading</div>
            <AdminTextArea
              textAreaRef={adminLandingServiceHeadingRef}
              setTextEdit={setLandingServiceTextEdit}
              textEdit={landingServiceTextEdit}
              textAreaValue={landingServiceValues}
              onTextAreaValueChange={setLandingServiceValues}
              textEditName="headingEdit"
              textName="heading"
              name="landingServiceHeading"
            />
          </div>
          <div className="data-container">
            <div className="data-heading">Blue Touch</div>
            <AdminTextArea
              textAreaRef={adminLandingServiceBlueSpanRef}
              setTextEdit={setLandingServiceTextEdit}
              textEdit={landingServiceTextEdit}
              textAreaValue={landingServiceValues}
              onTextAreaValueChange={setLandingServiceValues}
              textEditName="blueSpanEdit"
              textName="blueSpan"
              name="landingServiceBlueSpan"
            />
          </div>

          <div className="data-container">
            <div className="data-heading">Detail</div>
            <AdminTextArea
              textAreaRef={adminLandingServiceSubHeadingRef}
              setTextEdit={setLandingServiceTextEdit}
              textEdit={landingServiceTextEdit}
              textAreaValue={landingServiceValues}
              onTextAreaValueChange={setLandingServiceValues}
              textEditName="detailEdit"
              textName="detail"
              name="landingServiceHeading"
            />
          </div>
          <button className="update-button" onClick={() => updateDatabase()}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingService;
