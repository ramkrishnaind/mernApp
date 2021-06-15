import React from 'react';

const rating = ({rating, review }) => {
    return (
        <div className="rating">
            <span style={{color:'red'}}>
                <i className={ rating >=1 ? 'fas fa-star' : rating >=0.5 ? 'fas fa-star-half-alt' : ''} ></i>
            </span>
            <span style={{color:'red'}}>
                <i className={ rating >=2 ? 'fas fa-star' : rating >=1.5 ? 'fas fa-star-half-alt' : ''} ></i>
            </span>
            <span style={{color:'red'}}>
                <i className={ rating >=3 ? 'fas fa-star' : rating >=2.5 ? 'fas fa-star-half-alt' : ''} ></i>
            </span>
            <span style={{color:'red'}}>
                <i className={ rating >=4 ? 'fas fa-star' : rating >=3.5 ? 'fas fa-star-half-alt' : ''} ></i>
            </span>
            <span style={{color:'red'}}>
                <i className={ rating >=5 ? 'fas fa-star' : rating >=4.5 ? 'fas fa-star-half-alt' : ''} ></i>
            </span>
            <br/>
            <span>{ review && review}</span>
        </div>
    );
}

export default rating;