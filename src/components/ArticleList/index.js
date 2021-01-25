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
import { Link } from 'react-router-dom';
import image1 from '../Home/assests/Meredith_logo.png';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
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
    card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      }
  }));

export default function ArticleList(props){
    console.log("props inside ArticleList:::",props.location.state.timeBased);
   // const SelectedFilters = props.location.state.AllFilters

   const {timeBased} = props.location.state
   console.log("timeBased::",timeBased);
   
    const classes = useStyles();
    let{ entities } = Response
    const [state, setState] = useState({loading:true, loadUrl:""})

    if(timeBased){
      entities = entities.filter((i) => {return i.ERT})
    }
    
   
    

    const handleClick = (e, url) => {
      //window.open(url, "_blank")
    console.log('in url:::',url);
      setState((prevState) => {
        return{
          ...prevState,
          url
        }
      })
      console.log("steta: ", state);
      props.history.push({
        pathname: `/Reader`,
        state: {myUrl:url}
      });
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
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar} variant="dense" style={{ background: "white", height:"75px" }}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <img src={image1} alt="Meredith Logo" />
          </Typography>

          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} style={{ fontFamily:"Comic Sans MS"}}>
          Binge Read
          </Typography>

          <nav>
            
            {/* <Link variant="button" color="textPrimary" href="/Login" to="/Login" className={classes.link} style={{fontWeight:"normal"}}>
              Sign in
            </Link>
            <Link variant="button" color="textPrimary" href="/Login" to="/Login" className={classes.link} style={{fontWeight:"normal"}}>
              Support
            </Link> */}
          </nav>
          <Link variant="button" color="textPrimary" href="/Login" to="/Login" className={classes.link} style={{textDecoration: 'none', fontWeight:"normal"}}>
              Support
            </Link>
          <p href="/Login" color="primary" variant="outlined" className={classes.link} style={{fontWeight:"normal"}}>
            My Account
          </p>
          {/* <Button href="/Login" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button> */}
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
            return (
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
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.headline}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={e => {
                        handleClick(e, item.asset_url);
                      }}
                    >
                      Learn More
                    </Button>
                    {timeBased && item.ERT && <span>ERT:{item.ERT}</span>}
                  </CardActions>
                </Card>
              </Grid>
            );
        })}
        </Grid>
        </Grid>
        {state.loadUrl && <Iframe url={state.loadUrl}
          position="absolute"
          width="100%"
          id="myId"
          className="myClassname"
          height="100%"
          styles={{height: "25px"}}/>}
      </div>
    );
}
}


