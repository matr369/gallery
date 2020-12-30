import React from 'react'

import './LoadingIndicator.css';

export default function LoadingIndicator(props) {
    const {
        loading
    } = props;
    return !!loading && (
        <div className="loading-container">
            <i className="fa fa-spinner fa-spin spin-big"></i>
        </div>
    );
}
