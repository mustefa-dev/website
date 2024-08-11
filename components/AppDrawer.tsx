import React, { useCallback } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, makeStyles } from '@material-ui/core';
import { Home as HomeIcon, Description as BlogIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';

type Props = {
    open: boolean;
    onClose: () => void;
    primaryColor: string;
    backgroundColor: string; // New prop for background color
    textColor: string;
};

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: 250,
        backgroundColor: (props: Props) => props.backgroundColor || theme.palette.background.paper, // Use backgroundColor prop
    },
    listItem: {
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
    },
    listItemIcon: {
        minWidth: theme.spacing(5),
    },
    logo: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}));

const AppDrawer: React.FC<Props> = ({ open, onClose, primaryColor, backgroundColor }) => {
    const classes = useStyles({ primaryColor, backgroundColor });

    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    return (
        <Drawer
            backgroundColor={backgroundColor}
            anchor="left"
            open={open}
            onClose={handleClose}
            classes={{ paper: classes.drawerPaper }}
            aria-label="Navigation drawer"
        >
            <div className={classes.logo}>
                {/* Add your logo or header text here */}
                <h3>MyApp</h3>
            </div>
            <Divider />
            <List >
                <ListItem button component={Link} to="/" onClick={handleClose} className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/blog" onClick={handleClose} className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <BlogIcon />
                    </ListItemIcon>
                    <ListItemText primary="Blog" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default AppDrawer;