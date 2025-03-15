import About from '@/components/About/About';
import Header from '@/components/Header/Header';
import Features from '@/components/OurFeatures/Features';
import Solution from '@/components/Solution/Solution';
import { TrustedCompanies } from '@/components/TrustedCompanies';
import React from 'react';

const LandingPage = () => {
    return (
        <div className='flex min-h-screen flex-col'>
            <Header />
            <TrustedCompanies />
            <Solution />
            <About />
            <Features />
        </div>
    );
};

export default LandingPage;