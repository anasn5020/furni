import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Style from '../Assets/Styles/Components/TestimonalCarousel.module.css';

const TestimonialsCarousel = () => {
    const testimonials = [
        {
            quote:
                '“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”',
            author: 'Maria Jones',
            position: 'CEO, Co-Founder, XYZ Inc.',
        },
        {
            quote:
                '“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”',
            author: 'Maria Jones',
            position: 'CEO, Co-Founder, XYZ Inc.',
        },
        {
            quote:
                '“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”',
            author: 'Maria Jones',
            position: 'CEO, Co-Founder, XYZ Inc.',
        },
        // Add more testimonials here
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className={`${Style.testimonialCarousel}`}>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`${Style.testimonialSlide}`}>
                            <blockquote className={`${Style.quote}`}>{testimonial.quote}</blockquote>
                            <div className={`${Style.author}`}>
                                <img
                                    src="https://themewagon.github.io/furni/images/person-1.png"
                                    alt="Maria Jones"
                                    className={`${Style.authorImage}`}
                                />
                                <div className={`${Style.authorDetails}`}>
                                    <p className={`${Style.authorName}`}>{testimonial.author}</p>
                                    <p className={`${Style.authorPosition}`}>{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default TestimonialsCarousel;