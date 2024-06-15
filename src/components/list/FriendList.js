import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { authRequest } from '../../apis/api';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/chat.css'; // CSS 파일을 import 합니다.

const FriendList = ({ onSelectRoom }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                console.log('Fetching user profile...');
                const userProfileResponse = await authRequest.get('/api/v1/users/me/profile');
                console.log('User Profile Response:', userProfileResponse);
                setNickname(userProfileResponse.data.result.profile.nickname);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

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

        fetchUserProfile();
        fetchFriends();
    }, []);

    const handleChatClick = async (friend) => {
        try {
            const requestBody = {
                roomName: `${nickname}, ${friend.nickname}`, // 자신의 닉네임과 친구의 닉네임을 함께 사용
                friendId: friend.acceptorId,
                type: 'PRIVATE'
            };

            const response = await authRequest.post('/api/v1/chat/chatroom', requestBody);
            console.log('Chat room created:', response.data);

            const newRoom = {
                roomName: `${nickname}, ${friend.nickname}`,
                friendId: friend.requesterId,
                type: 'PRIVATE',
                url: 'http://localhost:8080/ws'
            };

            onSelectRoom(newRoom);
        } catch (error) {
            console.error('Error creating chat room:', error);
        }
    };

    const handleDeleteFriend = async (nickname) => {
        try {
            console.log('친구 삭제:', nickname);
            await authRequest.delete('/api/v1/friend/delete', {
                data: { nickname }
            });
            setFriends(friends.filter(friend => friend.nickname !== nickname));
        } catch (error) {
            console.error('친구 삭제 중 오류 발생:', error);
        }
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
                                onClick={() => handleDeleteFriend(friend.nickname)}
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
