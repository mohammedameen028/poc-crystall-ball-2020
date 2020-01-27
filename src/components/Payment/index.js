import React from 'react'
import { Paper, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './index.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 2,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary, 
        marginTop: "3%",
        margin: "10%"       
    },
}))

const handleSubmit = (e, props) => {
    props.history.push({
      pathname: `/ArticleList`,
    });
  }

  

export default function Payment(props){
    console.log("inside payemnt");
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };
    
    return (
      <div className="headerPayment">
        <Typography component="h4" variant="h5" color="textPrimary">
          Payment Information:
        </Typography>
        <Paper className={classes.paper}>
          <div className="NextButton containerClass">
            <form>
              <div>
                <div className="payMentText">Select Payment Method</div>
                <div className="cards">
                  <img src="https://d2ldlvi1yef00y.cloudfront.net/default/us/live/lwa/gold/medium/PwA.png" />
                </div>
                OR
                <div className="cards">
                  <img src="https://dcstatic.com/images/icons/payments/payments-paypal-71d8750b27.svg" />
                </div>
                OR
                <div className="cards">
                  <label className="card-row">
                    <input type="radio" name="test" value="small" checked />
                    <img src="https://secure.static.meredith.com/crt/store/buttons/VISA.svg" />
                  </label>
                  <label className="card-row">
                    <input type="radio" name="test" value="small" />
                    <img src="https://secure.static.meredith.com/crt/store/buttons/MASTERCARD.svg" />
                  </label>
                  <label className="card-row">
                    <input type="radio" name="test" value="small" />
                    <img src="https://secure.static.meredith.com/crt/store/buttons/DISCOVER.svg" />
                  </label>
                </div>
              </div>
              <div>
                <input
                  className="form-row"
                  size="30"
                  type="text"
                  placeholder="Name on Card"
                />
              </div>
              <div>
                <input
                  className="form-row"
                  size="20"
                  type="text"
                  placeholder="Card Number"
                />
                <input
                  className="form-row"
                  placeholder="ex. 311"
                  size="6"
                  type="text"
                  placeholder="CVV"
                />
              </div>
              <div>
                <input
                  className="form-row"
                  placeholder="MM"
                  size="4"
                  type="text"
                />
                <input
                  className="form-row"
                  placeholder="YYYY"
                  size="6"
                  type="text"
                />
              </div>
              Total:30$
              <div className="logoImages">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClickOpen}
                >
                  Proceed to Pay
                </Button>
              </div>
              <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Congratulation!!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Now you are subscribed to Bing Me application.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
          <Button onClick={e => {
                    handleSubmit(e, props);
                  }} color="primary">
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
              <div className="logoImages">
                <img
                  src="https://seal-iowa.bbb.org/seals/blue-seal-250-52-meredithcorporation-101975.png"
                  width="80px"
                  height="50px"
                />
                <img
                  src="https://ssl.comodo.com/images/seals/sectigo_trust_seal_sm_2x.png"
                  width="80px"
                  height="50px"
                />
              </div>
            </form>
          </div>
        </Paper>
      </div>
    );
}