import React, {useState} from 'react';
import { Modal, Button, Form} from 'react-bootstrap';
import Draggable from "react-draggable";
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import './ChatBox.css';

const ChatBox = ({ show, handleClose }) => {
    /* 채팅창 이동속도 올림 */
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleDrag = (e, data) => {
        const scale = 2; // 이동 속도 조정 비율
        setPosition((prevPosition) => {
            const newX = prevPosition.x + (data.deltaX * scale);
            const newY = prevPosition.y + (data.deltaY * scale);

            // 화면 밖으로 나가지 않도록 제한
            const maxX = window.innerWidth;
            const maxY = window.innerHeight;

            return {
                x: Math.max(-1000, Math.min(newX, maxX)),
                y: Math.max(-1000, Math.min(newY, maxY))
            };
        });
    };

    if (!show) return null;

    return (
        <Draggable
            position={position}
            onDrag={handleDrag}
            handle=".chat-box-header"
            bounds="body"
        >
            <div className="chat-box-wrapper">
                 {/*채팅창 크기 조정 */}
                <ResizableBox
                    width={300}
                    height={500}
                    minConstraints={[300, 200]}
                    maxConstraints={[800, 600]}
                    className="chat-box"
                    resizeHandles={['se']} //크기 조정 핸들 설정 (남동쪽)
                >
                <Modal.Dialog className="chat-box">
                    <Modal.Header className="chat-box-header" closeButton onHide={handleClose}>
                        <Modal.Title>채팅</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>메시지</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="메시지를 입력하세요."/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            닫기
                        </Button>
                        <Button variant="primary">
                            보내기
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </ResizableBox>
            </div>
        </Draggable>
    );
};

export default ChatBox;