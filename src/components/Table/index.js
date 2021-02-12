import React, {useState,useEffect} from 'react';
import './index.css';
import Card from '../Card/index';
function Table (){
    const [matriz,setMatriz] = useState(useBuildTable())
    useEffect(() => {
        
    }, [])
    return(
        <div className="tablero">
            {
            cartas.map((card,index) => {
                return <Card
                    id={index}
                    vuelta= {false}

                />
            })
            }
        </div>
    )
}

export default Table;