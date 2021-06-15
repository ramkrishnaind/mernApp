import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import Rating from '../components/Rating';
import { Row, Col, ListGroup, Button, Image, ListGroupItem, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productDataDetails } from '../redux/actions/productAction';
import Loader from '../components/helpingComponents/Loader';
import Message from '../components/helpingComponents/Message';
const ProductDetails = ({ history, match }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productDetail = useSelector((state) => state.productDetail);
    const { loading, product, error } = productDetail;
    useEffect(() => {
        dispatch(productDataDetails(match.params.id));
    }, [dispatch, match]);
    console.log('product is ', product)
    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`);
    }
    return (
        <div>
            <Link to="/" className="btn btn-light">
                <i className="fas fa-arrow-left"></i>
                &nbsp; Go Back
            </Link>
            {
                loading ? <Loader/> : error ? <Message variant="danger">{error}</Message>
                    :
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid/>
                        </Col>
                        <Col md={3}>
                            <ListGroup variant="flush">
                                <ListGroupItem>
                                    <h3>{product.name}</h3>
                                </ListGroupItem>
                                <ListGroupItem>
                                <Rating rating={product.rating} review={`${product.numReviews} Reviews`} />
                                </ListGroupItem>
                                <ListGroupItem>
                                    Price : {product.price}
                                </ListGroupItem>
                                <ListGroupItem>
                                    {product.description}
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        Status :
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            {
                                product.countInStock > 0 && (
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                                                {
                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                ))
                                                }    
                                            </Form.Control>
                                        </Row>
                                    </ListGroupItem>
                                )
                            }
                            <ListGroupItem>
                                <Button className="btn-block" type="button" onClick={ addToCartHandler}>
                                    Add to Cart
                                </Button>
                            </ListGroupItem>
                        </Col>
                    </Row>
            }
        </div>
    );
}

export default ProductDetails;