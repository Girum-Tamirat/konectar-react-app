import React from 'react'
import heroImage from '../assets/images/hero-section-image.JPG';
import CallToAction from './CallToAction.js';

export default function HeroSection() {
    return (
        <div className="hero-section flex flex-col items-center md:flex-row md:items-center bg-gray-50 py-10">
            <div className="md:w-1/2 text-center md:text-left px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Unlock Markets and Increase Profits</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Skip multiple middlemen and sell directly to businesses like: <br />
                    Supermarkets, Quick Service, Restaurants, Hotels, and Food Processors in One Click!
                </p>
                <CallToAction />
            </div>
            <div className="md:w-1/2 px-4 mt-6 md:mt-0">
                <img src={heroImage} alt="Farmer holding vegetables" className="w-full rounded-lg shadow-lg" />
            </div>
        </div>
    );
};