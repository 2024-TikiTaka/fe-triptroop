import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const VisualSlider = ({images}) => {
    const slides = [
        { id: 1, src: "https://booking.webestica.com/assets/images/gallery/04.jpg" },
        { id: 2, src: "https://booking.webestica.com/assets/images/gallery/05.jpg" },
        { id: 3, src: "https://booking.webestica.com/assets/images/gallery/03.jpg" },
        { id: 4, src: "https://booking.webestica.com/assets/images/gallery/09.jpg" },
        { id: 5, src: "https://booking.webestica.com/assets/images/gallery/10.jpg" },
        { id: 6, src: "https://booking.webestica.com/assets/images/gallery/06.jpg" },
        { id: 7, src: "https://booking.webestica.com/assets/images/gallery/07.jpg" },
        { id: 8, src: "https://booking.webestica.com/assets/images/gallery/08.jpg" },
        { id: 9, src: images[0].fullPath },
    ];

    console.log(images[0].fullPath)

    return (
        <Container>
            <Row className="mt-md-5">
                <Col xs={12}>
                    <Carousel fade indicators={false} controls={false}>
                        {slides.map((slide) => (
                            <Carousel.Item key={slide.id}>
                                <div
                                    className="d-block w-100 rounded"
                                    style={{
                                        height: "585px",
                                        background: `url(${slide.src}) center center / cover no-repeat`,
                                    }}
                                >
                                    <img src={slide.src} alt="" style={{ display: 'none' }} />
                                    <a href={slide.src} className="stretched-link" data-gallery="banner"></a>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Carousel
                        className="mt-3"
                        interval={null}
                        indicators={false}
                        prevIcon={<ChevronLeft className="text-primary" />}
                        nextIcon={<ChevronRight className="text-primary" />}
                    >
                        {slides.map((slide) => (
                            <Carousel.Item key={slide.id} >
                                <div
                                    className="d-block rounded"
                                    style={{
                                        width: "200px",
                                        height: "120px",
                                        background: `url(${slide.src}) center center / cover no-repeat`,
                                        marginRight: "20px",
                                    }}
                                >
                                    <img src={slide.src} alt="" style={{ display: 'none' }} />
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default VisualSlider;