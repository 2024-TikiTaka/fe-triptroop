import React from 'react';
import { Modal, Button } from 'react-bootstrap';


/**
 * 모달을 사용할 곳에서 아래 코드 참고해서 사용
 * const [ showModal, setShowModal ] = useState(false);
 * const onHide = () => setShowModal(false);
 * const onShow = () => setShowModal(true);
 *
 *
 * <button onClick={onShow}>모달 열기\</button>
 *
 * <ModalForm show={showModal} onHide={onHide} title={"모달 제목에 들어갈 내용"}>
 *    모달 컨텐츠에 표시될 내용
 * </ModalForm>
 *  */
const Modal = ({ show, onHide, title, ...props }) => {

    return (
        <Modal
            {...props}
            show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <div>
                    <Button variant="secondary" size={"sm"} onClick={onHide}>취소</Button>
                    <Button variant="primary" onClick={onHide}>확인</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default Modal;