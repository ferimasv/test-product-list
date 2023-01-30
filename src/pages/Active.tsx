import React from 'react';
import ListProduct from "../components/ListProduct";
import {Button, Col, Row, Toast} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Active = () => {
    const dispatch = useDispatch();
    const { products } = useTypedSelector(state => state.product);

    const handleShow = () => {};

    return (
        <div>
            <Row className="p-3">
                <Col>
                    <h5 className="m-0 fs-3 fw-normal">Количество продуктов: {products.filter((item) => !item.purchased).length}</h5>
                </Col>
                <Col></Col>
                <Col>
                    <Button size="sm" onClick={handleShow} variant="light" className="w-100">
                        <h5 className="text-uppercase fw-normal">Добавить</h5>
                    </Button>
                </Col>
            </Row>
            <ListProduct products={products.filter((item) => !item.purchased)}/>
        </div>
    );
};

export default Active;