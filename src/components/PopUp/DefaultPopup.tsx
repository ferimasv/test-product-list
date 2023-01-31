import React, {FC, FormEvent, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {createProductDispatch, dispatchProps} from "../../store/dispatches/productDispatch";
import IProduct from "../../types/IProduct";

interface DefaultPopupProps {
    show: boolean;
    toggleShow: () => void;
    type: 'Добавить' | 'Изменить';
    name: string;
    setName: (state: string) => void;
    id?: () => number;
    updatesProduct?: IProduct;
    action: (obj: dispatchProps) => void;
}

const DefaultPopup: FC<DefaultPopupProps> = ({type, show, name, setName, id, updatesProduct, toggleShow, action}) => {
    const dispatch = useDispatch();
    const [ warn, setWarn ] = useState<boolean>(false);

    function handleActionAndCloseModal() {
        const trimName = name.trim();
        if (!trimName) {
            setWarn(true);
            return
        }

        let product;
        if (id) {
            product = {id: id().toString(), name: trimName, purchased: false};
        } else {
            if (updatesProduct) {
                product = {...updatesProduct, name: trimName};
            } else {
                throw Error();
            }
        }
        action({ dispatch, product });
        toggleShow();
        setName('');
        setWarn(false);
    }

    function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleActionAndCloseModal()
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)
    
    return (
        <Modal show={show} onHide={toggleShow}>
            <Modal.Header>
                <Modal.Title>{type}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3">
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
                <Button variant="primary" onClick={handleActionAndCloseModal}>
                    {type}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DefaultPopup;