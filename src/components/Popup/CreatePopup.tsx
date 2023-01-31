import React from 'react';
import DefaultPopup from "./DefaultPopup";
import {createProductDispatch} from "../../store/dispatches/productDispatch";
import {CreatePopupState} from "../../context/CreatePopupContext";

const CreatePopup = () => {
    const {show, name, setName, id, toggleShow} = CreatePopupState();

    return (
        <DefaultPopup
            type="Добавить"
            show={show}
            toggleShow={toggleShow}
            id={id}
            name={name}
            setName={setName}
            action={createProductDispatch}
        />
    );
};

export default CreatePopup;