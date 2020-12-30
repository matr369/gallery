import React from 'react'
import Image from './Image';
const API_URL = 'http://localhost:3007';

export default function GalleryView(props) {
    const {
        images,
        onRemove
    } = props;

    return (
        <div className="images-container">
            {
                images.map((item) => {
                    const image = {
                        ...item,
                        filename: `${API_URL}/image/${item.filename}`
                    };
                    return (
                        <Image image={image} onRemove={onRemove} />
                    );
                })
            }
        </div>
    );
}
