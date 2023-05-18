import { Box, styled, IconButton } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import AirlineTable from './AirlineTable';
import { AirLineContainer } from './styles';
import Button from 'app/components/Button';
import { useNavigate } from 'react-router-dom';
import Flex from 'app/components/Flex';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const Table = () => {
  const navigate = useNavigate();

  return (
    <AirLineContainer>
      <Box className="breadcrumb" style={{ display: 'flex' }}>
        <Flex flex={1}>
          <Breadcrumb
            routeSegments={[{ name: 'Industry Master', path: '/airline' }, { name: 'Airline' }]}
          ></Breadcrumb>
        </Flex>
        <Button
          title="Add New Airline"
          size="large"
          color="primary"
          variant="contained"
          sx={{ textTransform: 'uppercase' }}
          onClick={() => {
            navigate('/AddAirline/Appform');
          }}
        >
          upgrade now
        </Button>
      </Box>

      <SimpleCard>
        <AirlineTable />
      </SimpleCard>
    </AirLineContainer>
  );
};

export default Table;
