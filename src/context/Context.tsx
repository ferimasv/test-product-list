import React, {FC} from 'react';
import CreatePopUpContext from "./CreatePopUpContext";

interface ContextProps {
    children: React.ReactNode,
}

const Context: FC<ContextProps> = ({children}) => {
    return (
        <CreatePopUpContext>
            {children}
        </CreatePopUpContext>
    );
};

export default Context;