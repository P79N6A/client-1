import React, { memo } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

interface IProps {
  children?: object;
  history?: History;
  location?: Location;
}

export default memo((props: IProps) => {
  // theme edit => (https://next.material-ui.com/customization/default-theme/)
  // ui theme
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2f54eb',
      },
    },
  });

  // render
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
});
