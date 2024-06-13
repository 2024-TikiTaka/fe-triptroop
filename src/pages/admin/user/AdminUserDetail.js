import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callAdminUserDetailAPI} from "../../../apis/admin/AdminUserAPICalls";
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

function AdminUserDetail() {
    const dispatch = useDispatch();
    const {userId} = useParams();
    const admin = useSelector(state => state.adminUserReducer.getInfo);

    useEffect(() => {
        dispatch(callAdminUserDetailAPI({userId}))
    }, [userId]);


    return (
        <>
            <Container>
                <Row>
                    <Col as="dl">
                        <Row>
                            <Col as="dt" sm={3}>Term 1</Col>
                            <Col as="dd" sm={9}>Description for term 1.</Col>
                        </Row>
                        <Row>
                            <Col as="dt" sm={3}>Term 2</Col>
                            <Col as="dd" sm={9}>Description for term 2.</Col>
                        </Row>
                        <Row>
                            <Col as="dt" sm={3}>Term 3</Col>
                            <Col as="dd" sm={9}>Description for term 3.</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default AdminUserDetail;