import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import { Row, Col, Form, Button, Card, Image, ListGroup } from 'react-bootstrap';
import { addToCart } from '../redux/actions/cartAction';
const CartPage = ({ match, location, history }) => {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('qty=')[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty]);
    console.log('productId is',productId  , 'qty is', qty)
    return (
        <div>
            <h3>My Cart</h3>
        </div>
    );
};

export default CartPage;