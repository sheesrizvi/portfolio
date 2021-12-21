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
      <Card.Header className='pcard-header '>
        <div className='price '>
          <p>${props.product.price}</p>
        </div>
        <div class='gap'></div>
        {/* <div class='image'></div> */}
      </Card.Header>
      <Card.Body>
        <Card.Title className='product-title'>{props.product.name}</Card.Title>
        <Card.Text className='product-text'>
          {props.product.description}
        </Card.Text>
        <Button onClick={addToCartHandler} variant='primary' className='btnx'>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default withRouter(Product)
