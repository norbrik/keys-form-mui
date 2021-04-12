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
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRight from '@material-ui/icons/ChevronRight';
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
  return ['ABOUT THE FAMILY', 'STRENGTHS AND NEEDS', 'SUPPORT AND SERVICES', 'ADVOCATE PROFILE'];
}

function App() {
  const steps = getSteps();

  const [adultExpanded, setExpanded] = React.useState('panel3');

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

        {!showForm ? (
          <Form
            onSubmit={onSubmit}
            initialValues={{ employed: true, stooge: 'larry' }}
            validate={validate}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Paper style={{ padding: '20px 30px', boxShadow: 'none' }}>
                  <Grid container alignItems='flex-start' spacing={2}>
                    <Grid item xs={12} md={12}>
                      <Typography
                        variant='h6'
                        component='h6'
                        style={{
                          marginBottom: 20,
                          fontSize: 28,
                        }}
                      >
                        The KEYS Network Family Referral Form
                      </Typography>

                      <Typography style={{ fontSize: 14 }}>
                        <ul style={{ textAlign: 'left', paddingLeft: 20, marginBottom: 30 }}>
                          <li style={{ marginBottom: 5 }}>
                            Prior to making a referral, please check family meet KEYS Eligibility
                            Criteria{' '}
                            <a href='page-link' target='_blank'>
                              link TBD
                            </a>
                          </li>
                          <li style={{ marginBottom: 5 }}>
                            If unable to complete the referral online, Referral Forms are available
                            for download {' '}
                            <a href='page-link' target='_blank'>
                              link TBD
                            </a>
                          </li>
                          <li style={{ marginBottom: 5 }}>
                            Completing a referral form should take approximately 10 -15 minutes
                          </li>
                          <li style={{ marginBottom: 5 }}>
                            Referrals should be completed together with the family wherever
                            possible. 
                          </li>
                          <li style={{ marginBottom: 5 }}>
                            Prior to submitting the referral form, you should ensure the family
                            provides written consent for engagement of the KEYS Network and attach a
                            completed Family Consent Form with the referral {' '}
                            <a href='page-link' target='_blank'>
                              link TBD
                            </a>
                          </li>
                          <li style={{ marginBottom: 5 }}>
                            Families should be provided with a copy of the completed
                            Family Referral Form and Consent Form if requested.
                          </li>
                          <li style={{ marginBottom: 5 }}>
                            The KEYS Network is not a crisis response agency. However, if you have a
                            family with an urgent service need please contact the KEYS Helpdesk
                            prior to completing the referral on (02) 8811 7145.
                          </li>
                        </ul>
                        <p>
                          If you have any questions about referring a family, please contact the
                          KEYS Network team:
                        </p>
                        <p>
                          Phone:
                          <span style={{ marginLeft: 30 }}>02 8811 7145</span>
                          <br />
                          Email:{' '}
                          <span style={{ marginLeft: 35 }}>
                            <a href='page-link' target='_blank'>
                              KEYSNetworkWS@wentwest.com.au
                            </a>
                          </span>
                        </p>
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={12} style={{ marginTop: 20, marginBottom: 20 }}>
                      <div align='center'>
                        <Button
                          variant='contained'
                          color='primary'
                          type='button'
                          disabled={submitting}
                          // endIcon={<ChevronRight />}
                          size='large'
                          onClick={() => setForm(true)}
                        >
                          begin form
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              </form>
            )}
          />
        ) : (
          <React.Fragment>
            <Form
              onSubmit={onSubmit}
              initialValues={{ employed: true, stooge: 'larry' }}
              validate={validate}
              render={({ handleSubmit, reset, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <Paper style={{ padding: 16, boxShadow: 'none' }}>
                    <Stepper activeStep={0} alternativeLabel>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>

                    <div align='center'>
                      <img
                        src='http://dev-wentwest.norbrik.com.au/wp-content/uploads/2021/03/af.png'
                        style={{
                          height: 80,
                          marginBottom: -10,
                        }}
                      />
                      <div
                        style={{
                          fontSize: 24,

                          fontWeight: 800,
                          color: '#0070c0',
                        }}
                      >
                        ABOUT THE FAMILY
                      </div>
                    </div>

                    <Grid container alignItems='flex-start' spacing={2}>
                      <Grid item xs={12} md={12} style={{ marginBottom: 15 }}>
                        <FormControl component='fieldset'>
                          <FormGroup col>
                            <FormControlLabel
                              label='Eligibility criteria met'
                              control={
                                <Field
                                  name='sauces'
                                  component={Checkbox}
                                  type='checkbox'
                                  value='Eligibility criteria met'
                                />
                              }
                            />
                            <FormControlLabel
                              label='Family agrees to be engaged in KEYS'
                              control={
                                <Field
                                  name='sauces'
                                  component={Checkbox}
                                  type='checkbox'
                                  value='Family agrees to be engaged in KEYS'
                                />
                              }
                            />
                          </FormGroup>
                        </FormControl>
                      </Grid>

                      <Accordion
                        expanded={adultExpanded === 'panel1'}
                        onChange={handleChange('panel1')}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls='panel1d-content'
                          id='panel1d-header'
                        >
                          <Typography variant='h5' component='h4'>
                            Adult 1:
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container alignItems='flex-start' spacing={2}>
                            <Grid item xs={12} md={12}>
                              <FormControl component='fieldset'>
                                <FormLabel>
                                  <Typography variant='h5' component='h5'>
                                    Primary *
                                  </Typography>
                                </FormLabel>
                                <RadioGroup row>
                                  <FormControlLabel
                                    label='Parent'
                                    control={
                                      <Field
                                        name='primary'
                                        component={Radio}
                                        type='radio'
                                        value='parent'
                                        required
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Carer'
                                    control={
                                      <Field
                                        name='primary'
                                        component={Radio}
                                        type='radio'
                                        value='carer'
                                        required
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Guardian'
                                    control={
                                      <Field
                                        name='primary'
                                        component={Radio}
                                        type='radio'
                                        value='guardian'
                                        required
                                      />
                                    }
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <Field
                                fullWidth
                                name='Role in the family '
                                component={TextField}
                                type='text'
                                label='Role in the family'
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
                            <Grid item xs={12} md={6}>
                              <FormControl component='fieldset'>
                                <FormLabel component='legend'>Gender *</FormLabel>
                                <RadioGroup row>
                                  <FormControlLabel
                                    label='Female'
                                    control={
                                      <Field
                                        name='gender'
                                        component={Radio}
                                        type='radio'
                                        value='Female'
                                        required
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Male'
                                    control={
                                      <Field
                                        name='gender'
                                        component={Radio}
                                        type='radio'
                                        value='Male'
                                        required
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Other'
                                    control={
                                      <Field
                                        name='gender'
                                        component={Radio}
                                        type='radio'
                                        value='Other'
                                        required
                                      />
                                    }
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <MTextField
                                fullWidth
                                id='date'
                                label='Date of birth'
                                type='date'
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                required
                              />
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <FormControl component='fieldset'>
                                <FormGroup col>
                                  <FormLabel component='legend'>
                                    Do you identify as Aboriginal and/or Torres Strait Islander? *
                                  </FormLabel>
                                  <FormControlLabel
                                    label='Aboriginal'
                                    control={
                                      <Field
                                        name='Aboriginal'
                                        component={Radio}
                                        type='checkbox'
                                        value='Aboriginal'
                                        required
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Torres Strait Islander'
                                    control={
                                      <Field
                                        name='Aboriginal'
                                        component={Radio}
                                        type='checkbox'
                                        value='Torres Strait Islander'
                                        required
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Aboriginal and Torres Strait Islander'
                                    control={
                                      <Field
                                        name='Aboriginal'
                                        component={Radio}
                                        type='checkbox'
                                        value='Aboriginal and Torres Strait Islander'
                                        required
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Prefer not to say'
                                    control={
                                      <Field
                                        name='Aboriginal'
                                        component={Radio}
                                        type='checkbox'
                                        value='Prefer not to say'
                                        required
                                      />
                                    }
                                  />
                                </FormGroup>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Field
                                fullWidth
                                name='Cultural identity'
                                component={TextField}
                                type='text'
                                label='Cultural identity'
                                required
                              />
                              <p style={helpTextStyle}>E.g. of cultural identities</p>
                            </Grid>
                            <Grid item xs={12} md={8}>
                              <Field
                                fullWidth
                                name='Language spoken at home'
                                component={TextField}
                                type='text'
                                label='Language spoken at home'
                                required
                              />
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <FormControlLabel
                                label='Needs an interpreter'
                                control={
                                  <Field
                                    name='Needs an interpreter'
                                    component={Checkbox}
                                    type='checkbox'
                                  />
                                }
                              />
                            </Grid>
                            <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                              <Typography variant='h5' component='h5' style={{ fontSize: 20 }}>
                                Contact details
                              </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <Field
                                fullWidth
                                name='phone'
                                component={TextField}
                                label='Contact phone'
                                required
                              />
                            </Grid>
                            <Grid item xs={12} md={8}>
                              <Field
                                name='email'
                                fullWidth
                                component={TextField}
                                type='email'
                                label='Email'
                              />
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <FormControlLabel
                                label='Email a copy of this form to this email address.'
                                control={
                                  <Field
                                    name='Email a copy of this form to this email address.'
                                    component={Checkbox}
                                    type='checkbox'
                                  />
                                }
                              />
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Field
                                fullWidth
                                name='address'
                                component={TextField}
                                label='Mailing address'
                              />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Field
                                fullWidth
                                name='Suburb'
                                component={TextField}
                                label='Suburb'
                                required
                              />
                            </Grid>
                            <Grid item xs={12} md={3}>
                              <Field
                                fullWidth
                                name='State'
                                component={Select}
                                label='Select a State'
                                formControlProps={{ fullWidth: true }}
                                required
                              >
                                <MenuItem value='NSW'>NSW</MenuItem>
                                <MenuItem value='VIC'>VIC</MenuItem>
                                <MenuItem value='SA'>SA</MenuItem>
                                <MenuItem value='WA'>WA</MenuItem>
                                <MenuItem value='TAS'>TAS</MenuItem>
                                <MenuItem value='QLD'>QLD</MenuItem>
                              </Field>
                            </Grid>
                            <Grid item xs={12} md={3}>
                              <Field
                                fullWidth
                                name='Postcode'
                                component={TextField}
                                label='Postcode'
                                required
                              />
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
                            Add adult
                          </Button>
                        </div>
                      </Grid>

                      <Accordion
                        expanded={adultExpanded === 'panel3'}
                        onChange={handleChange('panel3')}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls='panel3d-content'
                          id='panel3d-header'
                        >
                          <Typography variant='h5' component='h4'>
                            Child 1:
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container alignItems='flex-start' spacing={2}>
                            <Grid item xs={12} md={6}>
                              <Field
                                fullWidth
                                required
                                name='firstName-c1'
                                component={TextField}
                                type='text'
                                label='First Name'
                              />
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <Field
                                fullWidth
                                required
                                name='lastName-c1'
                                component={TextField}
                                type='text'
                                label='Last Name'
                              />
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <FormControl component='fieldset'>
                                <FormLabel component='legend'>Gender *</FormLabel>
                                <RadioGroup row>
                                  <FormControlLabel
                                    label='Female'
                                    control={
                                      <Field
                                        name='gender-c1'
                                        component={Radio}
                                        type='radio'
                                        value='Female'
                                        required
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Male'
                                    control={
                                      <Field
                                        name='gender-c1'
                                        component={Radio}
                                        type='radio'
                                        value='Male'
                                        required
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Other'
                                    control={
                                      <Field
                                        name='gender-c1'
                                        component={Radio}
                                        type='radio'
                                        value='Other'
                                        required
                                      />
                                    }
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <MTextField
                                fullWidth
                                id='date-c1'
                                label='Date of birth'
                                type='date'
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                required
                              />
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <FormControl component='fieldset'>
                                <FormGroup col>
                                  <FormLabel component='legend'>
                                    Do they identify as Aboriginal and/or Torres Strait Islander? *
                                  </FormLabel>
                                  <FormControlLabel
                                    label='Aboriginal'
                                    control={
                                      <Field
                                        name='Aboriginal-c1'
                                        component={Radio}
                                        type='checkbox'
                                        value='Aboriginal'
                                        required
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Torres Strait Islander'
                                    control={
                                      <Field
                                        name='Aboriginal-c1'
                                        component={Radio}
                                        type='checkbox'
                                        value='Torres Strait Islander'
                                        required
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Aboriginal and Torres Strait Islander'
                                    control={
                                      <Field
                                        name='Aboriginal-c1'
                                        component={Radio}
                                        type='checkbox'
                                        value='Aboriginal and Torres Strait Islander'
                                        required
                                      />
                                    }
                                  />
                                  <FormControlLabel
                                    label='Prefer not to say'
                                    control={
                                      <Field
                                        name='Aboriginal-c1'
                                        component={Radio}
                                        type='checkbox'
                                        value='Prefer not to say'
                                        required
                                      />
                                    }
                                  />
                                </FormGroup>
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <Field
                                fullWidth
                                name='Cultural identity-c1'
                                component={TextField}
                                type='text'
                                label='Cultural identity'
                                required
                              />
                              <p style={helpTextStyle}>E.g. of cultural identities</p>
                            </Grid>

                            <Grid item xs={12} md={12}>
                              <Field
                                fullWidth
                                name='Ref-c1'
                                component={TextField}
                                type='text'
                                label='Name of school/childcare'
                                required
                              />
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
                            Add child
                          </Button>
                        </div>
                      </Grid>

                      <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                        <div align='right'>
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
        )}
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
