import {actions} from "../actions";
import IProduct from "../../types/IProduct";

export interface IProductState {
    products: Array<IProduct>,
}

export interface IProductAction {
    type: string,
    payload: IProduct,
}

const defaultProduct: IProductState = {
    products: [
        { id: '1', name: 'йогурт', purchased: false },
        { id: '2', name: 'клубника', purchased: true },
        { id: '3', name: 'яблоко', purchased: true },
        { id: '4', name: 'апельсин', purchased: true },
        { id: '5', name: 'яйца десяток', purchased: true },
    ],
};

const PRODUCT_TYPE = {
    CREATE: 'CREATE_PRODUCT',
    UPDATE: 'UPDATE_PRODUCT',
    DELETE: 'DELETE_PRODUCT',
}

export const PRODUCT_ACTION = {
    CREATE: actions<IProduct>(PRODUCT_TYPE.CREATE),
    UPDATE: actions<IProduct>(PRODUCT_TYPE.UPDATE),
    DELETE: actions<IProduct>(PRODUCT_TYPE.DELETE),
}

export const productReducer = (
    state: IProductState = defaultProduct,
    action: IProductAction
): IProductState => {
    switch (action.type) {
        case PRODUCT_TYPE.CREATE:
            return state
        case PRODUCT_TYPE.UPDATE:
            const updatesProducts = state.products.map((item) => item.id === action.payload.id ? action.payload : item)
            return {...state, products: updatesProducts }
        case PRODUCT_TYPE.DELETE:
            return state
        default:
            return state
    }
}
