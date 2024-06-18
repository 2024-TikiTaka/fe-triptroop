import React from 'react';
import { Button, Modal } from 'react-bootstrap';


/**
 * 모달을 사용할 곳에서 아래 코드 참고해서 사용
 * const [ showModal, setShowModal ] = useState(false);
 * const onHide = () => setShowModal(false);
 * const onShow = () => setShowModal(true);
 *
 *
 * <button onClick={onShow}>모달 열기\</button>
 *
 * <ModalPopup show={showModal} onHide={onHide} title={"모달 제목에 들어갈 내용"}>
 *    모달 컨텐츠에 표시될 내용
 * </ModalPopup>
 *  */
const ModalPopup = ({ show = false, onHide = undefined, title, ...props }) => {

    return (
        <Modal
            {...props}
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide ? onHide : undefined} className={"px-3"}>취소</Button>
                <Button variant="primary" onClick={onHide ? onHide : undefined} className={"px-4"}>확인</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalPopup;