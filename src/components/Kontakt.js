import React from 'react'
import {Row, Col} from 'react-bootstrap';
import karta from '../img/karta.png'

export default function Kontakt() {
    return (
        <div className="p-5" style={{position: 'relative',background: '#000', height: '1300px'}}>
            <Row>
                <Col className="text-center">
                    <a target="_blank" rel="noreferrer" href="https://www.google.se/maps/place/G%C3%B6teborg/@57.7010978,11.7534121,11z/data=!3m1!4b1!4m5!3m4!1s0x464f8e67966c073f:0x4019078290e7c40!8m2!3d57.70887!4d11.97456">
                        <img src={karta} className="img-fluid" alt="karta"></img>
                    </a>
                </Col>
            </Row>
            <Row className="mt-5">
            <Col className="border-right border-white">
                <h3>Adress:</h3>
                <p>
                Pizza Pizzeria<br />
                Pizzagatan 14<br />
                000 00 Göteborg<br />
            </p></Col>
            <Col className="border-right border-white">
            <h3>Telefonnummer</h3>
            <p>
            <a href="tel:0310000000">031-000 00 00
            </a></p></Col>
            <Col>
            <h3>Öppettider:</h3>
            <p>Mån-Fre: 11:00 - 22:00<br />
            Lör-Sön: 12:00 - 22:00
            </p></Col>
            </Row>

        </div>
    )
}
