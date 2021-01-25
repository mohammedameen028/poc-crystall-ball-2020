import React from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  Paper,
  Typography,
  ButtonBase,
  Input,
  InputLabel,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl
} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import StarIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import image1 from "../Home/assests/Meredith_logo.png";
import Link from '@material-ui/core/Link';
import { sizing } from '@material-ui/system';

import Select from "@material-ui/core/Select";
import Payment from "../Payment";

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  Typography: {
    font: "bold",
    color: "black"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  Textmargin: {    
    margin: '4% 0px',   
  },
  formControlCustom: {
    width: '30%',
  }
}));

const tiers = [
  {
    title: 'Yearly',
    price: '25',
    timeBased:false,
    cycle: '/yr',
    description: ['Unlimited Content Access', 'Content From All Magazines'],
    buttonText: 'Subscribe For a Year',
    buttonVariant: 'contained',
    onClick: 'handleClick',
  },
  {
    title: 'Monthy',
    price: '7.99',
    timeBased:false,
    cycle: '/month',
    description: [
      'Unlimited Content Access', 'Content From All Magazines',
    ],
    buttonText: 'Subscribe For a Month',
    buttonVariant: 'contained',
    onClick: 'handleClick',
  },
  {
    title: 'Time Based',
    price: '5',
    timeBased:true,
    cycle: '/day',
    description: [
      'Content Curated to your Needs',
      'Quick Read',
     
    ],
    buttonText: 'Subscribe ',
    buttonVariant: 'contained',
    onClick: 'handleClickOpen',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Subscription(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({ showPayment: false, week:"", day:"", hour:"",timeBased:false, value:5, normalSubVal:60, subPeriod:"/day" });

  const handleChange = event => {
    setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("inside hanldClose!!!");
    
    setOpen(false);
    setState(prevState => ({
        showPayment: !prevState.showPayment,
        value:2,
        timeBased:true,
        subPeriod:"/hour"
      }));
  };

  const handleClick = () => {
    console.log("inside Hanle!!!", state.showPayment);

    setState(prevState => ({
      ...prevState,
      normalSubVal:60,
      showPayment: !prevState.showPayment,
      
    }));
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar} variant="dense" style={{ background: "white", height:"75px" }}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <img src={image1} alt="Meredith Logo" />
          </Typography>
          <nav>
            {/* <Link variant="button" color="textPrimary" href="/Subscription" to="/Subscription" className={classes.link} style={{textDecoration: 'none', fontWeight:"normal"}}>
              Subscribe
            </Link> */}
            {/* <Link variant="button" color="textPrimary" href="/Login" to="/Login" className={classes.link} style={{textDecoration: 'none', fontWeight:"normal"}}>
              Sign in
            </Link> */}
            <Link variant="button" color="textPrimary" href="/Login" to="/Login" className={classes.link} style={{textDecoration: 'none', fontWeight:"normal"}}>
              Support
            </Link>
          </nav>
          <p href="/Login" color="primary" variant="outlined" className={classes.link} style={{fontWeight:"normal"}}>
            MY ACCOUNT
          </p>
          {/* <Button href="/Login" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
      {/* <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <img src={image1} alt="Meredith Logo" />
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar> */}
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <div className="NextButton">
          <img src="https://secure.static.meredith.com/crt/store/comboCreative/2019/900x160MAG_Onsite_BYOCmigrations_Mix.jpg" />
        </div>
        <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom className={classes.Textmargin}> 
          Subscription Options for all your reading needs.
        </Typography>
        
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                   {tier.timeBased ?<> <Typography component="h2" variant="h3" color="textPrimary">
                      ${state.value}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                    {state.subPeriod}
                  </Typography></>
                    : <><Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                    {tier.cycle}
                  </Typography></>
                    } 
                    
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>

                  {tier.onClick === "handleClick"?
                    <Button fullWidth variant={tier.buttonVariant} color="primary" onClick={handleClick}>
                    {tier.buttonText}
                  </Button>
                   : 
                     <Button fullWidth variant={tier.buttonVariant} color="primary" onClick={handleClickOpen}>
                    {tier.buttonText}
                  </Button>  }
               

               
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={open}
                    onClose={handleClose}
                    fullWidth
                  >
                  <DialogTitle>Select the Duration</DialogTitle>
                    <DialogContent>
                      <form className={classes.container}>
                        <FormControl className={classes.formControlCustom}>
                          <InputLabel htmlFor="demo-dialog-native">
                            Week
                          </InputLabel>
                          <Select
                            native
                            name= "week"
                            value={state.week}
                            onChange={handleChange}
                            input={<Input id="demo-dialog-native" />}
                          >
                            <option value="" />
                            <option value={1}>1 Week</option>
                            <option value={2}>2 Weeks</option>
                            <option value={3}>3 Weeks</option>
                          </Select>
                        </FormControl>
                        <FormControl className={classes.formControlCustom}>
                          <InputLabel htmlFor="demo-dialog-native">
                            Days
                          </InputLabel>
                          <Select
                            native
                            name="day"
                            value={state.day}
                            onChange={handleChange}
                            input={<Input id="demo-dialog-native" />}
                          >
                            <option value="" />
                            <option value={1}>1 Day</option>
                            <option value={2}>2 Days</option>
                            <option value={3}>3 Days</option>
                          </Select>
                        </FormControl>
                        <FormControl className={classes.formControlCustom}>
                          <InputLabel id="demo-dialog-select-label">
                            Hours
                          </InputLabel>
                          <Select
                            labelId="demo-dialog-select-label"
                            id="demo-dialog-select"
                            name="hour"
                            value={state.hour}
                            onChange={handleChange}
                            input={<Input />}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1 Hour</MenuItem>
                            <MenuItem value={2}>2 Hours</MenuItem>
                            <MenuItem value={3}>3 Hours</MenuItem>
                          </Select>
                        </FormControl>
                      </form>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={handleClose} color="primary">
                        Ok
                      </Button>
                    </DialogActions>
                  </Dialog>
        {state.showPayment && <Payment {...props} val = {state.value || 20}  timeBased = {state.timeBased}/>}
      </Container>
    </React.Fragment>
  );
}
