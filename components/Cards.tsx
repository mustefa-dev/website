// components/Cards.tsx
import React, { useEffect, useState } from 'react';
import apiHelper from '@/api/api-helper';
import { axiosService } from '@/api/axios-service';
import ImageModal from './ImageModal';

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

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

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImageIndex(null);
    };

    const handleNextImage = () => {
        if (selectedImageIndex !== null && data) {
            setSelectedImageIndex((selectedImageIndex + 1) % data.productsImages.length);
        }
    };

    const handlePrevImage = () => {
        if (selectedImageIndex !== null && data) {
            setSelectedImageIndex((selectedImageIndex - 1 + data.productsImages.length) % data.productsImages.length);
        }
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg: gap-5">
            {data.productsImages.map((image, index) => (
                <img
                    key={index}
                    className="aspect-[524/699] object-cover h-[699px] w-[524px] cursor-pointer"
                    src={image}
                    alt={`Product ${index + 1}`}
                    onClick={() => handleImageClick(index)}
                />
            ))}
            <ImageModal
                isOpen={isModalOpen}
                imageSrc={selectedImageIndex !== null ? data.productsImages[selectedImageIndex] : ''}
                onClose={handleCloseModal}
                onNext={handleNextImage}
                onPrev={handlePrevImage}
            />
        </div>
    );
}

export default Cards;