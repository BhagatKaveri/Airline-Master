import { Box, styled, IconButton } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import PaginationTable from './PaginationTable';
import SimpleTable from './SimpleTable';
import Button from 'app/components/Button';
import { Add } from '@mui/icons-material';
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

const AppTable = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box className="breadcrumb" style={{ display: 'flex' }}>
        <Flex flex={1}>
          <Breadcrumb
            routeSegments={[{ name: 'Industry Master', path: '/material' }, { name: 'Airline' }]}
          ></Breadcrumb>
        </Flex>
        {/* <Button
          title={'Add New Airline'}
          onClick={() => {
            navigate('add');
          }}
        /> */}
        <Button
          title="Add New Airline"
          size="large"
          color="primary"
          variant="contained"
          sx={{ textTransform: 'uppercase' }}
        >
          upgrade now
        </Button>
      </Box>

      {/* <SimpleCard title="Simple Table">
        <SimpleTable />
      </SimpleCard> */}

      <SimpleCard>
        <PaginationTable />
      </SimpleCard>
    </Container>
  );
};

export default AppTable;
