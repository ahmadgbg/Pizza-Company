import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="p-5" style={{position: 'relative', background: '#000'}}>
        <Row>
            <Col className="border-right border-white">
                <h3>Adress:</h3>
                <p>
                Pizza Pizzeria<br />
                Pizzagatan 14<br />
                000 00 Göteborg<br />
            </p></Col>
            <Col className="border-right border-white">
            <h3>Kontakta oss:</h3>
            <p>
            Telefonnummer: <a href="tel:0310000000">031-000 00 00
            </a></p></Col>
            <Col>
            <h3>Öppettider:</h3>
            <p>Mån-Fre: 11:00 - 22:00<br />
            Lör-Sön: 12:00 - 22:00
            </p></Col>
        </Row>
        <Row>
            <Col className="text-center">
            Copyright © {currentYear} <a href="/">Pizza Pizzeria</a>
            </Col>
        </Row>
        </div>
    )
}
