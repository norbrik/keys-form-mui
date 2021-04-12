import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import clsx from 'clsx';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
  TextField as MTextField,
  ThemeProvider,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Add from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import StepConnector from '@material-ui/core/StepConnector';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import { createMuiTheme } from '@material-ui/core/styles';

import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#EB5846',
      main: '#f1624f',
      dark: '#9F3B2F',
      contrastText: '#fff',
    },
    secondary: {
      light: '#EB5846',
      main: '#f1624f',
      dark: '#9F3B2F',
      contrastText: '#F9B220',
    },
  },
});

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  console.log('form submitted');
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

function getSteps() {
  return ['ABOUT THE FAMILY', 'STRENGTHS AND NEEDS', 'SUPPORT AND SERVICES', 'ADVOCATE PROFILE'];
}

function App() {
  const steps = getSteps();

  const [adultExpanded, setExpanded] = React.useState('panel1');

  const [showForm, setForm] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Provider_options = [
    { title: 'Provider 1', contactDetails: 1994 },
    { title: 'Provider 2', contactDetails: 1994 },
    { title: 'Provider 3', contactDetails: 1994 },
    { title: 'Provider 4', contactDetails: 1994 },
    { title: 'Provider 5', contactDetails: 1994 },
    { title: 'Provider 6', contactDetails: 1994 },
    { title: 'Provider 7', contactDetails: 1994 },
  ];

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 700 }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <React.Fragment>
          <Form
            onSubmit={onSubmit}
            initialValues={{ employed: true, stooge: 'larry' }}
            validate={validate}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Paper style={{ padding: 16, boxShadow: 'none' }}>
                  <Stepper activeStep={2} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>

                  <div align='center'>
                    <img
                      src='http://dev-wentwest.norbrik.com.au/wp-content/uploads/2021/03/serv.png'
                      width={400}
                    />
                  </div>

                  <Grid container alignItems='flex-start' spacing={2}>
                    <Accordion
                      expanded={adultExpanded === 'panel1'}
                      onChange={handleChange('panel1')}
                      style={{ width: '100%' }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1d-content'
                        id='panel1d-header'
                      >
                        <Typography variant='h5' component='h4'>
                          Support or service 1:
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container alignItems='flex-start' spacing={2}>
                          <Grid item xs={12} md={12}>
                            <Field
                              fullWidth
                              name='Provided-to'
                              component={TextField}
                              type='text'
                              label='Provided to'
                            />
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <Field
                              fullWidth
                              name='comments-2'
                              component={TextField}
                              multiline={true}
                              type='text'
                              label='What is the support or service?'
                              rows={6}
                            />
                          </Grid>

                          <Grid item xs={12} md={12}>
                            <Field
                              fullWidth
                              name='State'
                              component={Select}
                              label='Who is the provider?'
                              formControlProps={{ fullWidth: true }}
                            >
                              <MenuItem value='NSW'>provider 1</MenuItem>
                              <MenuItem value='NSW'>provider 2</MenuItem>
                              <MenuItem value='NSW'>provider 3</MenuItem>
                              <MenuItem value='NSW'>provider 4</MenuItem>
                              <MenuItem value='NSW'>provider 5</MenuItem>
                              <MenuItem value='NSW'>Other</MenuItem>
                            </Field>
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>

                    <Grid item xs={12} md={12} style={{ marginTop: 10, marginBottom: 20 }}>
                      <div align='middle'>
                        <Button
                          variant='outlined'
                          color='primary'
                          type='button'
                          disabled={submitting}
                          startIcon={<Add />}
                        >
                          Add support or service
                        </Button>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={12} style={{ marginTop: 40 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                          variant='contained'
                          color='primary'
                          type='button'
                          disabled={submitting}
                          startIcon={<ChevronLeft />}
                          size='large'
                        >
                          Previous step
                        </Button>
                        <Button
                          variant='contained'
                          color='primary'
                          type='button'
                          disabled={submitting}
                          endIcon={<ChevronRight />}
                          size='large'
                        >
                          Next step
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              </form>
            )}
          />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>
              {'Are you sure you want to remove this entry?'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                This action cannot be undone
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='default'>
                Cancel
              </Button>
              <Button onClick={handleClose} variant='contained' color='primary' autoFocus>
                Remove
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
