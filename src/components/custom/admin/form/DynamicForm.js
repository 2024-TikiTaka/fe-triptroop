import React, {useEffect, useRef, useState} from 'react';
import DescriptionList from "../dl/DescriptionList";
import {TranslateKeys} from "../dl/TranslateKeys";
import {useDispatch, useSelector} from "react-redux";
import DatePicker from "react-datepicker";
import {ko} from "date-fns/locale/ko";
import {useNavigate} from "react-router-dom";
import {FormSelect} from "react-bootstrap";
import {callAdminUserRegisterAPI} from "../../../../apis/admin/AdminUserAPICalls";
import {format} from "date-fns";


const DynamicForm = ({fields, context, rowSizes}) => {
    const [dynamicForm, setDynamicForm] = useState({
        email: '',
        nickname: '',
        password: '',
        passwordConfirm: '',
        name: '',
        gender: '',
        birth: '',
        role: 'USER',
        phone: '',
        status: 'ACTIVE',
        introduction: '',
        mbti: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {success} = useSelector(state => state.adminUserReducer);
    const [submitFlag, setSubmitFlag] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        console.log("success 조건 시작 전! ", success);
        if (success === true) navigate('/admin/users');
        console.log("success 조건 시작 후!!!! ", success);
    }, [success, navigate]);

    const translatedFields = TranslateKeys(fields.reduce((acc, field) => {
        acc[field.name] = field.term;
        return acc;
    }, {}), context);

    const initialFormState = fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {});

    const [form, setForm] = useState(initialFormState);

    // useEffect(() => {
    //     if (submitFlag) {
    //         handleSubmit();
    //     }
    // }, [form]);

    const handleChange = (event) => {
        const {name, value, type, checked, files} = event.target;
        //const formData = new FormData();
        //formData.append('adminUserSaveRequest', new Blob([JSON.stringify(dynamicForm)], {type: 'application/json'}));
        setForm({
            ...form,
            // [name]: type === 'checkbox' ? checked : value,
            [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value),
            [event.target.id]: event.target.value,
        });
    };

    const handleDateChange = (date) => {
        setForm(prevForm => ({
            ...prevForm,
            birth: format(date, 'yyyy-MM-dd')
        }));
    }

    const validateForm = () => {
        if (!form.email || !form.role || !form.status) {
            return false;
        }
        return true;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const result = await callAdminUserRegisterAPI();
            if (result && result.data) {
                console.log('API 호출 성공:', result.data);
                // 성공 시 후속 처리
            } else {
                console.error('API 호출은 성공했지만 응답 데이터가 없습니다.');
            }
        } catch (error) {
            console.error('API 호출 중 오류 발생:', error);
        }

        if (!validateForm()) {
            alert('필수 항목을 입력해주세요.');
            return;
        }
        console.log('Form submitted:', form);

        // 요청할 폼 객체의 속성 순서 변경
        const orderedForm = {
            email: form.email,
            password: form.password,
            confirmPassword: form.confirmPassword,
            name: form.name,
            phone: form.phone,
            gender: form.gender,
            role: form.role,
            status: form.status,
            birth: form.birth,
            nickname: form.nickname,
            introduction: form.introduction,
            mbti: form.mbti
        }

        if (!orderedForm.gender) {
            alert('성별을 선택해주세요.');
            return;
        }

        const formData = new FormData();
        //formData.append('adminUserSaveRequest', new Blob([JSON.stringify(form)], {type: 'application/json'}));
        // formData.append('adminUserSaveRequest', JSON.stringify(orderedForm));
        formData.append('adminUserSaveRequest', new Blob([JSON.stringify(orderedForm)], {type: 'application/json'}));

        if (form.profileImage) {
            formData.append('profileImage', form.profileImage);
        }

        // 폼 데이터를 확인하기 위한 콘솔 출력
        for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        //     dispatch(callAdminUserRegisterAPI({adminUserSaveRequest: formData}))
        //         .then(response => {
        //             console.log("요청 성공:", response);
        //         })
        //         .catch(error => {
        //             if (error.response) {
        //                 console.error("서버 응답 오류:", error.response.data);
        //             } else if (error.request) {
        //                 console.error("요청 오류:", error.request);
        //             } else {
        //                 console.error("오류:", error.message);
        //             }
        //         })
        // };
        try {
            const response = await dispatch(callAdminUserRegisterAPI({adminUserSaveRequest: formData}));
            console.log("요청 성공:", response);

            if (response && response.data) {
                console.log("서버 응답 데이터:", response.data);
            } else {
                console.error("응답 데이터가 없습니다.");
            }
        } catch (error) {
            if (error.response) {
                console.error("서버 응답 오류:", error.response.data);
            } else if (error.request) {
                console.error("요청 오류:", error.request);
            } else {
                console.error("오류:", error.message);
            }
        }
    };

    // const sucess = () => {
    //     alert('회원가입이 완료되었습니다.');
    //     navigate('/admin/users');
    // }
    //const [endDate, setEndDate] = useState(new Date());

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     setSubmitFlag(true);
    // };

    const items = fields.map(field => ({
        term: translatedFields[field.name] || field.term,
        description: field.type === 'select' ? (
            // <select
            //     className="form-control"
            //     name={field.name}
            //     value={form[field.name]}
            //     onChange={handleChange}
            //     required={field.required}
            // >
            //     {field.options.map((option, idx) => (
            //         <option key={idx} value={option.value}>{option.label}</option>
            //     ))}
            // </select>
            <FormSelect
                className="form-select"
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                required={field.required}
            >
                {field.options.map((option, idx) => (
                    <option key={idx} value={option.value}>{option.label}</option>
                ))}
            </FormSelect>

        ) : field.type === 'radio' ? (
            <input
                className="form-check-input"
                type="radio"
                name={field.name}
                value={form[field.name]}
                checked={form[field.name] === form[field.value]}
                onChange={handleChange}
                required={field.required}
            />
        ) : field.type === 'date' ? (
            <DatePicker
                className="form-control"
                selected={form.birth ? new Date(form.birth) : null}
                // onChange={(date) => setEndDate(date)}
                onChange={handleDateChange}
                locale={ko}
                dateFormat="yyyy-MM-dd"
                showPopperArrow={false}
                maxDate={new Date()}
                //value={form[field.name]}
            />
        ) : field.type === 'checkbox' ? (
            <input
                className="form-check-input"
                type="checkbox"
                name={field.name}
                checked={form[field.name]}
                onChange={handleChange}
                required={field.required}
            />
        ) : (
            <input
                className="form-control"
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                required={field.required}
            />
        )
    }));

    return (
        <form onSubmit={handleSubmit}>
            <DescriptionList items={items} rowSizes={rowSizes} dtWidth={180}/>
            <button type="submit" className="btn btn-primary">제출</button>
        </form>
    );
};

export default DynamicForm;
