import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import ListProduct from "../components/ListProduct";

const All = () => {
    const { products } = useTypedSelector(state => state.product);

    return (
        <ListProduct products={products}/>
    );
};

export default All;