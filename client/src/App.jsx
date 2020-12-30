import React from 'react'
import GalleryView from './components/GalleryView';
import UploadButton from './components/UploadButton';
import LoadingIndicator from './components/LoadingIndicator';
import './App.css'
const API_URL = 'http://localhost:3007';

export default function App() {

    const [images, setImages] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const loadImages = () => {
        setLoading(true);
        fetch(`${API_URL}/files`, {
            method: 'GET',
        }).then(res => res.json())
        .then((images) => {
            setImages(images || []);
            setLoading(false);
        });
    };

    const removeImage = (id) => {
        fetch(`${API_URL}/files/${id}`, {
            method: 'DELETE'
        }).then(() => {
            loadImages();
        });
    };

    const uploadImage = (formData) => {
        setLoading(true);
        fetch(`${API_URL}/image`, {
            method: 'POST',
            'Content-Type': 'multipart/form-data',
            body: formData
        }).then(res => res.json())
            .then(image => {
                setImages([...images, image?.file]);
                setLoading(false);
            });
    };

    React.useEffect(() => {
        loadImages();
    }, []);

    return (
        <div>
            <LoadingIndicator loading={loading}/>
            <UploadButton
                onUpload={uploadImage}
            />
            <GalleryView
                images={images}
                onRemove={removeImage}
            />
        </div>
    );
}
