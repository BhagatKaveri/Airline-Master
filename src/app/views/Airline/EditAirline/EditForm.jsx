import { Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import EditAirlineData from './EditAirlineData';
const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const EditForm = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Airline', path: '/airline' }, { name: 'Edit Airline' }]}
        />
      </Box>
      <SimpleCard title="Edit Airline">
        <EditAirlineData />
      </SimpleCard>
    </Container>
  );
};

export default EditForm;
