import IProduct from "../../types/IProduct";
import {IProductAction, PRODUCT_ACTION} from "../reducers/productReducer";

export interface dispatchProps {
    dispatch: (arg0: IProductAction) => void,
    product: IProduct,
}

export function createProductDispatch({dispatch, product}: dispatchProps) {
    dispatch(PRODUCT_ACTION.CREATE(product))
}

export function deleteProductDispatch({dispatch, product}: dispatchProps) {
    dispatch(PRODUCT_ACTION.DELETE(product))
}

export function updateProductDispatch({dispatch, product}: dispatchProps) {
    dispatch(PRODUCT_ACTION.UPDATE(product))
}