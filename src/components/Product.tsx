import React, {FC} from 'react';
import {Form, ListGroup} from "react-bootstrap";
import IProduct from "../types/IProduct";
import {useDispatch} from "react-redux";
import {updateProductDispatch} from "../store/dispatches/productDispatch";
import Parameters from "./Parameters";

interface ProductProps {
    product: IProduct,
}

const Product: FC<ProductProps> = ({product}) => {
    const {id, purchased, name} = product;
    const dispatch = useDispatch();
    function togglePurchased() {
        updateProductDispatch({dispatch, product: {id, purchased: !purchased, name}});
    }

    return (
        <ListGroup.Item className="d-flex" variant="light">
            <Form.Check className="w-100 overflow-hidden p-0" id={`default-checkbox-${id}`}>
                <Form.Check.Input className="m-1" checked={purchased} onChange={togglePurchased} isValid={purchased}/>
                <Form.Check.Label className="">
                    {purchased ?
                        <del>{name}</del>
                        :
                        <>{name}</>
                    }
                </Form.Check.Label>
            </Form.Check>

            <Parameters product={product}/>
        </ListGroup.Item>
    );
};

export default Product;