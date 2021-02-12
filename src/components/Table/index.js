import React from 'react';
import './index.css';
import Card from '../Card/index';
function Table (){
    const cartas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    return(
        <div className="tablero">
            {
            cartas.map((card,index) => {
                return <Card
                    
                />
            })
            }
        </div>
    )
}

export default Table;