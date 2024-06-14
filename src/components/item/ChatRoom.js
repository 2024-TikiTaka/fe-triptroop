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
		const senderId = getUserId(); // getUserId가 제대로 된 값을 반환하는지 확인
		console.log('User ID:', senderId); // 사용자 ID 로그

		if (stompClient && message.trim()) {
			const chatMessage = {
				sender: senderId, // 사용자 ID를 Long 타입으로 전송
				content: message,
				type: 'CHAT',
			};
			console.log('Sending message:', chatMessage); // 전송하는 메시지 로그
			stompClient.publish({
				destination: `/app/chat.sendMessage/`,
				body: JSON.stringify(chatMessage),
			});
			setMessage('');
		}
	};

	return (
		<div>
			<Button onClick={onBack}>뒤로가기</Button>
			<h5>{room.roomName}</h5>
			<div>
				{messages.map((msg, index) => (
					<div key={index}>
						<strong>{msg.sender}</strong>: {msg.content}
					</div>
				))}
				{console.log('Messages state:', messages)} {/* 메시지 상태 로그 */}
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
