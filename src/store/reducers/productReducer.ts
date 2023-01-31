import {actions} from "../actions";
import IProduct from "../../types/IProduct";
import {COOKIES_TYPE, getCookies, setCookies} from "../../helpers/cookies";


export interface IProductState {
    products: Array<IProduct>,
}

export interface IProductAction {
    type: string,
    payload: IProduct,
}

const defaultProduct: IProductState = {
    products: getCookies<IProduct[]>(COOKIES_TYPE.LIST_PRODUCT) ?? [
        { id: '1', name: 'йогурт', purchased: false },
        { id: '2', name: 'клубника', purchased: false },
        { id: '3', name: 'яблоко', purchased: false },
        { id: '4', name: 'апельсин', purchased: false },
    ]
};

const PRODUCT_TYPE = {
    CREATE: 'CREATE_PRODUCT',
    UPDATE: 'UPDATE_PRODUCT',
    DELETE: 'DELETE_PRODUCT',
    CLEAR: 'CLEAR_PRODUCT',
}

export const PRODUCT_ACTION = {
    CREATE: actions<IProduct>(PRODUCT_TYPE.CREATE),
    UPDATE: actions<IProduct>(PRODUCT_TYPE.UPDATE),
    DELETE: actions<IProduct>(PRODUCT_TYPE.DELETE),
    CLEAR: actions<[]>(PRODUCT_TYPE.CLEAR),
}

export const productReducer = (
    state: IProductState = defaultProduct,
    action: IProductAction
): IProductState => {
    switch (action.type) {
        case PRODUCT_TYPE.CREATE: {
            const isExistInList = state.products.filter((item) => item.name === action.payload.name).length > 0;
            if (isExistInList) {
                const updatesProducts = state.products.map((item) => {
                    if (item.name === action.payload.name) {
                        item.purchased = false;
                    }
                    return item
                })
                setCookies<IProduct[]>(COOKIES_TYPE.LIST_PRODUCT, updatesProducts);
                return {...state, products: updatesProducts}
            }
            const _product = [...state.products, action.payload];
            setCookies<IProduct[]>(COOKIES_TYPE.LIST_PRODUCT, _product);
            return {...state, products: _product}
        }
        case PRODUCT_TYPE.UPDATE:
            const updatesProducts = state.products.map((item) => item.id === action.payload.id ? action.payload : item)
            setCookies<IProduct[]>(COOKIES_TYPE.LIST_PRODUCT, updatesProducts);
            return {...state, products: updatesProducts }
        case PRODUCT_TYPE.DELETE:
            const filtersProducts = state.products.filter((item) => item.id !== action.payload.id);
            setCookies<IProduct[]>(COOKIES_TYPE.LIST_PRODUCT, filtersProducts);
            return {...state, products: filtersProducts }
        case PRODUCT_TYPE.CLEAR:
            setCookies<IProduct[]>(COOKIES_TYPE.LIST_PRODUCT, []);
            return {...state, products: [] }
        default:
            return state
    }
}