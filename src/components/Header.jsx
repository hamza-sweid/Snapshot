import { Typography } from '@mui/material';
import Search from './Search';
import Links from './Links';

const Header = ({ searchClicked }) => {
  return (
    <div>
      <Typography sx={{ mb: 2 }} variant="h2" component="h2">
        Snap Shot
      </Typography>
      <Search searchClicked={searchClicked} />
      <Links />
    </div>
  );
};

export default Header;
