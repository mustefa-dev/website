import React, { useEffect, useState } from 'react';
import useDeviceInfo from '@/hooks/useDeviceInfo';
import Link from 'next/link';
import axios from 'axios';
import apiHelper from '@/api/api-helper';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AppDrawer from '../AppDrawer';
import styles from '../../styles/Header.module.css';

type HeaderData = {
    logoImage: string;
    name: string;
    primaryColor: string;
};

const Header: React.FC = () => {
    const { isMobile } = useDeviceInfo();
    const [data, setData] = useState<HeaderData | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

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

    const handleMenuClick = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <AppBar position="static" className={styles.appBar} style={{ backgroundColor: data.primaryColor || '#3b3b3b' }}>
                <Toolbar className={styles.toolbar}>
                    <div className={styles.leftSection}>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick} className={styles.menuButton}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className={styles.centerSection}>
                        <div className={styles.logoWrapper}>
                            <Link href="/">
                                <img
                                    src={data.logoImage}
                                    alt="Logo"
                                    className={`${styles.logo} ${isMobile ? styles.logoSmall : ''}`} // Apply small logo size on mobile
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.rightSection}>
                        <Typography variant="h6">
                            {data.name}
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <AppDrawer open={drawerOpen} onClose={handleDrawerClose}
                       backgroundColor={data.primaryColor || '#3b3b3b'}
                       textColor={data.primaryColor=='#0a0a0a'?'#ffffff':'#000'}
            />
        </>
    );
};

export default Header;