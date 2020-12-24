import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import Icon from '@material-ui/core/Icon'
import FavoriteIcon from '@material-ui/icons/Favorite';
import StorageIcon from '@material-ui/icons/Storage';
import { FullscreenExit, WrapText } from '@material-ui/icons';
import { Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  listText: {
    width: 240
  }

}));

const getListIndex = () => {

}

const saveListIndex = () => {

}

//items include name / icon / url passage 
export default function SideBarItems({ items, open }) {
  const classes = useStyles();
  const tabIndex = getListIndex();
  return (
    <List className={classes.root}>
      {items.map((item) => {
        return <Link href={item.url}><ListItem button key={item.id}>

          <ListItemIcon ><StorageIcon /></ListItemIcon>
          <ListItemText primary={item.name} className={classes.listText} />

        </ListItem>
        </Link>
      })}
    </List>
  );
}