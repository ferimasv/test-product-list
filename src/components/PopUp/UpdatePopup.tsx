import React from 'react';
import DefaultPopup from "./DefaultPopup";
import {UpdatePopUpState} from "../../context/UpdatePopUpContext";
import {updateProductDispatch} from "../../store/dispatches/productDispatch";

const UpdatePopup = () => {
    const {show, toggleShow, updatesProduct, name, setName} = UpdatePopUpState();

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