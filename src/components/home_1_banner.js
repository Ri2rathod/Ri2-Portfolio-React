import React from 'react'

import { Container } from 'react-bootstrap'
import banner from '../assets/images/—Pngtree—mandala design outline happy diwali_5162587.png';
import svg from '../assets/images/svg/Group 3.svg';

export default function home_1_banner() {

    var style={"backgroundColor":"var(--bg-primary)"}
    return (

             <section className=" position-relative banner-section overflow-hidden" style={style}>
                <Container >
                    <div>
                        <h1 className="text-center col-md-8 mx-auto pt-5">I'M Ritesh Rathod Junior Full Stack Developer</h1>
                    </div>
                    <div className="img-pattern w-100 text-center">
                        <img src={banner} alt="banner" className="img-fluid "></img>
                        
                        <a href="#next" className="icon-btn"> <img src={svg} alt="banner" className="forward-btn"></img>  </a>
                    </div>
                </Container>
            </section>
    )
}
