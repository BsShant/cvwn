import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../../protectedComponents/adminTextArea/AdminTextArea";
import ImageUploadModal from "../../protectedComponents/imageUploadModal/ImageUploadModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchingAboutStarts } from "../../store/aboutReducer/aboutStore.actions";
import { useNav } from "../../protectedComponents/UseNav/UseNav";
import VolunteerData from "../../protectedComponents/volunteerData/volunteerData";
import VolunteerTable from "../../protectedComponents/volunteerTable/volunteerTable";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import VolunteerTypeData from "../../protectedComponents/VolunteerTypeData/VolunteerTypeData";
import VolunteerTypeTable from "../../protectedComponents/volunteerTypeTable/volunteerTable";
const AboutPage = () => {
  let url = `${server}/about`;
  const AboutRef = useNav("About");
  const [VolunteerModalVisible, setVolunteerModalVisible] = useState(false);
  const [VolunteerTypeModalVisible, setVolunteerTypeModalVisible] = useState(false);

  const dispatch = useDispatch();
  const about = useSelector((state) => state.aboutStore.about);
  const [aboutPageValues, setAboutPageValues] = useState({
    topTitle: "",
    heading: "",
    para1: "",
    para3: "",
    para3: "",
    para3: "",
  });
  const [aboutPageTextEdit, setAboutPageTextEdit] = useState({
    topTitleEdit: false,
    headingEdit: false,
    para1Edit: false,
    para2Edit: false,
    para3Edit: false,
    para4Edit: false,
  });

  useEffect(() => {
    if (about) {
      setAboutPageValues({
        topTitle: about.topTitle,
        heading: about.heading,
        para1: about.para1,
        para2: about.para2,
        para3: about.para3,
        para4: about.para4,
      });
    }
  }, [about]);
  const aboutPageHeadingRef = useRef(null);
  const aboutPageTopTitleRef = useRef(null);
  const aboutPagepara1Ref = useRef(null);
  const aboutPagePara2Ref = useRef(null);
  const aboutPagePara3Ref = useRef(null);
  const aboutPagePara4Ref = useRef(null);

  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aboutPageValues),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingAboutStarts());
        message.success(` About Page Updated!`);
      })
      .catch((error) => {
        ""
        message.success(`Updating  About Page Failed!!`);
      });
  };
  return (
    <div ref={AboutRef} id="AboutContainer">
      <div className="container">
        <div className="admin-header">About Page Section</div>
        <div className="admin-box-container">
          <div className="row">
            <div className="col-md-12">
              <div className="data-container ">
                <div className="data-heading">Top Title</div>
                <AdminTextArea
                  textAreaRef={aboutPageTopTitleRef}
                  setTextEdit={setAboutPageTextEdit}
                  textEdit={aboutPageTextEdit}
                  textAreaValue={aboutPageValues}
                  onTextAreaValueChange={setAboutPageValues}
                  textEditName="topTitleEdit"
                  textName="topTitle"
                  name="aboutPageTopTitle"
                />
              </div>
              <div className="data-container ">
                <div className="data-heading">Heading</div>
                <AdminTextArea
                  textAreaRef={aboutPageHeadingRef}
                  setTextEdit={setAboutPageTextEdit}
                  textEdit={aboutPageTextEdit}
                  textAreaValue={aboutPageValues}
                  onTextAreaValueChange={setAboutPageValues}
                  textEditName="headingEdit"
                  textName="heading"
                  name="aboutPageHeading"
                />
              </div>
              <div className="data-container">
                <div className="data-heading">Para 1</div>
                <AdminTextArea
                  textAreaRef={aboutPagepara1Ref}
                  setTextEdit={setAboutPageTextEdit}
                  textEdit={aboutPageTextEdit}
                  textAreaValue={aboutPageValues}
                  onTextAreaValueChange={setAboutPageValues}
                  textEditName="para1Edit"
                  textName="para1"
                  name="aboutPagePara1"
                />
              </div>
              <div className="data-container">
                <div className="data-heading">Para 2</div>
                <AdminTextArea
                  textAreaRef={aboutPagePara2Ref}
                  setTextEdit={setAboutPageTextEdit}
                  textEdit={aboutPageTextEdit}
                  textAreaValue={aboutPageValues}
                  onTextAreaValueChange={setAboutPageValues}
                  textEditName="para2Edit"
                  textName="para2"
                  name="aboutPagePara2"
                />
              </div>
              <div className="data-container">
                <div className="data-heading">Para 3</div>
                <AdminTextArea
                  textAreaRef={aboutPagePara3Ref}
                  setTextEdit={setAboutPageTextEdit}
                  textEdit={aboutPageTextEdit}
                  textAreaValue={aboutPageValues}
                  onTextAreaValueChange={setAboutPageValues}
                  textEditName="para3Edit"
                  textName="para3"
                  name="aboutPagePara3"
                />
              </div>
              <div className="data-container">
                <div className="data-heading">Para 4</div>
                <AdminTextArea
                  textAreaRef={aboutPagePara4Ref}
                  setTextEdit={setAboutPageTextEdit}
                  textEdit={aboutPageTextEdit}
                  textAreaValue={aboutPageValues}
                  onTextAreaValueChange={setAboutPageValues}
                  textEditName="para4Edit"
                  textName="para4"
                  name="aboutPagePara4"
                />
              </div>
              <button
                className="update-button"
                onClick={() => updateDatabase()}
              >
                Update
              </button>
              <div className="data-container">
                <div className="data-heading">About Page Image</div>
                <ImageUploadModal
                  name="image"
                  imageSection="About Page Image"
                  url={`${server}/about/image`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="admin-inner-section">
          <div className="admin-sub-heading">Team Type</div>
          <button
            className="choose-button"
            onClick={() => setVolunteerTypeModalVisible(true)}
          >
            Add Team Type
          </button>
          <DataInputModal
            setDataModalVisible={setVolunteerTypeModalVisible}
            dataModalVisible={VolunteerTypeModalVisible}
          >
          <VolunteerTypeData url={`${server}/volunteerType`} method="POST" />
          </DataInputModal>
        <VolunteerTypeTable />
        </div>


        <div className="admin-inner-section">
          <div className="admin-sub-heading">Team</div>
          <button
            className="choose-button"
            onClick={() => setVolunteerModalVisible(true)}
          >
            Add Team
          </button>
          <DataInputModal
            setDataModalVisible={setVolunteerModalVisible}
            dataModalVisible={VolunteerModalVisible}
          >
            <VolunteerData url={`${server}/volunteer`} method="POST" />
          </DataInputModal>
          <VolunteerTable />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
