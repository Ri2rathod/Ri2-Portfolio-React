import React from 'react';
import Home1Myself from './../components/home_1_myself';
import BannerSlider from './../components/banner_slider';

import { Helmet } from 'react-helmet';


export default function main() {
    return (
        <>
            <Helmet>
                <title>
                    Ri2 portfolio - Home
                </title>
            </Helmet>
            <main className="main">
                <BannerSlider />
                <Home1Myself />
            </main>
        </>
    )
}