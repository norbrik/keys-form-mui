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
import Check from '@material-ui/icons/Check';
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
                <Stepper activeStep={3} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <Typography variant='h5' component='h4'>
                  ADVOCATE PROFILE
                </Typography>

                <Grid container alignItems='flex-start' spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Field
                      fullWidth
                      name='Organisation'
                      component={TextField}
                      type='text'
                      label='Organisation'
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Field
                      fullWidth
                      name='Role'
                      component={TextField}
                      type='text'
                      label='Role'
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Field
                      fullWidth
                      required
                      name='firstName'
                      component={TextField}
                      type='text'
                      label='First Name'
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Field
                      fullWidth
                      required
                      name='lastName'
                      component={TextField}
                      type='text'
                      label='Last Name'
                    />
                  </Grid>

                  <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                    <Typography variant='h5' component='h5'>
                      Contact details
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Field
                      fullWidth
                      name='office-phone'
                      component={TextField}
                      label='Office phone'
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Field
                      fullWidth
                      name='mobile-phone'
                      component={TextField}
                      label='Mobile'
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <Field
                      name='email'
                      fullWidth
                      required
                      component={TextField}
                      type='email'
                      label='Email'
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <Field
                      name='Best time and day(s) to contact you '
                      fullWidth
                      required
                      component={TextField}
                      label='Best time and day(s) to contact you '
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <FormControl component='fieldset'>
                      <FormGroup row>
                        <FormLabel component='legend' style={{ width: '100%' }}>
                          Do you have capacity to be a Lead Service Provider (LSP)? *
                        </FormLabel>
                        <FormControlLabel
                          label='Yes'
                          control={
                            <Field
                              name='Aboriginal-2'
                              component={Checkbox}
                              type='checkbox'
                              value='AborYesiginal'
                              required
                            />
                          }
                        />
                        <FormControlLabel
                          label='No'
                          control={
                            <Field
                              name='Aboriginal-2'
                              component={Checkbox}
                              type='checkbox'
                              value='No'
                              required
                            />
                          }
                        />
                        <FormControlLabel
                          label='I want to know more'
                          control={
                            <Field
                              name='Aboriginal-2'
                              component={Checkbox}
                              type='checkbox'
                              value='I want to know more'
                              required
                            />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <Typography>
                      <FormLabel component='legend' style={{ width: '100%' }}>
                        <strong>Referral Criteria (must meet all criteria)</strong>
                      </FormLabel>
                      <ol style={{ paddingLeft: 20 }}>
                        <li>Live in the Western Sydney Local Health District</li>
                        <li>
                          Currently pregnant and/or have children in their care 0-5 years inclusive
                        </li>
                        <li>
                          Not engaged in appropriate services that would be required to meet their
                          needs, or requires a multiagency response
                        </li>
                      </ol>
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <FormControl component='fieldset'>
                      <FormGroup col>
                        <FormLabel component='legend' style={{ width: '100%' }}>
                          <strong>Vulnerability indicators (for parent or child)</strong>{' '}
                          <em>Please complete as able</em>
                        </FormLabel>
                        <FormControlLabel
                          label='Young parent under 25'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Young parent under 25'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Homeless/Housing instability'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Homeless/Housing instability'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Substance use or smoking in pregnancy'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Substance use or smoking in pregnancy'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Involvement in out of home care (OOHC)'
                          control={
                            <Field name='ace' component={Checkbox} type='checkbox' value='' />
                          }
                        />
                        <FormControlLabel
                          label='Domestic and Family Violence'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Domestic and Family Violence'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Past experience of trauma'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Past experience of trauma'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Poor physical and/or mental health'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Poor physical and/or mental health'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Not enrolled in school (compulsory school age)'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Not enrolled in school (compulsory school age)'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Multiple changes of schools – outside normal transition phases'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Multiple changes of schools – outside normal transition phases'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Involvement with criminal justice system'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Involvement with criminal justice system'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Limited appropriate social networks and connections and /or limited family supports'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Limited appropriate social networks and connections and /or limited family supports'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Socioeconomic disadvantage impacting on access to appropriate services'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Socioeconomic disadvantage impacting on access to appropriate services'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Refuge/asylum seeker'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Refuge/asylum seeker'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Concern regarding child safety/wellbeing'
                          control={
                            <Field
                              name='ace'
                              component={Checkbox}
                              type='checkbox'
                              value='Concern regarding child safety/wellbeing'
                            />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={12} style={{ marginBottom: 20 }}>
                    <Field
                      fullWidth
                      name='comments-2'
                      component={TextField}
                      multiline={true}
                      type='text'
                      label='Other comments'
                      rows={6}
                    />
                  </Grid>

                  <Grid item xs={12} md={12} style={{ marginBottom: 40, textAlign: 'center' }}>
                    <label htmlFor='upload-photo'>
                      <input
                        style={{ display: 'none' }}
                        id='upload-photo'
                        name='upload-photo'
                        type='file'
                      />

                      <Button
                        variant='outlined'
                        color='primary'
                        type='button'
                        startIcon={<Add />}
                        size='large'
                        component='span'
                      >
                        Attach Family Consent Form
                      </Button>
                    </label>
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
                        startIcon={<Check />}
                        size='large'
                      >
                        SUBMIT
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
