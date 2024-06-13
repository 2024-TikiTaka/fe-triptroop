import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { Form, Button } from 'react-bootstrap';
import { getAccessTokenHeader, getUserId } from '../../utils/TokenUtils'; // getUserId 추가

const ChatRoom = ({ room, onBack }) => {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState('');
	const [stompClient, setStompClient] = useState(null);

	useEffect(() => {
		const socket = new SockJS('http://localhost:8080/ws');
		const client = new Client({
			webSocketFactory: () => socket,
			connectHeaders: {
				'Access-Token': getAccessTokenHeader()
			},
			onConnect: () => {
				client.subscribe(`/topic/public/${room.roomName}`, msg => {
					const receivedMessage = JSON.parse(msg.body);
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
		if (stompClient && message.trim()) {
			const chatMessage = {
				sender: getUserId(), // 사용자 ID를 Long 타입으로 전송
				content: message,
				type: 'CHAT',
			};
			stompClient.publish({
				destination: `/app/chat.sendMessage/${room.roomName}`,
				body: JSON.stringify(chatMessage),
			});
			setMessage('');
		}
	};

	return (
		<div>
			<Button onClick={onBack}>뒤로가기</Button>
			<h2>채팅방: {room.roomName}</h2>
			<div>
				{messages.map((msg, index) => (
					<div key={index}>
						{msg.sender}: {msg.content}
					</div>
				))}
			</div>
			<Form.Control
				type="text"
				value={message}
				onChange={e => setMessage(e.target.value)}
				onKeyPress={e => {
					if (e.key === 'Enter') {
						sendMessage();
					}
				}}
			/>
			<Button onClick={sendMessage}>Send</Button>
		</div>
	);
};

export default ChatRoom;
