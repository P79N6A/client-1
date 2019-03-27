import React, { memo } from 'react';

import { makeStyles, Theme } from '@material-ui/core';
import TextSelect from '@/package/applet/text/TextSelect';

interface IProps {
  type: string;
}

const ApSelect = memo((props: any) => {
  const { type } = props;

  // styles
  const useStyles = makeStyles((theme: Theme) => ({
    layout: {
      overflow: 'hidden',
    },
  }));
  const classes = useStyles();

  // item data source
  const item: any = {
    text: <TextSelect />,
    picture: <div>picture</div>,
    plugin: <div>plugin</div>,
    button: <div>button</div>,
    commodity: <div>commodity</div>,
  };

  return <div className={classes.layout}>{item[type]}</div>;
});

export default ApSelect;
