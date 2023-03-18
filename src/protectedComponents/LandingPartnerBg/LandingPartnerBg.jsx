import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchingLandingDonateStarts,
  fetchingLandingHeroStarts,
} from "../../store/landingReducer/landingStore.actions";
import "./styles.css";
import ImageUploadModal from "../imageUploadModal/ImageUploadModal";
const LandingPartnerBg = () => {
  return (
    <div className="admin-box-container">
      <div className="row">
        <div className="col-md-12">
          <div className="admin-sub-heading">Landing Partner Background</div>

          <div className="data-container">
            <ImageUploadModal
              name="image"
              imageSection="Landing Partner Background"
              url={`${server}/partnerBg/`}
              simple
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPartnerBg;
