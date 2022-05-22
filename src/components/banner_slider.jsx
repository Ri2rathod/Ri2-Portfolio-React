import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import Button from './button';

import dev_1_img from '../assets/images/pexels-pixabay-270348.jpg';
import dev_2_img from '../assets/images/dev-slider-img-3.jpg';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


// Import Swiper styles
import '../assets/css/swiper-slider.css';
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'


let interleaveOffset = 0.5;
export default () => {
    library.add(fas, faChevronLeft, faChevronRight)

    return (
        <section className='hero-slider hero-style'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation={true} 
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => {
                    let image = document.querySelectorAll('.slide-bg-image');
                    image.forEach((item) => {
                        item.style.setProperty('background', 'url(' + item.dataset.background + ')');
                    });

                }}
                parallax={true}
                loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                watchSlidesProgress={true}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}

                onProgress={(swiper) => {
                    for (var i = 0; i < swiper.slides.length; i++) {
                        var slideProgress = swiper.slides[i].progress;
                        var innerOffset = swiper.width * interleaveOffset;
                        var innerTranslate = slideProgress * innerOffset;
                        swiper.slides[i].querySelector(".slide-inner").style.transform =
                            "translate3d(" + innerTranslate + "px, 0, 0)";
                    }
                }}

                onTouchStart={function (swiper) {
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = "";
                    }
                }}
                onSetTransition={function (swiper, speed) {
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + "ms";
                        swiper.slides[i].querySelector(".slide-inner").style.transition =
                            speed + "ms";
                    }
                }}
            >
                <SwiperSlide>
                    <div className="slide-inner  slide-bg-image" data-background={dev_2_img}>
                        <div className="container">
                            <div data-swiper-parallax="300" className="slide-title">
                                <h2>
                                    Hi, I am Ritesh,
                                    Backend Web Developer
                                </h2>
                            </div>
                       
                            <Button link={'#'}>sample</Button>
                        </div>
                    </div>
                </SwiperSlide>
              
            </Swiper>

        </section>
    );
}