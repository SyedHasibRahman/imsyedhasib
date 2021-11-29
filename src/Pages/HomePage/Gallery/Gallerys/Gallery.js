import React from 'react';
import './Gallery.css';


const Gallery = ({ latest }) => {

    return (
        <div className="gallery_product wrapper col-lg-2 col-md-3 col-sm-6 col-xs-6 filter hdpe">
            <div className="gallery-card d-flex justify-content-center">
                <img src={ latest.img } className="img-fluid" alt="Filter Images" />
                <div className="gallery-info d-flex align-items-center">
                    <div>
                        <h4>{ latest.name }  </h4>
                        <p>{ latest.info }</p>
                        <a target="_blank" rel="noreferrer" href={ latest.url } className="btn btn-default filter-button">Visit Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;