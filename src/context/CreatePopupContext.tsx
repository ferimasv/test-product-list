import React, {createContext, FC, useContext, useState} from 'react';
import {Counter} from "../helpers/Counter";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface ICreatePopupContext {
    show: boolean;
    name: string;
    id: () => number;
    setName: (state: string) => void;
    toggleShow: () => void;
}


const defaultState = {
    show: false,
    name: '',
    id: Counter(0),
    setName: (state: string) => {},
    toggleShow: () => {},
};

const CreatePopup = createContext<ICreatePopupContext>(defaultState);

interface CreatePopupContextProps {
    children: React.ReactNode,
}


const CreatePopupContext: FC<CreatePopupContextProps> = ({children}) => {
    const { products } = useTypedSelector(state => state.product);
    const [show, setShow] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const id = Counter(Number(products.at(-1)?.id ?? 0));

    function toggleShow() {
        setShow(prev => !prev);
    }

    return (
        <CreatePopup.Provider
            value={{
                show, toggleShow,
                name, setName,
                id,
            }}
        >
            {children}
        </CreatePopup.Provider>
    );
};

export function CreatePopupState() {
    return useContext(CreatePopup);
}

export default CreatePopupContext;