import React from 'react';
import ListProduct from "../components/ListProduct";
import {Button, Col, Row} from "react-bootstrap";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {CreatePopUpState} from "../context/CreatePopUpContext";

const Active = () => {
    const { products } = useTypedSelector(state => state.product);
    const {toggleShow} = CreatePopUpState();

    return (
        <div>
            <Row className="p-3">
                <Col>
                    <h5 className="m-0 fs-3 fw-normal">Количество продуктов: {products.filter((item) => !item.purchased).length}</h5>
                </Col>
                <Col></Col>
                <Col>
                    <Button size="sm" onClick={toggleShow} variant="light" className="w-100">
                        <h5 className="text-uppercase fw-normal">Добавить</h5>
                    </Button>
                </Col>
            </Row>
            <ListProduct products={products.filter((item) => !item.purchased)}/>
        </div>
    );
};

export default Active;