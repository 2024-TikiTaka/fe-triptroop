import React, {useEffect, useRef, useState} from 'react';
import {Button, Container, Row} from 'react-bootstrap';
import transformDescription from "./transformDescription";

// 데이터를 행당 항목 개수에 따라 분할하는 함수
const chunkArray = (array, rowSizes) => {
    const chunkedArr = [];
    let index = 0;

    // console.log("dsafsdf : ", array, rowSizes)

    rowSizes.forEach(size => {
        chunkedArr.push(array.slice(index, index + size * 1)); // dt, dd 쌍으로 인해 2를 곱함
        index += size * 1;
    });
    return chunkedArr;
};

const DescriptionList = ({items, rowSizes, dtWidth}) => {
    const containerRef = useRef(null);
    const [dlWidth, setDlWidth] = useState(0);

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

    // items 배열 변환
    // const transformedItems = items.map(item => ({
    //     ...item,
    //     description: transformDescription(item.description),
    // }));

    // console.log("DescriptionList items :", items);
    // console.log("DescriptionList rowSizes:", rowSizes);
    //const chunkedItems = chunkArray(transformedItems, rowSizes);
    const chunkedItems = chunkArray(items, rowSizes);

    return (
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

    )
        ;
};

export default DescriptionList;
