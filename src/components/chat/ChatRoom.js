import React, { useState, useEffect } from 'react'
import SockJS from 'sockjs-client'
import { Client } from '@stomp/stompjs'
import { Form, Button } from 'react-bootstrap'

const ChatRoom = ({ room, onBack }) => {
	const [messages, setMessages] = useState([])
	const [message, setMessage] = useState('')
	const [stompClient, setStompClient] = useState(null)

	useEffect(() => {
		const socket = new SockJS('http://localhost:8080/ws')
		const client = new Client({
			webSocketFactory: () => socket,
			onConnect: () => {
				client.subscribe('/topic/public', msg => {
					const receivedMessage = JSON.parse(msg.body)
					setMessages(prevMessages => [...prevMessages, receivedMessage])
				})
			},
			onStompError: frame => {
				console.error('Broker reported error: ' + frame.headers['message'])
				console.error('Additional details: ' + frame.body)
			},
		})

		client.activate()
		setStompClient(client)

		return () => {
			if (client) {
				client.deactivate()
			}
		}
	}, [room])

	const sendMessage = () => {
		if (stompClient && message.trim()) {
			const chatMessage = {
				sender: '사용자 이름', // 사용자 이름을 설정하세요
				content: message,
				type: 'CHAT',
			}
			stompClient.publish({
				destination: '/app/chat.sendMessage',
				body: JSON.stringify(chatMessage),
			})
			setMessage('')
		}
	}

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
				type="text" // FormText를 Form.Control로 변경
				value={message}
				onChange={e => setMessage(e.target.value)}
				// onPressEnter 이벤트 대신 onKeyPress 이벤트를 사용하여 Enter 키를 감지
				onKeyPress={e => {
					if (e.key === 'Enter') {
						sendMessage()
					}
				}}
			/>
			<Button onClick={sendMessage}>Send</Button>
		</div>
	)
}

export default ChatRoom
