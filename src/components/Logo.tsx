import React, { memo } from 'react';
import { makeStyles, Theme } from '@material-ui/core';

export default memo(() => {
  // style
  const useStyles = makeStyles((theme: Theme) => ({
    logo: {
      height: 32,
      background: 'rgba(255,255,255,.2)',
      margin: 16,
    },
  }));
  const classes = useStyles();

  return <div className={classes.logo} />;
});
