import React from 'react';

const GalleryButtons = ({ latests, filterItem, findAll }) => {

    const uniqueCategories = [...new Set(latests.map((curElem) => curElem.price))]




    

    console.log(uniqueCategories);
    return (
        <>
            <div align="center">

                {
                    // latests.map((curElem) => {
                    //     return <button key={ curElem } className="btn btn-default filter-button" onClick={ () => filterItem(curElem.price) }>{ curElem.price }</button>
                    // })

                }


                <button className="btn btn-default filter-button" onClick={ () => filterItem(2000) }>2000</button>
                <button className="btn btn-default filter-button" onClick={ () => filterItem(3000) }>HDPE Pipes</button>
                <button className="btn btn-default filter-button" onClick={ () => filterItem(4000) }>Sprinkle Pipes</button>
                <button className="btn btn-default filter-button" onClick={ () => filterItem(5000) }>Spray Nozzle</button>
                <button className="btn btn-default filter-button" onClick={ () => filterItem(6000) }>Irrigation Pipes</button>
                <button className="btn btn-default filter-button" onClick={ findAll }>All</button>
            </div>
        </>
    );
};

export default GalleryButtons;