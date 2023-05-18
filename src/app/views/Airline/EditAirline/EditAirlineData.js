import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
  Container,
} from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const EditAirlineData = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState([0]);

  const [data, setData] = useState({
    arln_iata_code: '',
    arln_num_code: '',
    arln_icao_code: '',
    alliance_code: '',
    arln_name: '',
  });
  const [state, setState] = useState({
    arln_iata_code: '',
    arln_num_code: '',
    arln_icao_code: '',
    alliance_code: '',
    arln_name: '',
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  let { id } = useParams();
  console.log(id);
  const handleReset = () => {
    setData({
      arln_iata_code: '',
      arln_num_code: '',
      arln_icao_code: '',
      alliance_code: '',
      arln_name: '',
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://test.iconcile.com/industry-master-api/v1/airline/data?arln_num_code=${id}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      arln_iata_code: state.arln_iata_code,
      arln_num_code: state.arln_num_code,
      arln_icao_code: state.arln_icao_code,
      alliance_code: state.alliance_code,
      arln_name: state.arln_name,
    };
    //const payload = [{ arln_num_code: id }];
    axios
      .post('https://test.iconcile.com/industry-master-api/v1/airline/save', userData, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response.status, response.data.token);
      });
    alert('Data Updated Sucessfully!');
    navigate('/Airline/Table');
  };

  useEffect(() => {
    setState({
      arln_name: data[0]?.arln_name,
      arln_iata_code: data[0]?.arln_iata_code,
      arln_num_code: data[0]?.arln_num_code,
      arln_icao_code: data[0]?.arln_icao_code,
      alliance_code: data[0]?.alliance_code,
    });
  }, [data]);
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
              disabled
              value={state.arln_name || ''}
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
              value={state.arln_iata_code || ''}
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
              disabled
              value={state.arln_num_code || ''}
              validators={['required', 'maxStringLength: 3']}
              errorMessages={['This field is required', 'Max length 3']}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="arln_icao_code"
              label="Airline ICOA Code"
              onChange={handleChange}
              value={state.arln_icao_code || ''}
              validators={['maxStringLength: 4']}
              errorMessages={['Max length 4']}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="alliance_code"
              label="Airline Code"
              onChange={handleChange}
              value={state.alliance_code || ''}
              validators={['maxStringLength: 16']}
              errorMessages={['Max length 16']}
            />
          </Grid>
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
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
      </ValidatorForm>
    </Container>
  );
};

export default EditAirlineData;
