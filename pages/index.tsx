// pages/index.tsx
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroComponent from '@/components/website/HeroComponent';
import Header from '@/components/layout/Header';
import Cards from '@/components/Cards';
import Footer from '@/components/layout/Footer';
import AboutComponent from "@/components/website/AboutComponent";
import FeaturesComponent from "@/components/website/Features";
import BlogComponent from "@/components/BlogComponent";

type Props = {};

function Index({}: Props) {
    const subdomain = process.env.NEXT_PUBLIC_SUBDOMAIN;
    return (
        <Router>
            <Fragment>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <Fragment>
                            <HeroComponent />
                            <AboutComponent />
                            <Cards subdomain={subdomain} />
                            <FeaturesComponent />
                        </Fragment>
                    } />
                    <Route path="/blog" element={<BlogComponent subdomain={subdomain} />} />
                </Routes>
                <Footer />
            </Fragment>
        </Router>
    );
}

export default Index;