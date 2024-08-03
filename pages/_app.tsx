// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import axios from "axios";
import apiHelper from "@/api/api-helper";
import React from "react";
import { useRouter } from "next/router";
import 'animate.css';

type CompanyData = {
    primaryColor: string;
    // Add other fields if necessary
};

export default function App({ Component, pageProps }: AppProps) {
    const [isSSR, setIsSSR] = useState(true);
    const [primaryColor, setPrimaryColor] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        setIsSSR(false);

        const subdomain = process.env.NEXT_PUBLIC_SUBDOMAIN;
        if (subdomain) {
            axios
                .get(apiHelper.WEBSITE.GET_SUBDOMAIN(subdomain))
                .then((response) => {
                    if (response.status === 201) {
                        router.push('/subscription-expired');
                    } else if (response.status === 200) {
                        const data: CompanyData = response.data;
                        setPrimaryColor(data.primaryColor);
                    } else {
                        console.log('Unexpected status code:', response.status);
                    }
                })
                .catch((error) => {
                    console.error('There was an error fetching the company data!', error);
                });
        }
    }, []);

    if (isSSR) {
        return null;
    }

    return (
        <div style={{ backgroundColor: primaryColor || '' }}>
            <Component {...pageProps} />
        </div>
    );
}