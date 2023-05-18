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
} from '@mui/material';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const EditAirline = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const { arln_iata_code, arln_num_code, arln_icao_code, alliance_code, arln_name } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={2}>
          {/* <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}> */}
          <Grid item lg={12}>
            <TextField
              type="text"
              name=" arln_name,"
              id="standard-basic"
              value={arln_name || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label=" Airline name "
              validators={['required', 'minStringLength: 1', 'maxStringLength: 255']}
            />
          </Grid>
          <Grid item lg={6}>
            <TextField
              type="text"
              name="arln_iata_code"
              label="Airline IATA Code"
              onChange={handleChange}
              value={arln_iata_code || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Grid>
          <Grid item lg={6}>
            <TextField
              type="text"
              name="arln_num_code"
              label="Airline Num Code"
              onChange={handleChange}
              value={arln_num_code || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Grid>
          <Grid item lg={6}>
            <TextField
              type="text"
              name="arln_icao_code"
              label="Airline ICOA Code"
              onChange={handleChange}
              value={arln_icao_code || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Grid>
          <Grid item lg={6}>
            <TextField
              type="text"
              name="alliance_code"
              label="Airline Code"
              onChange={handleChange}
              value={alliance_code || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default EditAirline;
