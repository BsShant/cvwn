import React, { useState } from "react";
import ContactData from "../../protectedComponents/contactData/contactData";
import ContactTable from "../../protectedComponents/contactTable/contactTable";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import { useNav } from "../../protectedComponents/UseNav/UseNav";
import { server } from "../../utils/fetch";
import "./styles.css";
const ContactPage = () => {
  const contactRef = useNav("ContactUs");

  const [contactModalVisible, setContactModalVisible] = useState(false);

  return (
    <div ref={contactRef} id="ContactContainer">
      <div className="container">
        <div className="admin-fund-raiser-inner-section">
          <div className="admin-header">Contact Page</div>
          <div className="admin-inner-section">
            <DataInputModal
              setDataModalVisible={setContactModalVisible}
              dataModalVisible={contactModalVisible}
            >
              <ContactData url={`${server}/contact`} method="POST" />
            </DataInputModal>
            <ContactTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
