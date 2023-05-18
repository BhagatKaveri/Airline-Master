import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useNavigate } from 'react-router-dom';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Flex from 'app/components/Flex';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
  Paper,
  Container,
} from '@mui/material';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import axios from 'axios';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const AddAirlineData = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    arln_iata_code: '',
    arln_num_code: '',
    arln_icao_code: '',
    alliance_code: '',
    arln_name: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      arln_iata_code: data.arln_iata_code,
      arln_num_code: data.arln_num_code,
      arln_icao_code: data.arln_icao_code,
      alliance_code: data.alliance_code,
      arln_name: data.arln_name,
    };
    axios
      .post('https://test.iconcile.com/industry-master-api/v1/airline/save', userData)
      .then((response) => {
        console.log(response.status, response.data.token);
      });
    alert('Data Saved Successfully!');
    navigate('/Airline/Table');
  };
  const handleReset = () => {
    setData({
      arln_iata_code: '',
      arln_num_code: '',
      arln_icao_code: '',
      alliance_code: '',
      arln_name: '',
    });
  };
  return (
    <Container maxWidth="lm">
      <ValidatorForm onSubmit={handleSubmit} onReset={handleReset} onError={() => null}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="arln_name"
              label="Airline name"
              onChange={handleChange}
              value={data.arln_name || ''}
              validators={['required', 'maxStringLength: 100']}
              errorMessages={['This field is required', 'Max length 100']}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="arln_iata_code"
              label="Airline IATA Code"
              onChange={handleChange}
              value={data.arln_iata_code || ''}
              validators={['required', 'maxStringLength: 3']}
              errorMessages={['This field is required', 'Max length 3']}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="arln_num_code"
              label="Airline Num Code"
              onChange={handleChange}
              value={data.arln_num_code || ''}
              validators={['required', 'maxStringLength: 3']}
              errorMessages={['This field is required', 'Max length 3']}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="arln_icao_code"
              label="Airline ICAO Code"
              onChange={handleChange}
              value={data.arln_icao_code || ''}
              validators={['maxStringLength: 4']}
              errorMessages={['Max length 4']}
            />
          </Grid>
          <Grid item xs={6} lg={6}>
            <TextField
              type="text"
              name="alliance_code"
              label="Airline Code"
              onChange={handleChange}
              value={data.alliance_code || ''}
              validators={['maxStringLength: 16']}
              errorMessages={['Max length 16']}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button color="primary" variant="contained" type="submit">
              <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Save</Span>
            </Button>
            <Button
              title={'Cancel'}
              variant={'text'}
              onClick={() => {
                navigate('/Airline/Table');
              }}
            >
              <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Cancel</Span>
            </Button>
            <Button title={'Reset'} variant={'text'} type="reset">
              <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Reset</Span>
            </Button>
          </Grid>
        </Grid>
      </ValidatorForm>
    </Container>
  );
};

export default AddAirlineData;
