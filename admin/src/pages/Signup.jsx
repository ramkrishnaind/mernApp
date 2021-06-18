import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productLists } from '../redux/actions/productAction';
import ProductPage from './ProductPage'
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/helpingComponents/Loader';
import Message from '../components/helpingComponents/Message';
const SignupPage = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, products, error } = productList;
    useEffect(() => {
        dispatch(productLists());
    }, [dispatch]);
    return (
        <>
            {
                loading ? <Loader/> : error ? <Message variant="danger">{error}</Message>
                    :
                    <Row>
                        {
                            products.map(product => (
                                <Col key={product._id} md={3}>
                                    <ProductPage product={product} />
                                </Col>
                            ))
                        }
                    </Row>
            }
            
        </>
    );
}

export default SignupPage;