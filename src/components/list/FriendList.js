import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { authRequest } from '../../apis/api'; // 올바른 경로로 수정하세요
import 'bootstrap-icons/font/bootstrap-icons.css'; // 부트스트랩 아이콘 CSS
import '../../styles/chat.css'; // CSS 파일을 import 합니다.

const FriendList = ({ onSelectRoom }) => {
    const [friends, setFriends] = useState([]); // 초기 값을 빈 배열로 설정
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                console.log('Fetching friends...');
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
        fetchFriends();
    }, []);

    const handleChatClick = (friend) => {
        const newRoom = {
            roomName: friend.nickname,
            friendId: friend.requesterId,
            type: 'PRIVATE',
            url: 'http://localhost:8080/ws' // 고정된 웹 소켓 URL
        };
        onSelectRoom(newRoom);
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
                                onClick={() => handleChatClick(friend)}
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
