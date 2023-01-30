import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Counter} from "../../helpers/Counter";
import {createProductDispatch} from "../../store/dispatches/productDispatch";

const CreatePopUp = () => {
    const dispatch = useDispatch();
    const { products } = useTypedSelector(state => state.product);
    const [show, setShow] = useState<boolean>(true);
    const [name, setName] = useState<string>('');
    const id = Counter(Number(products.at(-1)?.id ?? 0));

    function toggleShow() {
        setShow((prev) => !prev);
    }

    function handleCreateProductAndCloseModal() {
        createProductDispatch({ dispatch, product: {id: id().toString(), name, purchased: false} });
        setName('');
    };
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)

    return (
        <Modal show={show} onHide={toggleShow}>
            <Modal.Header>
                <Modal.Title>Добавить</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Название</Form.Label>
                        <Form.Control placeholder="йогурт" value={name} onChange={handleChangeName}/>
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