import { Modal } from "antd";
import React from "react";

const DataInputModal = ({ children, ...props }) => {
  const { dataModalVisible, setDataModalVisible } = props;
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        dataModalVisible,
        setDataModalVisible,
      });
    }
    return child;
  });

  return (
    <div>
      {dataModalVisible ? (
        <Modal
          centered
          visible={dataModalVisible}
          footer={false}
          destroyOnClose
          onOk={() => setDataModalVisible(false)}
          onCancel={() => setDataModalVisible(false)}
          width={1000}
          bodyStyle={{ padding: "40px" }}
        >
          {childrenWithProps}
        </Modal>
      ) : null}
    </div>
  );
};

export default DataInputModal;
