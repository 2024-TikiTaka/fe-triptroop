//수정 값 [term, type, name, required, options]
// term : dt값 -> dt에 표시할 값
// type : input 타입 속성, -> text, password, email, radio, checkbox, select
// name : 네임 속성 -> name 속성 지정 할 값
// required : required 속성 -> 필수 입력 여부 true(필수 입력) , false(필수 입력X)
// options : options 확인 값 이라 입력 X
const inputData = [
    ['아이디', 'email', 'email', true],
    ['비밀번호', 'password', 'password', true],
    ['이름', 'text', 'name', true],
    [
        '성별', 'select', 'gender', true, [
        {value: 'male', label: '남성'},
        {value: 'female', label: '여성'}
    ]
    ],
    ['권한', 'text', 'role', true],
    ['뉴스레터 구독', 'checkbox', 'newsletter', false]
]

const convertFieldData = (inputData) => {
    return inputData.map(([term, type, name, required, options]) => {
        const field = {term, type, name, required};
        if (options) {
            field.options = options;
        }
        return field;
    });
};

export const fields = convertFieldData(inputData);