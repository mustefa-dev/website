import React, { useEffect, useState } from 'react';
import useDeviceInfo from '@/hooks/useDeviceInfo';
import axios from 'axios';
import apiHelper from '@/api/api-helper';

type Props = {};

type FooterData = {
    location: string;
    emailContact: string;
    phoneContact: string;
    rights: string;
    description: string;
};

function Footer({}: Props) {
    const { isMobile } = useDeviceInfo();
    const [data, setData] = useState<FooterData | null>(null);

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

    return (
        <div className='flex-col'>
            <div className={`w-full flex ${isMobile ? 'flex-col' : 'flex-row-reverse'} gap-16 text-white pt-10 text-right bg-black md:h-[18vh] mt-14 px-4 md:px-16 sm:px-16`}>
                <p className={`${isMobile ? 'w-full' : 'w-[500px]'} text-center`}>{data.description}</p>
                <div className='flex flex-col gap-2'>
                    <p>{data.location}</p>
                    <p>{data.emailContact}</p>
                    <p>{data.phoneContact}</p>
                </div>
            </div>
            <div className='bg-gray-500 text-right px-16'>
                <span>{data.rights}</span>
            </div>
        </div>
    );
}

export default Footer;