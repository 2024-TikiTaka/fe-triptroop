import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { authRequest } from '../../apis/api';
import '../../styles/chat.css'; // 스타일링을 위한 CSS 파일을 import 합니다.

const NoticeItem = ({ noticeId, onBack }) => {
    const [notice, setNotice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNoticeDetail = async () => {
            try {
                const response = await authRequest.get(`/api/v1/admin/notice/${noticeId}`);
                setNotice(response.data.result);
            } catch (error) {
                console.error('Error fetching notice detail:', error);
                setError('공지 상세 정보를 불러오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchNoticeDetail();
    }, [noticeId]);

    const formatKind = (kind) => {
        switch (kind) {
            case 'NORMAL':
                return '일반';
            case 'EVENT':
                return '이벤트';
            case 'URGENT':
                return '긴급';
            default:
                return kind;
        }
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="notice-item-container">
            <div className="notice-item-header">
                <Button variant="link" onClick={onBack} className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
                <h5 className="notice-kind">{formatKind(notice.kind)}</h5>
            </div>
            <div className="notice-item-content">
                <h5 className="notice-title">{notice.title}</h5>
                <p className="notice-date">작성일: {notice.createdAt}</p>
                <p className="notice-content">{notice.content}</p>
                {notice.imageNames && notice.imageNames.length > 0 && (
                    <div className="notice-images">
                        {notice.imageNames.map((imageName, index) => (
                            <img key={index} src={`/path/to/images/${imageName}`} alt="공지 이미지" className="notice-image" />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoticeItem;
