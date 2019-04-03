import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '../../../constants/theme';

const WithThemeProvider =
  Component =>
    props => (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );

export default WithThemeProvider;

export { ThemeProvider };

