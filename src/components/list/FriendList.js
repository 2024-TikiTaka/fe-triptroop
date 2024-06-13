import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 사용
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css'; // 부트스트랩 아이콘 CSS
import '../../styles/chat.css'; // CSS 파일을 import 합니다.
import ChatRoom from '../item/ChatRoom';
import { authRequest } from '../../apis/api';

const FriendList = ({ onSelectRoom }) => {
    const [friends, setFriends] = useState([]); // 초기 값을 빈 배열로 설정
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // useNavigate 훅 사용

    useEffect(() => {
        const fetchFriendsAndChatRooms = async () => {
            try {
                console.log('Fetching friends and chat rooms...');
                const friendsResponse = await authRequest.get('/api/v1/friend');
                console.log('Friends Response:', friendsResponse);
                setFriends(friendsResponse.data.result || []);
            } catch (error) {
                console.error('Error:', error);
                setError('친구 목록을 불러오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchFriendsAndChatRooms();
    }, []);

    const startPrivateChat = (roomName, friendId) => {
        const room = {
            roomName: roomName,
            friendId: friendId,
            type: 'PRIVATE', // 기본값 설정
            url: `/ws/${roomName}` // 예시 URL, 필요에 따라 수정
        };
        console.log('Starting private chat with room:', room);
        onSelectRoom(room); // 채팅방 선택 함수 호출
    };

    const handleDeleteFriend = (friendId) => {
        console.log('친구 삭제:', friendId);
        // 친구 삭제 API 호출 로직을 추가할 수 있습니다.
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="friend-list-container">
            <h5>친구</h5>
            <ul className="friend-list">
                {Array.isArray(friends) && friends.map((friend, index) => (
                    <li key={index} className="friend-item">
                        <div className="friend-info">
                            <img src={friend.profileImage} alt="프로필" className="friend-avatar" />
                            <div className="friend-name">{friend.nickname}</div>
                        </div>
                        <div className="friend-actions">
                            <Button
                                variant="outline-primary"
                                size="sm"
                                onClick={() => startPrivateChat(friend.nickname, friend.requesterId)}
                            >
                                <i className="bi bi-chat-dots"></i>
                            </Button>
                            <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => handleDeleteFriend(friend.requesterId)}
                            >
                                <i className="bi bi-person-x"></i>
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendList;
