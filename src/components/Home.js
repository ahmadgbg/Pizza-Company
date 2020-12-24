import React from 'react'
import {Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faUtensils } from '@fortawesome/free-solid-svg-icons'
import pizza from '../img/pizza.png'
import vegpizza from '../img/vegpizza.png'


export default function Home() {
    return (
        <>
        <div className="p-5" style={{position: 'relative',background: '#000', height: '1300px'}}>
            <Row>
                <Col className="text-center">                     <h1>Välkommna till Pizza Pizzeria</h1>
                     <p>Pizza Pizzeria är inte vilken pizzeria som helst. Våra pizzor tillagas av utbildade och erfarna kockar med extra kärlek.
                     </p></Col>
            </Row>
            <Row>
                <Col className="text-center"><img src={pizza} className="img-fluid" alt="pizza"></img></Col>
            </Row>
            <Row>
                <Col className="bg-success p-3 text-center" md={{ span: 6, offset: 3 }}>
                <FontAwesomeIcon icon={faUtensils} size="2x" /><p className="m-0">Varför inte äta lunch hos oss? Dagens lunch kostar endast</p>
                <h1 className="m-0 p-0 text-warning">65 kr</h1> <p>Med lunchen ingår sallad, dricka och kaffe.</p>
                     
                </Col>
            </Row>
            <Row className="mt-3">
            <Col className="bg-primary p-3 text-center" md={{ span: 6, offset: 3 }}>
            <FontAwesomeIcon icon={faTruck} size="2x" /><p>Vi erbjuder hemkörning vid köp av minst 2 pizzor.</p>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5">
                <h2>Beställ nu! Ring: <a href="tel:0310000000">031-00 00 00</a></h2></Col>
            </Row>
            <Row>
                <Col className="text-center"><img src={vegpizza} style={{width:'400px'}} className="img-fluid" alt="vegpizza"></img></Col>
            </Row>
            
        </div>
        </>
    )
}
