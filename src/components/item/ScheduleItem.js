import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callScheduleDetailAPI} from "../../apis/ScheduleAPICalls";
import KakaoMapTest from "../../pages/travel/kakaoMapTest";

function ScheduleItem({schedule}) {
    const { participantProfile, information, scheduleItemInfoResponse } = schedule;
    const navigate = useNavigate();
    const [amount, setAmount] = useState(1);

    return (
        <>
            <div className="img-div">
                {/*<img src={information.scheduleImage} alt={information.title}/>*/}
                <img src={information.scheduleImage} alt={information.title}></img>

            </div>
            <div className="info-div">
                <p>제목: {information.title}</p>
                <p>시작일: {information.startDate}</p>
                <p>종료일: {information.endDate}</p>
                <p>인원: {information.count}</p>
                <p>조회수: {information.views}</p>

            </div>
            <div className="userInfo-div">
                <div className="info-div">
                    <p>MBTI: {information.mbti}</p>
                    <p>닉네임: {information.nickname}</p>
                </div>
                <div className="profile-img">
                    <img src={information.profileImage} alt="profileImage"></img>
                </div>
            </div>

            <div className="participant-div">
                {/*<p>닉네임: {participantProfile.nickname}</p>*/}
                {/*<p>MBTI: {participantProfile.mbti}</p>*/}
                {/*<p>리뷰: {participantProfile.reviewContent}</p>*/}
                {/*<p>평점: {participantProfile.reviewPoint}</p>*/}
                {/*<img src={participantProfile.profileImage} alt="porofileImage"></img>*/}
                <ul>
                    {schedule.participantProfile.map((profile, index) => (
                        <li key={index}>
                            <p>닉네임: {profile.nickname}</p>
                            <p>MBTI: {profile.mbti}</p>
                            <p>리뷰: {profile.reviewContent}</p>
                            <p>평점: {profile.reviewPoint}</p>
                            <img src={profile.profileImage} alt="porofileImage"></img>
                            {/* Add other properties as needed */}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="item-div">
                <ul>
                    {schedule.scheduleItemInfoResponse.map((item, index) => (
                        <li key={index}>
                            <p>장소: {item.name}</p>
                            <p>주소: {item.address}</p>
                            <p>계획일: {item.planDate}</p>
                            <p>구분: {item.kind}</p>
                            <p>가격: {item.cost}</p>
                            <p>내용: {item.content}</p>
                            {/* Add other properties as needed */}
                        </li>

                    ))}
                </ul>
            </div>
        </>
    );

}


export default ScheduleItem;