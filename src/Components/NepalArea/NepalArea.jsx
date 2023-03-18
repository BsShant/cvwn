import { Modal } from "antd";
import React from "react";
import { useState } from "react";
import NepalSvg from "../NepalSvg/NepalSvg";
import NewNepal from "../NewNepal/NewNepal";
import NOData from "../../assets/partners/nodata.png";
import "./styles.scss";
import { useSelector } from "react-redux";
import { server } from "../../utils/fetch";
import { useEffect } from "react";
const NepalArea = () => {
  const member = useSelector((state) => state.landingStore.member);
  const [mapModal, setMapModal] = useState(false);
  const [myDistrict, setMyDistrict] = useState("");
  const [districtMembers, setDistrictMembers] = useState([]);
  useEffect(() => {
    setDistrictMembers(
      member.filter(
        (mem) => mem.district.toLowerCase() == myDistrict.toLowerCase()
      )
    );
  }, [myDistrict, member]);

  return (
    <div className="members-working-container">
      <div className="container" style={{position:"relative"}}>
        <div className="members-working-heading">Our Working Districts</div>
        <div className="legend-box-container">
          <div className="legend-box">
            <div className="legend-text">Active</div>
            <div
              className="legend-color"
              style={{ background: "#f45a2f" }}
            ></div>
          </div>
          <div className="legend-box">
            <div className="legend-text">Inactive</div>
            <div className="legend-color" style={{ background: "#fff" }}></div>
          </div>
        </div>
      </div>
      <NewNepal
        mapModal={mapModal}
        setMapModal={setMapModal}
        myDistrict={myDistrict}
        setMyDistrict={setMyDistrict}
      />
      {/* <NepalSvg /> */}

      <Modal
        centered
        visible={mapModal}
        footer={false}
        destroyOnClose
        onOk={() => setMapModal(false)}
        onCancel={() => setMapModal(false)}
        width={1000}
        bodyStyle={{ padding: "40px" }}
        className="nepal-modal"
      >
        <div className="our-members-modal-container">
          <div className="our-member-modal-heading">
            Members working for us in {myDistrict}
          </div>
          <div className="our-member-modal-body">
            {districtMembers.length > 0 ? (
              <div className="members-list-container">
                <div className="row">
                  {districtMembers.map((mem) => {
                    return (
                      <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                        <div className="member-list-item">
                          <a
                            href={mem.link}
                            style={{ display: "inline-flex", height: "" }}
                            target="_blank"
                          >
                            <img src={`${server}/${mem.image}`} alt="" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <img src={NOData} alt="" />
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NepalArea;
