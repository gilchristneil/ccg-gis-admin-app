import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import SideBarItems from './SideBarItems';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProfileButton from './ProfileButton';



const SideBarItemsStatic = [
  {
    "id": "layerAuth_Dasboard",
    "name": "Dashboard",
    "icon": "Dashboard",
    "aria-label": "A wide picture of information of the dashboard",
    "url": "/layerauth/dashboard"
  },
  {
    "id": "layerAuth_Request",
    "name": "Layer Request Authourization Form",
    "icon": "ShoppingCart",
    "aria-label": "Form to fill to request access to a layer",
    "url": "/layerauth/layerauthrequest"
  },
  {
    "id": "layerAuth_History",
    "name": "Historic Requests",
    "icon": "BarChart",
    "aria-label": "View past layer authourization requests",
    "url": "/layerauth/history"
  },
  {
    "id": "layerAuth_Admin",
    "name": "Admin Section",
    "icon": "Layers",
    "aria-label": "Section to allow admins to change access",
    "url": "/layerauth/admin"
  },
]



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: 200,
  },
  menuButton: {
    marginRight: 36,
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    top: 64,
    zIndex: 100,
    overflowX: 'hidden',
    position: 'relative',
    height: '100vh',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    top: 64,
    zIndex: 100,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  profileButton: {

  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [headValue, setHeadValue] = React.useState(2);
  const handleHeaderTabChange = (event, newValue) => {
    setHeadValue(newValue);
  };
  const handleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer and close draware"
            onClick={handleDrawer}
            className={clsx(classes.menuButton)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <Box flexGrow={3}>
            <Tabs
              value={headValue}
              indicatorColor="inherit"
              textColor="inherit"
              onChange={handleHeaderTabChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Layer Auth"></Tab>
              <Tab label="GeoEvent API"></Tab>
              <Tab label="Portal"></Tab>
            </Tabs>
          </Box>
          <ProfileButton />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <Divider />
        <SideBarItems items={SideBarItemsStatic} open={open} />
      </Drawer>
    </div>
  );
}