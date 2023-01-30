import React, {createContext, FC, useState} from 'react';
import {Counter} from "../helpers/Counter";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface ICreatePopUpContext {
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

const CreatePopUp = createContext<ICreatePopUpContext>(defaultState);

interface CreatePopUpContextProps {
    children: React.ReactNode,
}


const CreatePopUpContext: FC<CreatePopUpContextProps> = ({children}) => {
    const { products } = useTypedSelector(state => state.product);
    const [show, setShow] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const id = Counter(Number(products.at(-1)?.id ?? 0));

    function toggleShow() {
        setShow(prev => !prev);
    }

    return (
        <CreatePopUp.Provider
            value={{
                show, toggleShow,
                name, setName,
                id,
            }}
        >
            {children}
        </CreatePopUp.Provider>
    );
};

export default CreatePopUpContext;