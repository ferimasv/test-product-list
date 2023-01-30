import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import ListProduct from "../components/ListProduct";
import {Button, Col, Row} from "react-bootstrap";

const All = () => {
    const { products } = useTypedSelector(state => state.product);

    return (
        <div>
            <h5 className="p-3 fs-3 fw-normal">Общее количество продуктов: {products.length}</h5>
            <ListProduct products={products}/>
        </div>
    );
};

export default All;