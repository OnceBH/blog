import Navigation from './navigation/index';
import { Box } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        height: '2.0625rem',
        maxWidth: 'lg',
        margin: '2.215rem auto 0',
        padding: '0 1.5rem ',
      }}
    >
      <Navigation />
    </Box>
  );
};

export default Header;
