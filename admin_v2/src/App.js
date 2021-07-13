import React from 'react';
import {ThemeProvider} from '@material-ui/core';
import {useSelector} from 'react-redux';
import theme from '../src/theme';
import Routes from './routes';
import GlobalStyles from './components/global-styles';

const App = () => {
  const isAuth = useSelector(state => state.Login.isAuth);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes isAuth={isAuth} />
    </ThemeProvider>
  );
}

export default App;
