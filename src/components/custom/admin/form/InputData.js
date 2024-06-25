//수정 값 [term, type, name, required, options]
// term : dt값 -> dt에 표시할 값
// type : input 타입 속성, -> text, password, email, radio, checkbox, select
// name : 네임 속성 -> name 속성 지정 할 값
// required : required 속성 -> 필수 입력 여부 true(필수 입력) , false(필수 입력X)
// options : options 확인 값 이라 입력 X
// defaultValue : 입력 기본값
const inputData = [
    ['아이디', 'email', 'email', true, ''],
    ['닉네임', 'text', 'nickname', true, ''],
    ['비밀번호', 'password', 'password', true, ''],
    ['비밀번확인', 'password', 'confirmPassword', true, ''],
    ['이름', 'text', 'name', true, ''],
    [
        '성별', 'select', 'gender', true, [
        {value: null, label: '선택안함'},
        {value: 'M', label: '남성'},
        {value: 'F', label: '여성'}
    ], ''
    ],
    ['생년월일', 'date', 'birth', true, ''],
    [
        '권한', 'select', 'role', true, [
        {value: 'USER', label: '유저'},
        {value: 'ADMIN', label: '관리자'}
    ], 'USER'
    ],
    ['전화번호', 'text', 'phone', false, ''],
    [
        '상태', 'select', 'status', true, [
        {value: 'ACTIVE', label: '활동'},
        {value: 'SUSPENDED', label: '정지'},
        {value: 'WITHDRAWN', label: '탈퇴'}
    ], 'ACTIVE'
    ],
    ['자기소게', 'text', 'introduction', false, ''],
    [
        'MBTI', 'select', 'mbti', false, [
        {value: null, label: '선택안함'},
        {value: 'ISTJ', label: 'ISTJ'},
        {value: 'ISTP', label: 'ISTP'},
        {value: 'INFJ', label: 'INFJ'},
        {value: 'INTJ', label: 'INTJ'},
        {value: 'ISFJ', label: 'ISFJ'},
        {value: 'ISFP', label: 'ISFP'},
        {value: 'INFP', label: 'INFP'},
        {value: 'INTP', label: 'INTP'},
        {value: 'ESTJ', label: 'ESTJ'},
        {value: 'ESFP', label: 'ESFP'},
        {value: 'ENFP', label: 'ENFP'},
        {value: 'ENTP', label: 'ENTP'},
        {value: 'ESFJ', label: 'ESFJ'},
        {value: 'ESTP', label: 'ESTP'},
        {value: 'ENFJ', label: 'ENFJ'},
        {value: 'ENTJ', label: 'ENTJ'}
    ], ''
    ]
]

const convertFieldData = (inputData) => {
    return inputData.map(([term, type, name, required, options, defaultValue]) => {
        const field = {term, type, name, required, defaultValue};
        if (options) {
            field.options = options;
        }
        if (defaultValue !== undefined) {
            field.defaultValue = defaultValue;
        }
        return field;
    });
};

export const fields = convertFieldData(inputData);