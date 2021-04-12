import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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

const helpTextStyle = {
  color: 'rgba(0, 0, 0, 0.54)',
  margin: 0,
  fontSize: '0.75rem',
  marginTop: 3,
  textAlign: 'left',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  lineHeight: 1.66,
  letterSpacing: '0.03333em',
  marginLeft: 14,
  marginRight: 14,
};

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
  return ['ABOUT THE FAMILY', 'NEEDS AND STRENGTHS', 'SUPPORT AND SERVICES', 'ADVOCATE PROFILE'];
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

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 700 }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Form
          onSubmit={onSubmit}
          initialValues={{ employed: true, stooge: 'larry' }}
          validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 16, boxShadow: 'none' }}>
                <Stepper activeStep={1} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>

                <Grid container alignItems='flex-start' spacing={2}>
                  <Grid item xs={12} md={12} style={{ marginBottom: 15 }}>
                    <div align='center'>
                      <img
                        src='http://dev-wentwest.norbrik.com.au/wp-content/uploads/2021/03/fam-n.png'
                        height={100}
                      />
                    </div>

                    <Grid item xs={12} md={12}>
                      <Field
                        fullWidth
                        name='fam-needs'
                        component={TextField}
                        multiline={true}
                        type='text'
                        label='Our family needs are…, We are looking for…, We are struggling with…'
                        rows={6}
                        required
                      />
                      <p style={helpTextStyle}>E.g. of family needs</p>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Field
                        fullWidth
                        name='comments-2'
                        component={TextField}
                        multiline={true}
                        type='text'
                        label='Advocate’s additional comments'
                        rows={6}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12} style={{ marginBottom: 15 }}>
                    <div align='center'>
                      <img
                        src='http://dev-wentwest.norbrik.com.au/wp-content/uploads/2021/03/fam-s.png'
                        height={100}
                      />
                    </div>

                    <Grid item xs={12} md={12}>
                      <Field
                        fullWidth
                        name='strengths'
                        component={TextField}
                        multiline
                        type='text'
                        label='Our family strengths are'
                        rows={6}
                      />
                      <p style={helpTextStyle}>E.g. of family strengths</p>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Field
                        fullWidth
                        name='comments-1'
                        component={TextField}
                        multiline={true}
                        type='text'
                        label='Advocate’s additional comments'
                        rows={6}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
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
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
