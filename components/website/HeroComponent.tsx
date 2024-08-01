import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiHelper from '@/api/api-helper';

type Props = {};

type HeroData = {
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    secondaryColor: string;

};

function HeroComponent({}: Props) {
    const [data, setData] = useState<HeroData | null>(null);

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

    const hex = data.secondaryColor||'#efefef';

    return (
        <div className='h-[100vh] bg-fixed bg-center bg-cover' style={{ backgroundImage: `url(${data.heroImage})` }}>
            <div className='flex flex-col justify-center items-center mt-10 h-full' style={{ background: `${hex}70` }}>
                <h1 className='text-5xl font-bold text-center'>{data.heroTitle}</h1>
                <p className='text-xl'>{data.heroDescription}</p>
                <button className=' bg-black text-white p-3 px-7 rounded-md my-2'>Contact</button>
            </div>
        </div>
    );
}

export default HeroComponent;