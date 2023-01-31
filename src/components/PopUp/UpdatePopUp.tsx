import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {updateProductDispatch} from "../../store/dispatches/productDispatch";
import {UpdatePopUpState} from "../../context/UpdatePopUpContext";

const UpdatePopUp = () => {
    const dispatch = useDispatch();
    const {show, toggleShow, updatesProduct, name, setName} = UpdatePopUpState();
    const [ warn, setWarn ] = useState<boolean>(false);

    function handleUpdateProductAndCloseModal() {
        const trimName = name.trim();
        if (!trimName) {
            setWarn(true);
            return
        }
        updateProductDispatch({ dispatch, product: {...updatesProduct, name: trimName} });
        toggleShow();
        setWarn(false);
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)

    return (
        <Modal show={show} onHide={toggleShow}>
            <Modal.Header>
                <Modal.Title>Изменение</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Название</Form.Label>
                        <Form.Control isInvalid={warn} placeholder="йогурт" value={name} onChange={handleChangeName}/>
                        <div className="invalid-feedback">Это поле обязательное</div>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleShow}>
                    Отмена
                </Button>
                <Button variant="primary" onClick={handleUpdateProductAndCloseModal}>
                    Изменить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdatePopUp;