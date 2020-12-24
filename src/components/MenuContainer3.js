import React from 'react'
import {Row, Col} from 'react-bootstrap';
import halal from '../img/halal.png'
import falafel from '../img/falafel.png'
import oxfilepizza from '../img/oxfilepizza.png'
import FalafelMenuItem from './FalafelMenuItem';
import OxfileMenuItem from './OxfileMenuItem';
 

function MenuContainer3() {
    return (
        <div className="p-5" style={{position: 'relative',background: '#000', height: '1300px'}}>
            <img className="halal" alt="halal" src={halal}></img>
            <Row>
                <Col className="text-right"><img src={oxfilepizza} style={{width: '200px'}} className="img-fluid" alt="oxfilepizza"></img></Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="menuTitle">Oxfilé Pizzor</h3>
                </Col>
            </Row>
            <OxfileMenuItem />
            <Row>
                <Col>
                    <h3 className="menuTitle">Falafel Rätter</h3>
                </Col>
            </Row>
            <FalafelMenuItem />
            <Row>
                <Col className="text-left"><img src={falafel} style={{width: '200px'}} className="img-fluid" alt="falafel"></img></Col>
            </Row>
        </div>
    )
}

export default MenuContainer3;