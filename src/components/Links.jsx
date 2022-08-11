import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Item } from '../helpers/Item';
import { useSelector, useDispatch } from 'react-redux';
import { deleteGroup } from '../features/searchGroup/searchGroupSlice';

const Links = () => {
  const { groups } = useSelector((state) => state.searchGroups);
  const dispatch = useDispatch();

  const handleDelete = (groupIndex) => {
    dispatch(deleteGroup(groupIndex));
  };

  return (
    <Grid item container sx={{ my: 4, px: 5 }}>
      {groups.map((item, i) => {
        return (
          <Grid key={i} item sm={3} xs={12} sx={{ px: 1, pt: 1 }}>
            <Item className="btn-link">
              <NavLink to={`/${item.link}`}>
                <Button variant="contained" fullWidth size="small" color="info">
                  {item.label}
                </Button>
              </NavLink>
              <DeleteIcon color="error" onClick={() => handleDelete(i)} />
            </Item>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Links;
