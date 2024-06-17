import React, { useEffect, useState } from 'react';
import { authRequest } from '../../apis/api';
import { ListGroup } from 'react-bootstrap';
import NoticeItem from '../item/NoticeItem'; // 올바른 경로로 수정
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/chat.css'; // 스타일링을 위한 CSS 파일을 import 합니다.

const NoticeList = () => {
	const [notices, setNotices] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedNoticeId, setSelectedNoticeId] = useState(null);

	useEffect(() => {
		const fetchNotices = async () => {
			try {
				console.log('Fetching notices...');
				const response = await authRequest.get('/api/v1/admin/notice');
				console.log('Notices Response:', response);
				setNotices(response.data.result || []);
			} catch (error) {
				console.error('Error:', error);
				setError('공지 목록을 불러오는 중 오류가 발생했습니다.');
			} finally {
				setLoading(false);
			}
		};

		fetchNotices();
	}, []);

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
		const day = date.getDate();
		return `${month}월 ${day}일`;
	};

	if (loading) {
		return <div>로딩 중...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (selectedNoticeId) {
		return <NoticeItem noticeId={selectedNoticeId} onBack={() => setSelectedNoticeId(null)} />;
	}

	return (
		<div className="notice-list-container">
			<h5>공지</h5>
			<ListGroup variant="flush">
				{Array.isArray(notices) && notices.map((notice, index) => (
					<ListGroup.Item key={index} className="notice-item" onClick={() => setSelectedNoticeId(notice.noticeId)}>
						<div className="notice-header">
							<div className="notice-title">{notice.title}</div>
							<div className="notice-date">{formatDate(notice.createdAt)}</div>
						</div>
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};

export default NoticeList;
