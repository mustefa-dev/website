import React, { useEffect, useState } from 'react';
import apiHelper from '@/api/api-helper';
import { axiosService } from '@/api/axios-service';

type Props = {
    subdomain: string;
};

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

function Cards({ subdomain }: Props) {
    const [data, setData] = useState<CompanyData | null>(null);

    useEffect(() => {
        if (subdomain) {
            axiosService
                .get(apiHelper.WEBSITE.GET_SUBDOMAIN(subdomain))
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.error('There was an error fetching the company data!', error);
                });
        }
    }, [subdomain]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto grid grid-cols-3 items-center justify-center gap-5">
            {data.productsImages.map((image, index) => (
                <img
                    key={index}
                    className="aspect-[3/4] object-cover h-96 w-full"
                    src={image}
                    alt={`Product ${index + 1}`}
                />
            ))}
        </div>
    );
}

export default Cards;
