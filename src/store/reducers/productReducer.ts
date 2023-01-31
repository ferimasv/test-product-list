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
            const isExistInList = state.products.filter((item) => item.name === action.payload.name).length > 0;
            if (isExistInList) {
                const updatesProducts = state.products.map((item) => {
                    if (item.name === action.payload.name) {
                        item.purchased = false;
                    }
                    return item
                })
                return {...state, products: updatesProducts }
            }
            return {...state, products: [...state.products, action.payload]}
        case PRODUCT_TYPE.UPDATE:
            const updatesProducts = state.products.map((item) => item.id === action.payload.id ? action.payload : item)
            return {...state, products: updatesProducts }
        case PRODUCT_TYPE.DELETE:
            const filtersProducts = state.products.filter((item) => item.id !== action.payload.id)
            return {...state, products: filtersProducts }
        default:
            return state
    }
}
