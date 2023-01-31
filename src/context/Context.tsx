import React, {FC} from 'react';
import CreatePopUpContext from "./CreatePopUpContext";
import UpdatePopUpContext from "./UpdatePopUpContext";

interface ContextProps {
    children: React.ReactNode,
}

const Context: FC<ContextProps> = ({children}) => {
    return (
        <CreatePopUpContext>
            <UpdatePopUpContext>
                {children}
            </UpdatePopUpContext>
        </CreatePopUpContext>
    );
};

export default Context;