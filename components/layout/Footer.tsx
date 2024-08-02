import React, { useEffect, useState } from 'react';
import useDeviceInfo from '@/hooks/useDeviceInfo';
import axios from 'axios';
import apiHelper from '@/api/api-helper';
import { IconButton } from '@material-ui/core';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, LinkedIn as LinkedInIcon, YouTube as YouTubeIcon } from '@material-ui/icons';

type FooterData = {
    location: string;
    emailContact: string;
    phoneContact: string;
    rights: string;
    description: string;
    socialMediaLinks: string[];
};

const socialMediaIcons = {
    facebook: <FacebookIcon />,
    twitter: <TwitterIcon />,
    instagram: <InstagramIcon />,
    linkedin: <LinkedInIcon />,
    youtube: <YouTubeIcon />,
};

const Footer: React.FC = () => {
    const { isMobile } = useDeviceInfo();
    const [data, setData] = useState<FooterData | null>(null);

    useEffect(() => {
        const subdomain = process.env.NEXT_PUBLIC_SUBDOMAIN;
        if (subdomain) {
            axios
                .get(apiHelper.WEBSITE.GET_SUBDOMAIN(subdomain))
                .then((response) => setData(response.data))
                .catch((error) => console.error('There was an error!', error));
        }
    }, []);

    if (!data) return <div>Loading...</div>;

    const getSocialMediaIcon = (link: string) => {
        if (link.includes('facebook.com')) return socialMediaIcons.facebook;
        if (link.includes('twitter.com')) return socialMediaIcons.twitter;
        if (link.includes('instagram.com')) return socialMediaIcons.instagram;
        if (link.includes('linkedin.com')) return socialMediaIcons.linkedin;
        if (link.includes('youtube.com')) return socialMediaIcons.youtube;
        return null;
    };

    return (
        <footer className='flex flex-col items-center bg-black text-white mt-14 py-10'>
            <div className={`w-full flex ${isMobile ? 'flex-col' : 'flex-row-reverse'} gap-16 px-4 md:px-16 sm:px-16`}>
                <p className={`${isMobile ? 'w-full' : 'w-[500px]'} text-center mb-6`}>{data.description}</p>
                <div className='flex flex-col gap-2 text-center'>
                    <p>{data.location}</p>
                    <p>{data.emailContact}</p>
                    <p>{data.phoneContact}</p>
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-6">
                {data.socialMediaLinks.map((link, index) => {
                    const icon = getSocialMediaIcon(link);
                    return icon ? (
                        <IconButton key={index} component="a" href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                            {icon}
                        </IconButton>
                    ) : null;
                })}
            </div>
            <div className="w-full flex justify-center border-t border-gray-700 mt-6 pt-4">
                <p className="text-center text-gray-400">{data.rights}</p>
            </div>
        </footer>
    );
}

export default Footer;