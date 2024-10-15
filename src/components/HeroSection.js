import React from 'react'
import heroImage from '../assets/images/hero-section-image.JPG';
import CallToAction from './CallToAction.js';

export default function HeroSection() {
    return (
        <div className="hero-section flex flex-col items-center md:flex-row md:items-center bg-gray-50 py-10">
            <div className="md:w-1/2 text-center md:text-left px-7 md:ml-8">
                <h1 className="text-6xl font-semibold text-gray-900 mb-5">Unlock Markets and Increase Profits</h1>
                <p className="text-lg font-medium max-w-lg mb-6">
                    Skip multiple middlemen and sell directly to businesses like:<br />
                    Supermarkets, Quick Service, Restaurants, Hotels, and Food Processors in One Click!
                </p>
                <CallToAction />
            </div>
            <div className="md:w-1/2 px-12 py-12 m-5 mr-11 md:mt-0">
                <img src={heroImage} alt="Farmer holding vegetables" className="w-full rounded-2xl shadow-lg" />
            </div>
        </div>
    );
};