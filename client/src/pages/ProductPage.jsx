import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
const ProductPage = ({ product }) => {
    console.log('product product is', product)
    return (
        <>
            <Card className="my-3 p-3 rounded">
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} varient="top"/>
                </Link>
                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as="div">
                            <strong>{ product.name}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as="div">
                        {/* <div className="my-3">
                            {product.rating} from { product.numReviews} Reviews
                        </div> */}
                        <Rating rating={product.rating} review={`${product.numReviews} Reviews`} />
                    </Card.Text>
                    <Card.Text as="div">
                        <div className="my-3">
                            Rs. {product.price}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default ProductPage;