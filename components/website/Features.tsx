import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Home as HomeIcon, Star as StarIcon, AccountCircle as AccountCircleIcon, Settings as SettingsIcon,
    Info as InfoIcon, Help as HelpIcon, ContactMail as ContactMailIcon, Notifications as NotificationsIcon,
    Favorite as FavoriteIcon, ShoppingCart as ShoppingCartIcon, Search as SearchIcon, Lock as LockIcon,
    ExitToApp as ExitToAppIcon, Build as BuildIcon, Language as LanguageIcon, Visibility as VisibilityIcon,
    Cloud as CloudIcon, Camera as CameraIcon, Map as MapIcon, CalendarToday as CalendarTodayIcon
} from '@material-ui/icons';
import apiHelper from "@/api/api-helper";

type Feature = {
    title: string;
    description: string;
    icon: string;
    featuerColor: string;
};

type CompanyData = {
    features: Feature[];
};
const subdomain = process.env.NEXT_PUBLIC_SUBDOMAIN;
if (subdomain) {
    axios.get(apiHelper.WEBSITE.GET_SUBDOMAIN(subdomain))
        .then(response => setData(response.data))
        .catch(error => console.error('There was an error!', error));
}
const iconComponents: { [key: string]: JSX.Element } = {
    home: <HomeIcon />, star: <StarIcon />, account: <AccountCircleIcon />, settings: <SettingsIcon />,
    info: <InfoIcon />, help: <HelpIcon />, contact: <ContactMailIcon />, notifications: <NotificationsIcon />,
    favorite: <FavoriteIcon />, cart: <ShoppingCartIcon />, search: <SearchIcon />, lock: <LockIcon />,
    exit: <ExitToAppIcon />, build: <BuildIcon />, language: <LanguageIcon />, visibility: <VisibilityIcon />,
    cloud: <CloudIcon />, camera: <CameraIcon />, map: <MapIcon />, calendar: <CalendarTodayIcon />
};

const FeaturesComponent: React.FC = () => {
    const [data, setData] = useState<CompanyData | null>(null);

    useEffect(() => {
        const subdomain = process.env.NEXT_PUBLIC_SUBDOMAIN;
        if (subdomain) {
            axios.get(apiHelper.WEBSITE.GET_SUBDOMAIN(subdomain))
                .then(response => setData(response.data))
                .catch(error => console.error('There was an error!', error));
        }
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="flex mx-auto">
            {data.features.map((feature, index) => (
                <div key={index} className="feature">
                    <div className="icon-text-container" style={{ color: feature.featuerColor }}>
                        {iconComponents[feature.icon]}
                        <p>{feature.title}</p>
                    </div>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FeaturesComponent;