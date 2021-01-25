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

const handleSubmit = (e, props, timeBased) => {
    props.history.push({
      pathname: `/ArticleList`,
      state: {timeBased}
    });
  }

  

export default function Payment(props){
    console.log("inside payemnt",props);
    const {timeBased} = props
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
        
        <Paper className={classes.paper}>
          <Typography component="h5" variant="h6" color="textPrimary">
          Payment Information:
        </Typography>
          <div className="NextButton containerClass">
            <form className="formContainer">
              <div>
                <div className="payMentText">Select a Payment Method</div>
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
              <div className="card-Name">
                <input
                  className="form-row"
                  size="30"
                  type="text"
                  placeholder="Name on Card"
                />
              </div>
              <div className="card-Number">
                <input
                  className="form-row"
                  size="20"
                  type="text"
                  placeholder="Card Number"
                />
              </div>
              <div className="card-Small-Details">
                <input
                  className="form-row"
                  placeholder="ex. 311"
                  size="6"
                  type="text"
                  placeholder="CVV"
                />
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
              <div className="totalValue">
                Total: ${props.val*6}
              </div>
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
            Now you are subscribed to Binge Read application.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
          <Button onClick={e => {
                    handleSubmit(e, props, timeBased);
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