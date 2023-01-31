import IProduct from "../../types/IProduct";
import {IProductAction, PRODUCT_ACTION} from "../reducers/productReducer";

export interface dispatchProps {
    dispatch: (arg0: IProductAction) => void,
    product: IProduct,
}

export interface IAction<T> {
    type: string,
    payload: T,
}

export function createProductDispatch({dispatch, product}: dispatchProps) {
    dispatch(PRODUCT_ACTION.CREATE(product))
}

export function deleteProductDispatch({dispatch, product}: dispatchProps) {
    dispatch(PRODUCT_ACTION.DELETE(product))
}

export function clearProductDispatch(dispatch: (arg0: IAction<[]>) => void) {
    dispatch(PRODUCT_ACTION.CLEAR([]))
}

export function updateProductDispatch({dispatch, product}: dispatchProps) {
    dispatch(PRODUCT_ACTION.UPDATE(product))
}