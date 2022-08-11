import { useState } from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addGroup } from '../features/searchGroup/searchGroupSlice';

const Search = ({ searchClicked }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const btnClicked = (e) => {
    e.preventDefault();
    searchClicked(value);
  };

  const handleAdd = () => {
    dispatch(addGroup({ label: value, link: value }));
  };

  return (
    <form onSubmit={(e) => btnClicked(e)}>
      <TextField
        id="search-bar"
        className="text-field"
        value={value}
        onInput={(e) => {
          setValue(e.target.value);
        }}
        variant="outlined"
        placeholder="Search..."
        size="small"
        InputProps={{
          endAdornment: (
            <Button
              onClick={(e) => btnClicked(e)}
              size="large"
              variant="text"
              color="primary"
              disabled={value === ''}
            >
              <SearchIcon />
            </Button>
          ),
          startAdornment: (
            <Button
              onClick={handleAdd}
              size="large"
              variant="text"
              color="success"
              disabled={value === ''}
            >
              <AddIcon />
            </Button>
          ),
        }}
      />
    </form>
  );
};

export default Search;
