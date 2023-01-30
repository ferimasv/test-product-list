import IProduct from "../../types/IProduct";
import {IProductAction, PRODUCT_ACTION} from "../reducers/productReducer";

interface dispatchProps {
    dispatch: (arg0: IProductAction) => void,
    product: IProduct,
}

export function createProduct({dispatch, product}: dispatchProps) {
    dispatch(PRODUCT_ACTION.CREATE(product))
}

export function deleteProduct({dispatch, product}: dispatchProps) {
    dispatch(PRODUCT_ACTION.DELETE(product))
}

export function updateProduct({dispatch, product}: dispatchProps) {
    dispatch(PRODUCT_ACTION.UPDATE({...product}))
}