import React, {useEffect, useState} from 'react';
import SockJS from 'sockjs-client';
import {Client} from '@stomp/stompjs';
import {Button, FormControl, InputGroup} from 'react-bootstrap';
import {getAccessTokenHeader} from '../../utils/TokenUtils';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import '../../styles/chat.css'; // 스타일링을 위한 CSS 파일을 import 합니다.

const ChatRoom = ({room, onBack}) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [stompClient, setStompClient] = useState(null);

    const SERVER_IP = `${process.env.REACT_APP_RESTAPI_SERVER_IP}`;
    const SERVER_PORT = `${process.env.REACT_APP_RESTAPI_SERVER_PORT}`;

    const DEFAULT_URL = `${SERVER_IP}:${SERVER_PORT}`;

    useEffect(() => {
        const socket = new SockJS(`${DEFAULT_URL}/ws`);
        const client = new Client({
            webSocketFactory: () => socket,
            connectHeaders: {
                'Access-Token': getAccessTokenHeader()
            },
            onConnect: () => {
                console.log(`Subscribed to /topic/public`);
                // 방별 구독 설정
                client.subscribe(`/topic/public`, msg => {
                    const receivedMessage = JSON.parse(msg.body);
                    console.log('Received message:', receivedMessage); // 수신된 메시지 로그
                    setMessages(prevMessages => [...prevMessages, receivedMessage]);
                });
            },
            onStompError: frame => {
                console.error('Broker reported error: ' + frame.headers['message']);
                console.error('Additional details: ' + frame.body);
            },
        });

        client.activate();
        setStompClient(client);

        return () => {
            if (client) {
                client.deactivate();
            }
        };
    }, [room]);

    const sendMessage = () => {
        const senderId = null; // 예제에서 사용자 ID를 하드코딩 (추후에 적절한 ID로 교체)
        console.log('User ID:', senderId); // 사용자 ID 로그

        if (stompClient && message.trim()) {
            const chatMessage = {
                sender: senderId, // 사용자 ID를 전송
                content: message,
                type: 'CHAT',
            };
            console.log('Sending message:', chatMessage); // 전송하는 메시지 로그
            stompClient.publish({
                destination: `/app/chat.sendMessage`,
                body: JSON.stringify(chatMessage),
            });
            setMessage('');
        }
    };

    return (
        <div className="chat-room-container">
            <div className="chat-room-header">
                <Button variant="link" onClick={onBack} className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Button>
                <h5 className="room-name">{room.roomName}</h5>
            </div>
            <div className="message-container">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg.content}
                    </div>
                ))}
                {console.log('Messages state:', messages)} {/* 메시지 상태 로그 */}
            </div>
            <InputGroup className="mb-3 input-group-custom">
                <FormControl
                    placeholder="메시지를 입력하세요..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            sendMessage();
                        }
                    }}
                    className="input-control-custom"
                />
                <Button variant="success" onClick={sendMessage} className="send-button-custom">
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </Button>
            </InputGroup>
        </div>
    );
};

export default ChatRoom;
