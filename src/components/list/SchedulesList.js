import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { callScheduleListAPI, callScheduleSearchListAPI, callScheduleSortListAPI } from "../../apis/ScheduleAPICalls";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Schedule from "../../pages/schedule/Schedule";
import PagingBar from "../pagination/PagingBar";
import { useLocation } from "react-router-dom";

function SchedulesList() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const { schedules } = useSelector(state => state.scheduleReducer);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const sort = searchParams.get('sort');
    const keyword = searchParams.get('keyword');

    const handleSortChange = (e) => {
        const newSort = e.target.value;
        if (newSort === 'views' || newSort === 'latest') {
            dispatch(callScheduleSortListAPI({ sort: newSort, currentPage }));
        }
    };
    const handleKeywordChange = (e) => {
        const newKeyword = e.target.value;
            dispatch(callScheduleSearchListAPI({ key: newKeyword, currentPage }));

    };

    useEffect(() => {
        if (keyword) {
            dispatch(callScheduleSearchListAPI({ keyword, currentPage }));
        } else {
            dispatch(callScheduleListAPI({ currentPage }));
        }
    }, [currentPage, sort, keyword, dispatch]);

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h2>Schedule List</h2>
                </Col>
                <Col className="text-right">
                    <Form.Select onChange={handleSortChange} value={sort || 'default'}>
                        <option value="default" disabled>Sort by...</option>
                        <option value="views">Most Views</option>
                        <option value="latest">Latest</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Form.Group>
                        <Form.Control onChange={handleKeywordChange} type="text" placeholder="Search by keyword" />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" className="ml-2">Search</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {schedules && schedules.data && (
                        <>
                            <Schedule data={schedules.data} />
                            <PagingBar pageInfo={schedules.pageInfo} setCurrentPage={setCurrentPage} />
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default SchedulesList;
