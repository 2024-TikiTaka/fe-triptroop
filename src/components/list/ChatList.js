// ChatList.js
import React, { useEffect, useState } from 'react';
import { authRequest } from '../../apis/api'; // 올바른 경로로 수정하세요

const ChatList = ({ onSelectRoom }) => {
    const [chatRooms, setChatRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChatRooms = async () => {
            try {
                const response = await authRequest.get('/api/v1/chat/chatroom');
                setChatRooms(response.data);
            } catch (error) {
                setError('채팅 목록을 불러오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchChatRooms();
    }, []);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <h2>채팅 목록</h2>
            <ul>
                {chatRooms.map((room) => (
                    <li key={room.id} onClick={() => onSelectRoom(room)}>
                        {room.roomName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatList;
