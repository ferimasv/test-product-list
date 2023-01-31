import React, {FC} from 'react';
import CreatePopupContext from "./CreatePopupContext";
import UpdatePopUpContext from "./UpdatePopupContext";

interface ContextProps {
    children: React.ReactNode,
}

const Context: FC<ContextProps> = ({children}) => {
    return (
        <CreatePopupContext>
            <UpdatePopUpContext>
                {children}
            </UpdatePopUpContext>
        </CreatePopupContext>
    );
};

export default Context;