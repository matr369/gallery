import React from 'react'

import './Image.css';

export default function Image(props) {
    const {
        image,
      onRemove
    } = props;
    return (
        <div className="image-container">
            <i className="fa fa-close remove-icon" onClick={() => onRemove(image?._id)} />
            <img src={image?.filename} className="image"/>
        </div>
    );
}
