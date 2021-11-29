import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="text-center">
            <h1>PageNotFound</h1>
            <Link className="btn btn-default filter-button main-btn" to="/">Go Back</Link>
            <img src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt="" />
        </div>
    );
};

export default PageNotFound;