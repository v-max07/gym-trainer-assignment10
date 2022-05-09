import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css'
import slider1 from '../../../images/slider/slider1.jpg';
import slider2 from '../../../images/slider/slider2.jpg';
import slider3 from '../../../images/slider/slider3.jpg';
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className='banner' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={3000}>
                <img
                    height={800}
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption className='carousel-caption'>
                    <p className='text-uppercase caption-line'>We Are Ready To Help You To Get Perfect Fitness.</p>
                    <h1 className='caption-heading text-uppercase mb-4'>Get fit Now!</h1>
                    <p>Get Your For Body In A Healthy Way!</p>
                    <p>Exercise is really important to me - it's therapeutic. So if I'm ever feeling tense or stressed or like I'm about to have a meltdown, I'll put on my.</p>
                    <Button size='lg' variant="outline-light" className='fw-bold'>JOIN US</Button>
                </Carousel.Caption>
                
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    height={800}
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <p className='text-uppercase caption-line'>We Are Ready To Help You To Get Perfect Fitness.</p>
                    <h1 className='caption-heading text-uppercase mb-4'>Get fit Now!</h1>
                    <p>Get Your For Body In A Healthy Way!</p>
                    <p>Exercise is really important to me - it's therapeutic. So if I'm ever feeling tense or stressed or like I'm about to have a meltdown, I'll put on my.</p>
                    <Button size='lg' variant="outline-light" className='fw-bold'>JOIN US</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    height={800}
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <p className='text-uppercase caption-line'>We Are Ready To Help You To Get Perfect Fitness.</p>
                    <h1 className='caption-heading text-uppercase mb-4'>Get fit Now!</h1>
                    <p>Get Your For Body In A Healthy Way!</p>
                    <p>Exercise is really important to me - it's therapeutic. So if I'm ever feeling tense or stressed or like I'm about to have a meltdown, I'll put on my.</p>
                    <Button size='lg' variant="outline-light" className='fw-bold'>JOIN US</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
