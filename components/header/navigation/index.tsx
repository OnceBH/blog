import { styled } from '@mui/material/styles';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Typography } from '@mui/material';

const StyledNavigationWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledLogoTitle = styled(() => <Typography>Hello</Typography>)(() => ({
  display: 'inline-block',
}));

const StyledLogo = styled(() => (
  <div>
    <AutoGraphIcon color='primary' />
    <StyledLogoTitle>hello</StyledLogoTitle>
  </div>
))(() => ({}));

const Navigation = () => {
  return (
    <StyledNavigationWrapper>
      <StyledLogo />
      <div>dd</div>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
