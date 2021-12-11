import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const Product = (props) => {
  const addToCartHandler = () => {
    // console.log(props.product._id)
    props.history.push(`/cart/${props.product._id}`)
  }
  return (
    <Card className='price-card' style={{ width: '18rem' }}>
      <Card.Header>
        <div className='price'>
          <p>${props.product.price}</p>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>{props.product.description}</Card.Text>
        <Button onClick={addToCartHandler} variant='primary'>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default withRouter(Product)
