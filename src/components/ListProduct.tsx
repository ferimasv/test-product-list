import React, {FC} from 'react';
import {ListGroup} from "react-bootstrap";
import IProduct from "../types/IProduct";
import Product from "./Product";

interface ListProductProps {
    products: Array<IProduct>,
}

const ListProduct: FC<ListProductProps> = ({ products }) => {
    return (
        <ListGroup >
            {products.map((item) => (
                <Product key={item.id} product={item}/>
            ))}
        </ListGroup>
    );
};

export default ListProduct;