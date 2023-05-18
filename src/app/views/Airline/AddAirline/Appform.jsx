import { Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';

import AddAirlineData from './AddAirlineData';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const AppForm = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Airline', path: '/airline' }, { name: 'Add' }]} />
      </Box>
      <SimpleCard title="Add New Airline">
        <AddAirlineData />
      </SimpleCard>
    </Container>
  );
};

export default AppForm;
