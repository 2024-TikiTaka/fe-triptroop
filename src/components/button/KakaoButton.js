import React from 'react';
import { Button } from 'react-bootstrap';
import { Kakao } from '../common/Icons';

const KakaoButton = ({ ...props }) => {
	const KAKAO_CLIENT_ID = `${process.env.REACT_APP_KAKAO_CLIENT_ID}`;
	const KAKAO_REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
	const KAKAO_AUTHORIZATION_URI = `${process.env.REACT_APP_KAKAO_AUTHORIZATION_URI}?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}`;

	const handleClick = () => {
		window.location.href = KAKAO_AUTHORIZATION_URI;
	};

	return (
		<>
			<Button variant='light' size={'lg'} style={{ background: '#FEE500' }} className='fs-6 mb-0' onClick={handleClick}>
				<Kakao width={'18'} />
				<span className='ms-2'>카카오로 시작하기</span>
			</Button>
		</>
	);
};

export default KakaoButton;
