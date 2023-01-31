import React from 'react';
import DefaultPopup from "./DefaultPopup";
import {createProductDispatch} from "../../store/dispatches/productDispatch";
import {CreatePopUpState} from "../../context/CreatePopUpContext";

const CreatePopup = () => {
    const {show, name, setName, id, toggleShow} = CreatePopUpState();

    return (
        <DefaultPopup
            type="Изменить"
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