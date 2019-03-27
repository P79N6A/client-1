import React, { memo, Fragment } from 'react';
import { size, xor } from 'lodash';
import { connect } from 'react-redux';
import { Empty, Icon } from 'antd';
import { HuePicker } from 'react-color';
import { Paper, Theme, Avatar, Fab, CardHeader, makeStyles, Card } from '@material-ui/core';

export default memo((props: any) => {
  // styles
  const useStyles = makeStyles((theme: Theme) => ({
    theme_card: {
      boxShadow: theme.shadows[0],
      padding: '8px 16px',
    },
    nav_card: {
      boxShadow: theme.shadows[0],
      padding: '8px 16px',
      margin: '8px 0',
    },
    page_card: {
      boxShadow: theme.shadows[0],
      padding: '8px 16px',
    },
    add: {
      alignCenter: 'center',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      marginTop: -15,
    },
  }));
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.theme_card}>
        <CardHeader subheader="主题色" />
        <div style={{ margin: 'auto' }}>
          <HuePicker width={'300px'} />
        </div>
      </Card>
      <Card className={classes.nav_card}>
        <CardHeader
          action={
            <Fab color="primary" aria-label="Add" size={'small'}>
              <Icon type="plus" />
            </Fab>
          }
          subheader="导航页管理"
        />
        <Empty style={{ paddingTop: 30 }} description={<span />} />
      </Card>
      <Card className={classes.page_card}>
        <CardHeader
          action={
            <Fab color="primary" aria-label="Add" size={'small'}>
              <Icon type="plus" />
            </Fab>
          }
          subheader="附属页管理"
        />
        <Empty style={{ paddingTop: 30 }} description={<span />} />
      </Card>
    </Fragment>
  );
});
