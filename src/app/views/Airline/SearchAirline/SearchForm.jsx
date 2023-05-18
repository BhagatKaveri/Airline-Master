import { Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import SearchAirline from './SearchAirline';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const SearchForm = () => {
  return (
    <Container>
      <SimpleCard>
        <SearchAirline />
      </SimpleCard>
    </Container>
  );
};

export default SearchForm;
