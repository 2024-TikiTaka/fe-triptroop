//수정값
const length = 10; //목록의 개수이
const oneIndices = [9]; // 1을 설정할 인덱스

//갯수가 1개 여야할 행의 번호
function generateRowSizes(length, oneIndices) {
    const rowSizes = Array(length).fill(2); // 기본값 2로 초기화
    oneIndices.forEach(index => {
        if (index < length) {
            rowSizes[index] = 1; // 지정된 인덱스에 1을 설정
        }
    });
    return rowSizes;
}

export const rowSizes = generateRowSizes(length, oneIndices);


//
// // 예시 사용법
// const length = 8; // 목록의 길이
// const oneIndices = [2]; // 1을 설정할 인덱스
// const rowSizes = generateRowSizes(length, oneIndices); // 결과: [2, 2, 1, 2, 2, 2, 2, 2]
//
// console.log(rowSizes); // [2, 2, 1, 2, 2, 2, 2, 2]
