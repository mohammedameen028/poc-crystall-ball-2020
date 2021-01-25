import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {AppBar, Toolbar, Tabs, Tab, Typography, Box, Chip, Grid, Paper, Button, ButtonBase,GridList,ListSubheader, GridListTile, GridListTileBar} from '@material-ui/core';
import image1 from '../Home/assests/Meredith_logo.png';
import './index.css'
import brands from './brands.json'
import categories from './categories.json'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    //backgroundColor:"#8a8aff"
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
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [state, setState] = useState({AllFilters:[], loading:true, showButton: true})
  const {data} = brands
  const {categoriesData} = categories

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };


  const handleDelete = (e,i) => {
    console.log('You clicked the delete icon.',i);
    setState({
      AllFilters: state.AllFilters.filter((item) => {
        return (item !== i)
      })
    })
  };


  const handleClick = (e, name, key) => {
    data[key].selected = !data[key].selected
    setState(prevState => ({
      ...prevState,
      AllFilters: [...state.AllFilters, name],
      showButton : data[key].selected
    }))
    state.showButton ? e.currentTarget.style.backgroundColor = "#BDD9B1" : e.currentTarget.style.backgroundColor = "white"
  }

  const handleClick1 = (e, name, key) => {
    categoriesData[key].selected = !categoriesData[key].selected
    setState(prevState => ({
      ...prevState,
      AllFilters: [...state.AllFilters, name],
      showButton : categoriesData[key].selected
    }))
    state.showButton ? e.currentTarget.style.backgroundColor = "#BDD9B1" : e.currentTarget.style.backgroundColor = "white"
  }
// const handleClick = (e, name) => {
 

  
//   setState({
//     AllFilters: [...state.AllFilters,name],
//     color:"green"
//   })
  
// }

const handleSubmit = (e, props) => {
  console.log("submit The value!!!");
  props.history.push({
    pathname: `/Login`,
    state: {AllFilters:state.AllFilters}
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
          <nav>
            <Link variant="button" color="textPrimary" href="/Subscription" to="/Subscription" className={classes.link} style={{fontWeight:"normal"}}>
              Subscribe
            </Link>
            <Link variant="button" color="textPrimary" href="/Login" to="/Login" className={classes.link} style={{fontWeight:"normal"}}>
              Sign in
            </Link>
            <Link variant="button" color="textPrimary" href="/Login" to="/Login" className={classes.link} style={{fontWeight:"normal"}}>
              Support
            </Link>
          </nav>
          <p href="/Login" color="primary" variant="outlined" className={classes.link} style={{fontWeight:"normal"}}>
            My Account
          </p>
        </Toolbar>
      </AppBar>

      {/* <AppBar position="static"> */}
        {/* <Toolbar variant="dense" style={{ background: "white", height:"75px" }}> */}
          {/* <Typography variant="h6" color="primary"> */}
            {/* <img src={image1} alt="Meredith Logo" /> */}
            {/* <Link to="/Subscription" style={{ textDecoration: 'none', color: 'black', fontSize:"16px",  display: "block", align: 'right', float:"right"}}>&nbsp;&nbsp;Subscribe</Link> */}
            {/* <Link to="/Login" style={{ textDecoration: 'none', color: 'black' , fontSize:"16px"}}>&nbsp;&nbsp;Sign in</Link> */}
          {/* </Typography> */}
        {/* </Toolbar> */}
      {/* </AppBar> */}
      
     
        <AppBar position="static" color="default">
          <div className="chip">
          <div className="headLine">
            {/* Selected Filters: */}
            <p style={{textAlign:"center", fontSize:"46px", fontFamily:"medium-marketing-display-font, Cambria, Times, serif"}}>A customizable reading experience, made just for you.</p>
            <p style={{textAlign:"center", fontWeight:"normal", fontSize:"23px", lineHeight:"26pt"}}>With the ability to follow your favorite topics, writers, and magazines, you’re in control of your<br/>reading experience. So the content that matter most to you are always at your fingertips.</p>
          </div>
            {/* {state.AllFilters.map((i, k) => {
              return <Chip className="categoryChip" label={i} onDelete={(e) =>{handleDelete(e,i)} } color="primary" />;
            })} */}
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Brands" {...a11yProps(0)} />
            <Tab label="Categories" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                {data.map((item,key) => {
                  return (
                    <Grid item xs={3} >
                      <Paper  name = {item.name} className={classes.paper} >
                        <ButtonBase key= {key} onClick={(e) => {handleClick(e, item.name, key)}}>
                          <img
                            className="imageScr"
                            alt={item.name}
                            src={item.logo}
                            width="200px"
                            height="180px"
                          />
                        </ButtonBase>
                        {/* <Typography gutterBottom variant="subtitle1">
                          {item.name}
                        </Typography> */}
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                {categoriesData.map((item,key) => {
                  return (
                    <Grid item xs={3}>
                      <Paper className={classes.paper}>
                        <ButtonBase  key={key} onClick={(e) => { handleClick1(e, item.name, key)}}>
                          <img
                            className="imageScr"
                            alt={item.name}
                            src={`./${item.name}.jpg`}
                            width="200px"
                            height="200px"
                          />
                        </ButtonBase>
                        <Typography gutterBottom variant="subtitle1">
                          {item.name.toUpperCase()}
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>    

          {/* <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
              <ListSubheader component="div">Categories</ListSubheader>
           </GridListTile>
           {categoriesData.map(item => {
                  return (
                   
                    <GridListTile  onClick={(e) => {handleClick(e, item.name)}}>
                            <img
                            alt={item.name}
                            src={`./${item.name}.jpg`}
                          />
                  <GridListTileBar
                    title={item.name}
                    subtitle={<span>{item.name}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about ${item.name}`} className={classes.icon}>
                       
                      </IconButton>
                    }
                  />
                    </GridListTile>
                  );
           })}
          </GridList> */}
            </div>
          </TabPanel>
        </SwipeableViews>
     
      
      <div className="NextButton">
        <Button variant="contained" color="secondary" onClick = {(e) => {handleSubmit(e, props)}}>Next</Button>
      </div>
  </div>
  )
}
}