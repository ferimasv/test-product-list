import React, {FC} from 'react';
import {Dropdown} from "react-bootstrap";
import {deleteProductDispatch} from "../store/dispatches/productDispatch";
import {useDispatch} from "react-redux";
import IProduct from "../types/IProduct";
import {UpdatePopupState} from "../context/UpdatePopupContext";

interface ParametersProps {
    product: IProduct,
}

const Parameters: FC<ParametersProps> = ({product}) => {
    const dispatch = useDispatch();
    const {setUpdatesProductAndChangeShow} = UpdatePopupState();

    function handleUpdateProduct() {
        setUpdatesProductAndChangeShow(product);
    }

    function handleDeleteProduct() {
        deleteProductDispatch({dispatch, product})
    }

    return (
        <Dropdown>
            <Dropdown.Toggle className="py-0" size="sm" variant="light"></Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleUpdateProduct}>Изменить</Dropdown.Item>
                <Dropdown.Item onClick={handleDeleteProduct}>Удалить</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Parameters;