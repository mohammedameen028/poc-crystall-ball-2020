import React, {useState, useEffect} from 'react'
import {AppBar, Toolbar, Typography, Grid, Paper, ButtonBase} from '@material-ui/core';
import Logo from '../Home/assests/Meredith_logo.png';
import Response from './response.json'
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Iframe from 'react-iframe'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      }
  }));

export default function ArticleList(props){
    //console.log("props:::",props.location.state.AllFilters);
   // const SelectedFilters = props.location.state.AllFilters
    const classes = useStyles();
    const { entities } = Response
    const [state, setState] = useState({loading:true, loadUrl:""})

    const handleClick = (e, url) => {
        //window.open(url, "_blank")

        setState((prevState) => {
          return{
            ...prevState,
            loadUrl:url
          }
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
         setState((prevState) => {
           return{
            ...prevState,
            loading:false
           }
         })
        }, 3000);
      }, []);

    if(state.loading){
        return(
            <div className='loadingLogo' style={{
                top: "25%",
              }}> 
                <img src="https://www.meredith.com/sites/all/themes/meredith/images/loading-animation.gif" alt="Loading1" />
            </div>
        )

    }else{

    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense" style={{ background: "white" }}>
            <Typography variant="h6" color="primary">
              <img src={Logo} alt="Meredith Logo" />
            </Typography>
          </Toolbar>
        </AppBar>
        {/* <div>
          Selected Filters: {SelectedFilters.map(i => {
            return(<span>{i}</span>)
          })}
          </div> */}
        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
        {entities.map(item => {
            return(
                <Grid item xs={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.$imageThumbnailUrl}
              title={item.headline}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.brand}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.headline}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary" onClick={e => {handleClick(e, item.asset_url)}}>
              Learn More
            </Button>
          </CardActions>
        </Card>
        </Grid>
            );
        })}
        {state.loadUrl && <Iframe url={state.loadUrl}
          position="absolute"
          width="100%"
          id="myId"
          className="myClassname"
          height="100%"
          styles={{height: "25px"}}/>}
        </Grid>
        </Grid>
      </div>
    );
}
}


