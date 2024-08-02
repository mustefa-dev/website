import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiHelper from '@/api/api-helper';

type Props = {};

type CompanyData = {
    name: string;
    subDomain: string;
    heroTitle: string;
    heroDescription: string;
    shapeTemplate: string | null;
    sectionImage: string;
    sectionTitle: string;
    sectionDescription: string;
    heroImage: string;
    logoImage: string;
    productsImages: string[];
    servicesImage: string[];
    location: string;
    emailContact: string;
    phoneContact: string;
    socialMediaLinks: string[];
    tagline: string | null;
    primaryColor: string;
    secondaryColor: string;
    socialLinks: string[];
    features: {
        title: string;
        description: string;
        icon: string;
        featuerColor: string;
    }[];
    subscriptionStartDate: string;
    subscriptionEndDate: string;
    isSubscriptionValid: boolean;
    redirectUrl: string;
    id: string;
    creationDate: string;
};

function AboutComponent({}: Props) {
    const [data, setData] = useState<CompanyData | null>(null);

    useEffect(() => {
        const subdomain = process.env.NEXT_PUBLIC_SUBDOMAIN;
        if (subdomain) {
            axios
                .get(apiHelper.WEBSITE.GET_SUBDOMAIN(subdomain))
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error('There was an error!', error);
                });
        }
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const shapeClass = data.shapeTemplate ? `shape-${data.shapeTemplate.toLowerCase()}` : '';

    return (
        <div className="flex flex-col sm:flex-row justify-between gap-1 md:gap-16 h-screen p-4 md:p-16">
            <div className="text-right w-full sm:w-1/2 flex gap-4 flex-col justify-center px-5 items-end h-full">
                <h2 className="text-5xl font-bold">{data.heroTitle}</h2>
                <p className="text-lg md:text-xl">{data.heroDescription}</p>
                <button
                    className="text-white p-3 px-7 rounded-md my-2"
                    style={{ backgroundColor: data.secondaryColor }}
                    onClick={() => { if (data.redirectUrl) window.location.href = data.redirectUrl; }}
                >
                    Contact
                </button>
            </div>
            <img
                src={data.heroImage}
                alt="about"
                className={`w-full sm:w-1/2 object-cover ${shapeClass}`}
            />
        </div>
    );
}

export default AboutComponent;
