import React, { useEffect, useState } from 'react';
import { authRequest } from '../../apis/api'; // 올바른 경로로 수정하세요

const FriendList = () => {
    const [friends, setFriends] = useState([]); // 초기 값을 빈 배열로 설정
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                console.log('Fetching friends...');
                const response = await authRequest.get('/api/v1/friend');
                console.log('Response:', response); // 응답 데이터를 콘솔에 출력
                setFriends(response.data.result || []); // 응답 데이터가 없을 경우 빈 배열로 설정
            } catch (error) {
                console.error('Error:', error); // 에러를 콘솔에 출력
                setError('친구 목록을 불러오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchFriends();
    }, []);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>친구 목록</h1>
            <ul>
                {Array.isArray(friends) && friends.map((friend, index) => (
                    <li key={index}>
                        {friend.acceptorId && <div>Acceptor ID: {friend.acceptorId}</div>}
                        {friend.requesterId && <div>Requester ID: {friend.requesterId}</div>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendList;
