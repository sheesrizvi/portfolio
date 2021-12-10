import React from "react";
import { Card, Button } from 'react-bootstrap'

const Product = (props) => {
    return (
        <Card className='price-card' style={{ width: '18rem' }}>
            <Card.Header>
              <div className='price'>
                <p>${props.product.price}</p>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>{props.product.name}</Card.Title>
              <Card.Text>
                {props.product.description}
              </Card.Text>
              <Button variant='primary'>Add to cart</Button>
            </Card.Body>
          </Card>
    )
}

export default Product