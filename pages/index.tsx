import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material';
import Header from '../components/header/index';
import { createTheme } from '@mui/material';

const containerTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 10,
      md: 100,
      lg: 1170,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: '#AEFFDA',
    },
    error: {
      main: '#A83900',
    },
    warning: {
      main: '#F9F871',
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={containerTheme}>
      <Container maxWidth='xl'>
        <Header />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
