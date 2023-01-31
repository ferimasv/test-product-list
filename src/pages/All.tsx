import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import ListProduct from "../components/ListProduct";
import {Button, Col, Row} from "react-bootstrap";
import {clearProductDispatch} from "../store/dispatches/productDispatch";
import {useDispatch} from "react-redux";

const All = () => {
    const dispatch = useDispatch();
    const { products } = useTypedSelector(state => state.product);

    return (
        <div>
            <Row className="p-3">
                <Col>
                    <h5 className="fs-3 fw-normal">Общее количество: {products.length}</h5>
                </Col>
                <Col>
                    <Button size="sm" onClick={() => clearProductDispatch(dispatch)} variant="light" className="w-100">
                        <h5 className="text-uppercase fw-normal">Очистить список</h5>
                    </Button>
                </Col>
            </Row>
            <ListProduct products={products}/>
        </div>
    );
};

export default All;