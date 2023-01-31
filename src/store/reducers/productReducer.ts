import {actions} from "../actions";
import IProduct from "../../types/IProduct";
import {COOKIES_TYPE, getCookies, setCookies} from "../../cookies/cookies";


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
        { id: '5', name: 'яйца десяток', purchased: false },
        { id: '6', name: 'яйцесяток', purchased: false },
        { id: '7', name: 'яйца деток', purchased: false },
        { id: '8', name: 'яйца дек', purchased: false },
        { id: '9', name: 'яйца десяток', purchased: true },
        { id: '10', name: 'яй десяток', purchased: true },
        { id: '11', name: 'яйца дяток', purchased: true },
        { id: '12', name: 'яйца дяток', purchased: true },
        { id: '13', name: 'я есяток', purchased: true },
        { id: '14', name: 'яйа десяток', purchased: false },
        { id: '15', name: 'яца десяток', purchased: false },
        { id: '16', name: 'яй десяток', purchased: false },
        { id: '17', name: 'яйца деяток', purchased: false },
        { id: '18', name: 'яйа есяток', purchased: false },
        { id: '19', name: 'йца десяток', purchased: false },
        { id: '20', name: 'яйсяток', purchased: false },
        { id: '21', name: 'яйца к', purchased: true },
        { id: '22', name: 'яйцесяток', purchased: true },
        { id: '23', name: 'яйцадсяток', purchased: true },
        { id: '24', name: 'яйцк', purchased: true },
        { id: '25', name: 'яйц', purchased: true },
        { id: '26', name: 'яйц3', purchased: true },
        { id: '27', name: 'яйц4', purchased: true },
        { id: '28', name: 'яйц5', purchased: true },
        { id: '29', name: 'я62йц', purchased: true },
        { id: '30', name: 'яй5ц', purchased: true },
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