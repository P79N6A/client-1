import React, { memo, Fragment } from 'react';
import { AutoComplete, Icon, Input, Tag } from 'antd';
import { connect } from 'react-redux';
import {
  Paper,
  Theme,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  makeStyles,
  Card,
} from '@material-ui/core';

interface IProps {
  appletsAction(type: string, name: string): void;
}

export default memo((props: any) => {
  const { appletsAction } = props;
  /**
   * Styles
   */
  const useStyles = makeStyles((theme: Theme) => ({
    card: {
      boxShadow: theme.shadows[0],
      border: 'none',
    },

    recommend: {
      marginTop: 8,
      height: '60vh',
    },

    search: {
      boxShadow: theme.shadows[0],
      border: 'none',
      position: 'relative',
      marginRight: theme.spacing(2),
      width: '100%',
      marginTop: 10,
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      color: 'inherit',
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      fontSize: 14,
    },
  }));
  const classes = useStyles();
  const onAdd = () => {
    appletsAction('add_ui_data', 'text');
  };
  return (
    <Fragment>
      <List dense={true} style={{ background: 'white', marginBottom: '8px' }}>
        <ListItem button={true} onClick={onAdd}>
          <ListItemAvatar>
            <Avatar
              alt={'example'}
              src={`http://marketing.xiuzan.com/src/images/form/text-2x.png`}
            />
          </ListItemAvatar>
          <ListItemText primary={`横排文本`} />
          <ListItemSecondaryAction>
            <Icon type="right" />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Card className={classes.search}>
        <div className={classes.searchIcon}>
          <Icon type="search" />
        </div>
        <InputBase placeholder="搜索..." className={classes.input} />
      </Card>
      <Card className={classes.card} style={{ marginTop: 8 }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Card>
    </Fragment>
  );
});

