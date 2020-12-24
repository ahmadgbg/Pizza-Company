import React from 'react'
import {Row, Col} from 'react-bootstrap';
import halal from '../img/halal.png'
import shawarma from '../img/shawarma.png'
import kebabtallrik from '../img/kebabtallrik.png'
import ShawarmaMenuItem from './ShawarmaMenuItem';
 

function MenuContainer4() {
    return (
        <div className="p-5" style={{position: 'relative',background: '#000', height: '1300px'}}>
            <img className="halal" alt="halal" src={halal}></img>
            <Row>
                <Col className="text-left"><img src={shawarma} style={{width: '200px'}} className="img-fluid" alt="shawarma"></img></Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="menuTitle">Shawarma Rätter</h3>
                </Col>
            </Row>
            <ShawarmaMenuItem />
            <Row>
                <Col className="text-right"><img src={kebabtallrik} style={{width: '400px'}} className="img-fluid" alt="kebabtallrik"></img></Col>
            </Row>
        </div>
    )
}

export default MenuContainer4;