import React, { useEffect, useState } from 'react';
import useDeviceInfo from '@/hooks/useDeviceInfo';
import axios from 'axios';
import apiHelper from '@/api/api-helper';
import { IconButton, Typography, Grid, Box } from '@material-ui/core';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, LinkedIn as LinkedInIcon, YouTube as YouTubeIcon } from '@material-ui/icons';

type FooterData = {
    location: string;
    emailContact: string;
    phoneContact: string;
    rights: string;
    description: string;
    socialMediaLinks: string[];
    primaryColor: string;
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

    if (!data) return <Typography variant="body1" align="center">Loading...</Typography>;

    const getSocialMediaIcon = (link: string) => {
        if (link.includes('facebook.com')) return socialMediaIcons.facebook;
        if (link.includes('twitter.com')) return socialMediaIcons.twitter;
        if (link.includes('instagram.com')) return socialMediaIcons.instagram;
        if (link.includes('linkedin.com')) return socialMediaIcons.linkedin;
        if (link.includes('youtube.com')) return socialMediaIcons.youtube;
        return null;
    };

    return (
        <footer
            style={{
                backgroundColor: data.primaryColor || 'black',
                color: 'white',
                padding: '20px 0',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '200px',
            }}
        >
            <Grid container spacing={0} justifyContent="center" alignItems="center">
                <Grid item xs={false} md={4}>
                    {/* Left box - empty */}
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box>
                        <Typography variant="body1" paragraph>
                            {data.description}
                        </Typography>
                        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                            <Typography variant="body2">{data.location}</Typography>
                            <Typography variant="body2">{data.emailContact}</Typography>
                            <Typography variant="body2">{data.phoneContact}</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" flexWrap="wrap" mb={2}>
                            {data.socialMediaLinks.map((link, index) => {
                                const icon = getSocialMediaIcon(link);
                                return icon ? (
                                    <IconButton
                                        key={index}
                                        component="a"
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'white', margin: '0 8px' }}
                                    >
                                        {icon}
                                    </IconButton>
                                ) : null;
                            })}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={false} md={4}>
                    {/* Right box - empty */}
                </Grid>
            </Grid>
            <Box borderTop="1px solid #444" pt={2} mt={4}>
                <Typography variant="body2" color="textSecondary">
                    {data.rights}
                </Typography>
            </Box>
        </footer>
    );
};

export default Footer;
