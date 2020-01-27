import React from "react";
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
import image1 from "../Home/assests/Meredith_logo.png";
import { makeStyles } from "@material-ui/core/styles";
import SubscriptionImage from "../Home/assests/image.png";
import Select from "@material-ui/core/Select";
import Payment from "../Payment";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "5%"
  },
  Typography: {
    font: "bold",
    color: "black"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function Subscription(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");
  const [state, setState] = React.useState({ showPayment: false });

  const handleChange = event => {
    setAge(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setState(prevState => ({
        showPayment: !prevState.showPayment
      }));
  };

  const handleClick = () => {
    console.log("inside Hanle!!!", state.showPayment);

    setState(prevState => ({
      showPayment: !prevState.showPayment
    }));
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense" style={{ background: "white" }}>
          <Typography variant="h6" color="primary">
            <img src={image1} alt="Meredith Logo" />
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="NextButton">
        <img src="https://secure.static.meredith.com/crt/store/comboCreative/2019/900x160MAG_Onsite_BYOCmigrations_Mix.jpg" />
      </div>
      <div className="NextButton">
        <Grid container spacing={3}>
          <Grid container justify="center" item xs={12} spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <ButtonBase onClick={handleClick}>
                  <img
                    className="imageScr"
                    alt="image"
                    src={SubscriptionImage}
                    width="280px"
                    height="260px"
                  />
                </ButtonBase>
                <Typography component="h2" variant="h3" color="textPrimary">
                    $15
                </Typography>
                <Typography className={classes.Typography} >
                  Get Access to Top Articles for One Month
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <ButtonBase onClick={handleClick}>
                  <img
                    className="imageScr"
                    alt="image"
                    src={SubscriptionImage}
                    width="280px"
                    height="260px"
                  />
                </ButtonBase>
                <Typography component="h2" variant="h3" color="textPrimary">
                    $30
                </Typography>
                <Typography className={classes.Typography}>
                  Get Access to Top Articles for One Year
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <div>
                  <Button onClick={handleClickOpen}>
                    <img
                      className="imageScr"
                      alt="image"
                      src={SubscriptionImage}
                      width="280px"
                      height="260px"
                    />
                  </Button>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    $5 per day
                </Typography>
                  <Typography className={classes.Typography}>
                    Time Based Subscription
                  </Typography>
                  <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={open}
                    onClose={handleClose}
                  >
                    <DialogTitle>Select the Duration</DialogTitle>
                    <DialogContent>
                      <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="demo-dialog-native">
                            Month
                          </InputLabel>
                          <Select
                            native
                            value={age}
                            onChange={handleChange}
                            input={<Input id="demo-dialog-native" />}
                          >
                            <option value="" />
                            <option value={1}>1 Month</option>
                            <option value={2}>2 Months</option>
                            <option value={3}>3 Months</option>
                          </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="demo-dialog-native">
                            weeks
                          </InputLabel>
                          <Select
                            native
                            value={age}
                            onChange={handleChange}
                            input={<Input id="demo-dialog-native" />}
                          >
                            <option value="" />
                            <option value={1}>1 Week</option>
                            <option value={2}>2 Weeks</option>
                            <option value={3}>3 Weeks</option>
                          </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-dialog-select-label">
                            Days
                          </InputLabel>
                          <Select
                            labelId="demo-dialog-select-label"
                            id="demo-dialog-select"
                            value={age}
                            onChange={handleChange}
                            input={<Input />}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1 Day</MenuItem>
                            <MenuItem value={2}>2 Days</MenuItem>
                            <MenuItem value={3}>3 Days</MenuItem>
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
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {state.showPayment && <Payment {...props} />}
    </div>
  );
}
