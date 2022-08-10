import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Item } from '../helpers/Item';
import { useState } from 'react';

const Links = () => {
  const [items] = useState([
    { label: 'People', link: 'people' },
    { label: 'Football', link: 'football' },
    { label: 'Food', link: 'food' },
    { label: 'Beach', link: 'beach' },
  ]);
  return (
    <Grid item container sx={{ my: 4, px: 5 }}>
      {items.map((item, i) => {
        return (
          <Grid key={i} item sm={3} xs={12} sx={{ px: 1, pt: 1 }}>
            <Item>
              <NavLink to={`/${item.link}`}>
                <Button variant="contained" fullWidth size="small" color="info">
                  {item.label}
                </Button>
              </NavLink>
            </Item>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Links;
