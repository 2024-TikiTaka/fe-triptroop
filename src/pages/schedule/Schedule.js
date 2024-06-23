import { Row, Col } from 'react-bootstrap';
import ScheduleListItem from "../../components/item/ScheduleListItem";

const Schedule = ({ data }) => {
    return (
        <Row className="schedule-div">
            {data && data.map(schedule => (
                <Col lg={4}   className="mb-4" key={schedule.scheduleId}>
                    <ScheduleListItem schedule={schedule} />
                </Col>
            ))}
        </Row>
    );
}

export default Schedule;
