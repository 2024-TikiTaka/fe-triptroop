import React, {useEffect, useRef, useState} from 'react';
import {Button, Container, Row} from 'react-bootstrap';
import transformDescription from "./transformDescription";
import {Trash} from "react-bootstrap-icons";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {callAdminUserDeleteAPI} from "../../../../apis/admin/AdminUserAPICalls";

// 데이터를 행당 항목 개수에 따라 분할하는 함수
const chunkArray = (array, rowSizes) => {
    const chunkedArr = [];
    let index = 0;

    rowSizes.forEach(size => {
        chunkedArr.push(array.slice(index, index + size * 1)); // dt, dd 쌍으로 인해 2를 곱함
        index += size * 1;
    });
    return chunkedArr;
};

const DescriptionList = ({items, rowSizes, dtWidth}) => {
    const dispatch = useDispatch();
    const containerRef = useRef(null);
    const [dlWidth, setDlWidth] = useState(0);
    const navigate = useNavigate();
    const {delete: remove} = useSelector(state => state.adminUserReducer);
    const {userId} = useParams();
    const [deleteResult, setDeleteResult] = useState(null);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setDlWidth(containerRef.current.offsetWidth);
            }
        };

        // 초기 너비 설정
        updateWidth();

        // 리사이즈 이벤트 리스너 추가
        window.addEventListener('resize', updateWidth);

        // 클린업 함수로 리사이즈 이벤트 리스너 제거
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const chunkedItems = chunkArray(items, rowSizes);

    const handleDeleteClick = async (userId) => {
        navigate(`/admin/users`);
        console.log(`Deleting user with ID: ${userId}`);
        const result = await dispatch(callAdminUserDeleteAPI({userId}));
        setDeleteResult(result);

        if (result.status === 200) {
            alert('회원 삭제에 성공 했습니다.');
            navigate('/admin/users');
        } else {
            alert('회원 삭제에 실패 했습니다.');
        }
    }

    return (
        <div className="dl-box">
            <div className="d-flex justify-content-end mb-4">
                <Button className="btn blue-700" onClick={() => handleDeleteClick(userId)}><Trash size="22px"
                                                                                                  fill="#FFF"/></Button>
            </div>
            <Container ref={containerRef} className="dl-container">
                {chunkedItems.map((chunk, chunkIndex) => {
                    const ddWidthCalc = `calc((100% - ${dtWidth * rowSizes[chunkIndex]}px) / ${rowSizes[chunkIndex]})`;

                    return (
                        <Row as="dl" key={chunkIndex} className="description-row">
                            {chunk.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div
                                        className="description-term"
                                        style={{
                                            flex: `0 0 ${dtWidth}px`
                                        }}
                                    >
                                        {item.term}
                                    </div>
                                    <div
                                        className="description-definition"
                                        style={{
                                            flex: `0 0 ${ddWidthCalc}`
                                        }}
                                    >
                                        {/*{item.description}*/}
                                        {transformDescription(item.term, item.description)}
                                        {item.term === '값' && <Button>버튼</Button>}
                                    </div>
                                </React.Fragment>
                            ))}
                        </Row>
                    );
                })}
            </Container>
            <div className="d-flex justify-content-center mt-4">
                <Button className="btn blue-400 outline">목록 으로</Button>
                <Button className="btn blue-400">이전 으로</Button>
            </div>
        </div>

    )
        ;
};

export default DescriptionList;
