import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/core/Icon'
import FavoriteIcon from '@material-ui/icons/Favorite';
import StorageIcon from '@material-ui/icons/Storage';
import { FullscreenExit, WrapText } from '@material-ui/icons';


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  tabIcon: {
    flexGrow: 1,
    alignSelf: 'flex-start',
    verticalAlign: 'center'
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabTextOpen: {
    display: 'flex',
    flexWrap: 'nowrap'
  },
  tabTextClosed: {
    display: 'none'
  }
}));

//items include name / icon / url passage 
export default function SideBarItems({ items, open }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    console.log(event);
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Side Bar Menu Options"
      >
        {items.map((item) => {
          return < Tab key={item.id} value={item} label={<Box className={clsx(classes.tabContainer)}>
            <Box flexGrow={1} className={clsx(classes.tabIcon)} ><StorageIcon /></Box>
            <Box className={clsx(open ? classes.tabTextOpen : classes.tabTextClosed)}>
              {item.name}
            </Box>
          </Box>} />
        })}

      </Tabs >


    </div>
  );
}