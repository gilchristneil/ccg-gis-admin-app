import React from 'react';
import Layout from '../../components/layouts/SiteLayout';
import ExampleContent from '../../common/ExampleContent';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }

}))
export default function Dashboard() {
  const classes = useStyles();
  return (
    <Layout>
      <ExampleContent />
    </Layout>

  )
}
