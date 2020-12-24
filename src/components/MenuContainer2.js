import React from 'react'
import {Row, Col} from 'react-bootstrap';
import halal from '../img/halal.png'
import kebabpizza from '../img/kebabpizza.png'
import kycklingpizza from '../img/kycklingpizza.png'
import InbakadeMenuItem from './InbakadeMenuItem';
import KebabMenuItem from './KebabMenuItem';
import KycklingMenuItem from './KycklingMenuItem';
 

function MenuContainer2() {
    return (
        <div className="p-5" style={{position: 'relative',background: '#000', height: '1300px'}}>
            <img className="halal" alt="halal" src={halal}></img>
            <Row>
                <Col className="text-center"><img src={kebabpizza} style={{width: '400px'}} className="img-fluid" alt="kebabpizza"></img></Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="menuTitle">Kebab Pizzor</h3>
                </Col>
            </Row>
            <KebabMenuItem />
            <Row>
                <Col>
                    <h3 className="menuTitle">Inbakade Pizzor</h3>
                </Col>
            </Row>
            <InbakadeMenuItem />
            <Row>
                <Col>
                    <h3 className="menuTitle">Kyckling Pizzor</h3>
                </Col>
            </Row>
            <KycklingMenuItem />
            <Row>
                <Col className="text-right"><img src={kycklingpizza} style={{width: '400px'}} className="img-fluid" alt="kycklingpizza"></img></Col>
            </Row>
        </div>
    )
}

export default MenuContainer2;