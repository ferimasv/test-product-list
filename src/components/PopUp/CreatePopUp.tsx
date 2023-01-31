import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {createProductDispatch} from "../../store/dispatches/productDispatch";
import {CreatePopUpState} from "../../context/CreatePopUpContext";

const CreatePopUp = () => {
    const dispatch = useDispatch();
    const {show, name, setName, id, toggleShow} = CreatePopUpState();
    const [ warn, setWarn ] = useState<boolean>(false);

    function handleCreateProductAndCloseModal() {
        const trimName = name.trim();
        if (!trimName) {
            setWarn(true);
            return
        }
        createProductDispatch({ dispatch, product: {id: id().toString(), name: trimName, purchased: false} });
        toggleShow();
        setName('');
        setWarn(false);
    };
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)

    return (
        <Modal show={show} onHide={toggleShow}>
            <Modal.Header>
                <Modal.Title>Добавить</Modal.Title>
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
                <Button variant="primary" onClick={handleCreateProductAndCloseModal}>
                    Создать
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatePopUp;