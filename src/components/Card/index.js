import React from 'react';
import './index.css'
import PropTypes from 'prop-types'
function Card ({handleClick, id, flipped, back,front,height,width}){
    return(
        <div 
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        style={{ width,height}}
        onClick={() => handleClick(id)}
        >
            <div className="flipper">
                <img
                    style={{height,width}}
                    className={flipped ? 'front':'back'}
                    src={flipped ? front : back}
                    />
            </div>
        </div>
    )
}

Card.propTypes = {
    flipped: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    back: PropTypes.string.isRequired,
    front: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}
export default Card;