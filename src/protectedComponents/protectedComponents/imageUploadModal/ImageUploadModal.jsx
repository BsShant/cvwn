import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import ImageUpload from '../imageUpload/ImageUplpoad';
const ImageUploadModal = (props) => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button className='choose-button' onClick={() => setVisible(true)}>
              Choose Image
            </button>
            <Modal
                centered
                visible={visible}
                footer={false}
                destroyOnClose
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
                bodyStyle={{padding: "40px"}}
            >
                <ImageUpload imageSection={props.imageSection} name={props.name} url={props.url} setVisible={setVisible}/>
            </Modal>
        </div>
    )
}

export default ImageUploadModal