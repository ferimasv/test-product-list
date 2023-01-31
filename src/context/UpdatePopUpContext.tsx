import React, {createContext, FC, useContext, useState} from 'react';
import IProduct from "../types/IProduct";

interface IUpdatePopUpContext {
    show: boolean;
    toggleShow: () => void;
    updatesProduct: IProduct;
    name: string;
    setName: (state: string) => void;
    setUpdatesProduct: (state: IProduct) => void;
    setUpdatesProductAndChangeShow: (state: IProduct) => void;
}

const emptyProduct: IProduct = {id: '0', name: '', purchased: false};

const defaultState = {
    show: false,
    toggleShow: () => {},
    name: '',
    setName: (state: string) => {},
    updatesProduct: emptyProduct,
    setUpdatesProduct: (state: IProduct) => {},
    setUpdatesProductAndChangeShow: (state: IProduct) => {},
};

const UpdatePopUp = createContext<IUpdatePopUpContext>(defaultState);

interface UpdatePopUpContextProps {
    children: React.ReactNode,
}

const UpdatePopUpContext: FC<UpdatePopUpContextProps> = ({children}) => {
    const [show, setShow] = useState<boolean>(false);
    const [ name, setName ] = useState<string>('');
    const [updatesProduct, setUpdatesProduct] = useState<IProduct>(emptyProduct);

    function setUpdatesProductAndChangeShow(product: IProduct) {
        setUpdatesProduct(product);
        setName(product.name);
        toggleShow();
    }

    function toggleShow() {
        setShow(prev => !prev);
    }

    return (
        <UpdatePopUp.Provider
            value={{
                show, toggleShow,
                name, setName,
                updatesProduct, setUpdatesProduct,
                setUpdatesProductAndChangeShow
            }}
        >{children}</UpdatePopUp.Provider>
    );
};

export function UpdatePopUpState() {
    return useContext(UpdatePopUp);
}

export default UpdatePopUpContext;