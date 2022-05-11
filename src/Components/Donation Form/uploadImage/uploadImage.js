import React from 'react';
import ImageUploading from 'react-images-uploading';
import './uploadImage.css'

export function UploadImage() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      {images.length<1?  <button className='button-style'
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop Image here
                        </button>:null}
                        &nbsp;
                        {/* {images.length > 0 ? <button className='button-style' onClick={onImageRemoveAll}>Remove all images</button> : null} */}
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    {images.length > 0 ? <button className='button-style' style={{marginTop:"3%"}} onClick={() => onImageUpdate(index)}>Update</button> : null}
                                    {images.length > 0 ? <button className='button-style' style={{marginTop:"3%"}} onClick={() => onImageRemove(index)}>Remove</button> : null}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}