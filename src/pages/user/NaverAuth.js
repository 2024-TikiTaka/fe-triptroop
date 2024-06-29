import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { callNaverAuthAPI } from '../../apis/AuthAPICalls';

const NaverAuth = () => {
	// const navigate = useNavigate();
	const dispatch = useDispatch();
	const code = new URL(document.location.toString()).searchParams.get('code');
	console.log(code);

	useEffect(() => {
		dispatch(callNaverAuthAPI(code));
	}, [dispatch]);

	return (
		<div className='login-content'>
			<div className='grid gap-2 text-center'>
				<Spinner />

				<h3 className='my-3'>로그인 중입니다.</h3>
				<p>잠시만 기다려주세요.</p>
			</div>
		</div>
	);
};

export default NaverAuth;
