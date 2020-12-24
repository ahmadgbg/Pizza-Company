import React from 'react'
import {Row, Col} from 'react-bootstrap';
import halal from '../img/halal.png'
import pizzor from '../img/pizzor.png'
import PizzorMenuItem from './PizzorMenuItem';
 

function MenuContainer() {
    return (
        <div className="p-5" style={{position: 'relative', background: '#000', height: '1300px'}}>
            <img className="halal" alt="halal" src={halal}></img>
            <Row>
                <Col>
                    <h3 className="menuTitle">Pizzor</h3>
                    <p>(Ost och tomatsås ingår på alla pizzor)</p>
                </Col>
            </Row>
            <PizzorMenuItem />
            <Row>
                <Col className="text-center"><img src={pizzor} style={{width: '400px'}} className="img-fluid" alt="pizza"></img></Col>
            </Row>

        </div>
    )
}

export default MenuContainer;