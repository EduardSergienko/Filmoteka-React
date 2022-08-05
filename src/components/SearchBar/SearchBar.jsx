import { useState } from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
export function SearchBar({ onSubmit, value }) {
  const [serachBarQuery, setSerachBarQuery] = useState(value);

  const handleInputType = e => {
    setSerachBarQuery(e.currentTarget.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (serachBarQuery.trim() !== '') {
      onSubmit(serachBarQuery);
    } else {
      return Notiflix.Notify.failure(
        'Sorry, there are no movies matching your search query. Please try again.'
      );
    }
  };
  return (
    <form className={styles.searchbar} onSubmit={handleFormSubmit}>
      <Input
        placeholder="Searching movie..."
        value={serachBarQuery}
        type="text"
        onChange={handleInputType}
        sx={{
          width: 300,
        }}
      />
      <Button
        variant="text"
        endIcon={
          <SearchIcon
            sx={{
              fill: 'rgb(214, 49, 49)',
            }}
          />
        }
        type="submit"
        sx={{
          '& 	.MuiButton-endIcon': {
            margin: 0,
          },
        }}
      ></Button>
    </form>
  );
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
