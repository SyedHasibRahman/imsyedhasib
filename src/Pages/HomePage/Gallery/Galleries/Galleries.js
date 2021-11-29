import React from 'react';
import { useState, useEffect } from 'react';
import Gallery from '../Gallerys/Gallery';
import './Galleries.css'


// Source : https://www.youtube.com/watch?v=1cNJdu0wTXw

const Galleries = () => {
    const [latests, setLatests] = useState([]);
    const [filters, setFilters] = useState([]);
    const url = `syedhasib.json`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setLatests(data))
    }, [url])

    const allCatValue = [...new Set(filters.map((catElem) => catElem.category)), "All"];
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFilters(data))
    }, [url])
    const filterItem = (priceItem) => {

        if (priceItem === "All") {
            return setLatests(filters);
        }
        const updatedItems = filters.filter((catItems) => {
            return catItems.category === priceItem;
        })
        setLatests(updatedItems);
    }

    return (
        <div className="main-bg-2 py-5" id="Projects">
            <div className="container">
                <div className="row">
                    <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2 className="text-center pt-3">My Latest Project</h2>
                        <p className="text-center py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    </div>

                    {/* Filter Buttons  */ }
                    <div align="center">

                        {
                            allCatValue.map((filtered, index) => {
                                return <button
                                    key={ index }
                                    className="btn btn-default filter-button" onClick={ () => filterItem(filtered) }>{ filtered }</button>
                            })
                        }

                    </div>
                    <br />





                    {/* main items section  */ }
                    {
                        latests.map(latest => <Gallery
                            key={ latest._id }
                            latest={ latest }

                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Galleries;