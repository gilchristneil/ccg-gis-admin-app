import React from 'react'
import NavBar from '../navigation/NavBar'
import Copyright from '../../common/CopyRight';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflowY: 'hidden',
  },
  content: {
    justifyContent: "center"
  },
  appBarSpacer: theme.mixins.toolbar,
}))

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.content}>
        <div className={classes.appBarSpacer} />
        {children}
        <Copyright />
      </div>

    </div>
  )
}