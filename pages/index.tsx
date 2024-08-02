// pages/index.tsx
import React, { Fragment } from 'react';
import HeroComponent from '@/components/website/HeroComponent';
import Header from '@/components/layout/Header';
import Cards from '@/components/Cards';
import Footer from '@/components/layout/Footer';
import AboutComponent from "@/components/website/AboutComponent";
import FeaturesComponent from "@/components/website/Features";

type Props = {};

function Index({}: Props) {
    const subdomain = process.env.NEXT_PUBLIC_SUBDOMAIN;
    return (
        <Fragment>
            <Header />
            <HeroComponent />
            <AboutComponent />
            <Cards subdomain={subdomain} />
            <FeaturesComponent />
            <Footer />
        </Fragment>
    );
}

export default Index;