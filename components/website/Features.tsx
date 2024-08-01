import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiHelper from '@/api/api-helper';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BuildIcon from '@material-ui/icons/Build';
import LanguageIcon from '@material-ui/icons/Language';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloudIcon from '@material-ui/icons/Cloud';
import CameraIcon from '@material-ui/icons/Camera';
import MapIcon from '@material-ui/icons/Map';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

type Props = {};

type Feature = {
    title: string;
    description: string;
    icon: string;
    featuerColor: string;
};

type CompanyData = {
    features: Feature[];
};

const iconComponents = {
    home: <HomeIcon />,
    star: <StarIcon />,
    account: <AccountCircleIcon />,
    settings: <SettingsIcon />,
    info: <InfoIcon />,
    help: <HelpIcon />,
    contact: <ContactMailIcon />,
    notifications: <NotificationsIcon />,
    favorite: <FavoriteIcon />,
    cart: <ShoppingCartIcon />,
    search: <SearchIcon />,
    lock: <LockIcon />,
    exit: <ExitToAppIcon />,
    build: <BuildIcon />,
    language: <LanguageIcon />,
    visibility: <VisibilityIcon />,
    cloud: <CloudIcon />,
    camera: <CameraIcon />,
    map: <MapIcon />,
    calendar: <CalendarTodayIcon />,
};

function FeaturesComponent({}: Props) {
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

    return (
        <div className="flex  mx-auto">
            {data.features.map((feature, index) => (
                <div key={index} className="feature" style={{ backgroundColor: feature.featuerColor }}>
                    {iconComponents[feature.icon]}
                    <p >{feature.title }</p>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    );
}

export default FeaturesComponent;