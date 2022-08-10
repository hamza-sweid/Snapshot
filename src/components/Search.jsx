import { useState } from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const Search = ({ searchClicked }) => {
  const [value, setValue] = useState('');

  const btnClicked = (e) => {
    e.preventDefault();
    searchClicked(value);
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
              variant="contained"
              color="primary"
              disabled={value === ''}
            >
              <SearchIcon />
            </Button>
          ),
        }}
      />
    </form>
  );
};

export default Search;
