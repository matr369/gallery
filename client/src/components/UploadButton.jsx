import React from 'react'

import './UploadButton.css';

export default function UploadButton(props) {
    const {
        onUpload
    } = props;

    const onChange = (e) => {
        const formData = new FormData();
        formData.append(e.target.name, e.target.files[0]);
        onUpload(formData);
    };

    return (
        <div className="upload-button-container">
            <label htmlFor="file-upload" className="custom-file-upload">
                Custom Upload
            </label>
            <input type='file' id="file-upload" name="upload" onChange={onChange} />
        </div>
    );
}
