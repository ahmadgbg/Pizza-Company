import React from 'react'
import {Row, Col} from 'react-bootstrap';
import halal from '../img/halal.png'
import sallad from '../img/sallad.png'
import hamburgare from '../img/hamburgare.png'
import HamburgareMenuItem from './HamburgareMenuItem';
 

function MenuContainer5() {
    return (
        <div className="p-5" style={{position: 'relative',background: '#000', height: '1300px'}}>
            <img className="halal" alt="halal" src={halal}></img>
            <Row>
                <Col className="text-right"><img src={hamburgare} style={{width: '200px'}} className="img-fluid" alt="hamburgare"></img></Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="menuTitle">Hamburgare</h3>
                </Col>
            </Row>
            <HamburgareMenuItem />
            <Row>
                <Col className="text-center"><img src={sallad} style={{width: '200px'}} className="img-fluid" alt="sallad"></img></Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="menuTitle">Sallader</h3>
                </Col>
            </Row>
            <HamburgareMenuItem />
        </div>
    )
}

export default MenuContainer5;