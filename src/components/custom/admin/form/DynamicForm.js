import React, {useEffect, useState} from 'react';
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
        gender: 'M',
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

    useEffect(() => {
        if (success) {
            alert('회원 등록에 성공했습니다.');
            navigate('/admin/users');
        } else {
            //alert('회원 등록에 실패했습니다.');
        }
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

    const handleChange = (event) => {
        const {name, value, type, checked, files} = event.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
            //[event.target.id]: event.target.value,
        });
    };

    const handleDateChange = (date) => {
        setForm(prevForm => ({
            ...prevForm,
            birth: format(date, 'yyyy-MM-dd')
        }));
    }

    // const validateForm = () => {
    //     if (!form.email || !form.nickname || !form.role || !form.gender || !form.name || !form.birth || !form.status) {
    //         return false;
    //     }
    //     return true;
    // }
    const validateForm = () => {
        const missingFields = [];

        if (!form.email) missingFields.push('이메일');
        if (!form.nickname) missingFields.push('닉네임');
        if (!form.role) missingFields.push('권한');
        if (!form.gender) missingFields.push('성별');
        if (!form.name) missingFields.push('이름');
        if (!form.birth) missingFields.push('생년월일');
        if (!form.status) missingFields.push('상태');

        if (missingFields.length > 0) {
            alert(`다음 항목을 입력해주세요: ${missingFields.join(', ')}`);
            return false;
        }

        return true;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            alert('필수 항목을 입력해주세요.');
            return;
        }
        console.log('Form submitted:', form);

        // 요청할 폼 객체의 속성 순서 변경
        const adminUserSaveRequest = {
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

        // if (!orderedForm.gender) {
        //     alert('성별을 선택해주세요.');
        //     return;
        // }

        const formData = new FormData();
        formData.append('adminUserSaveRequest', new Blob([JSON.stringify(adminUserSaveRequest)], {type: 'application/json'}));

        if (form.profileImage) {
            formData.append('profileImage', form.profileImage);
        }

        try {
            const response = await dispatch(callAdminUserRegisterAPI(formData));
            console.log("요청 성공:", response);

            if (response && response.data) {
                console.log("서버 응답 데이터:", response.data);
            } else {
                console.error("응답 데이터가 없습니다.");
            }
        } catch (error) {
            console.error("서버 응답 오류:", error);
        }
    };

    const items = fields.map(field => ({
        term: translatedFields[field.name] || field.term,
        description: field.type === 'select' ? (
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
