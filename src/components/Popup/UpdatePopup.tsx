import React from 'react';
import DefaultPopup from "./DefaultPopup";
import {UpdatePopupState} from "../../context/UpdatePopupContext";
import {updateProductDispatch} from "../../store/dispatches/productDispatch";

const UpdatePopup = () => {
    const {show, toggleShow, updatesProduct, name, setName} = UpdatePopupState();

    return (
        <DefaultPopup
            type="Изменить"
            show={show}
            toggleShow={toggleShow}
            updatesProduct={updatesProduct}
            name={name}
            setName={setName}
            action={updateProductDispatch}
        />
    );
};

export default UpdatePopup;