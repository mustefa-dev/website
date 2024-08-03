import React, { useEffect, useState } from 'react';
import useDeviceInfo from '@/hooks/useDeviceInfo';
import Link from 'next/link';
import axios from 'axios';
import apiHelper from '@/api/api-helper';

type Props = {};

type HeaderData = {
    logoUrl: string;
    name: string;
    logoImage: string;
    phoneContact: string;
    primaryColor: string;
};

function Header({}: Props) {
    const { isMobile } = useDeviceInfo();
    const [data, setData] = useState<HeaderData | null>(null);

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
        <div
            className={`w-full h-[70px] fixed top-0 left-0 right-0 z-50 flex justify-between items-center ${isMobile ? 'px-4' : 'px-16'}`}
            style={{ backgroundColor: data.primaryColor || '#3b3b3b' }}
        >
            <p className='text-white text-lg font-bold'>{data.phoneContact}</p>

            <Link href={'/'} className='cursor-pointer h-16 w-12'>
                <img src={data.logoImage} alt="Logo" className={`${isMobile ? 'w-24 h-10' : 'w-32 h-12'}`} />
            </Link>
            <p className='text-white text-lg font-bold'>{data.name}</p>
        </div>
    );
}

export default Header;