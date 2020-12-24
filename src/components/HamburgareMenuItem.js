import React from 'react'
import {Row, Col} from 'react-bootstrap';
import menuItems from '../data/menu.json'

export default function HamburgareMenuItem() {
    return (
        <>
            {menuItems[0].hamburgare.map((menuItem)=>{
        return (
            <Row key={menuItem.id}>
            <Col>
            <h5 className="mb-0 menuItemTitle">{menuItem.id}. {menuItem.name}</h5> <p><span className="menuItemName">{menuItem.ingrediens}</span> <span className="price">{menuItem.price} kr</span><span className="dottedLines"></span></p>
            </Col>
            </Row>
            )
    })}
            
        </>
    )
}
