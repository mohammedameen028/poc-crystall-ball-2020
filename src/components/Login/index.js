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
    color: theme.palette.text.secondary
  }
}));


export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [state, setState] = useState({AllFilters:[], loading:true})
  const Categories = [ "Food", "Health", "Fittness", "Sports", "Fun", "People", "politics", "Entertainment", "Hobbies", "Vegan", "PanCakes", "Values", "Business", "Straegies", "Exercise"];
  const {data} = brands
  const {data1} = categories

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


const handleClick = (e, name) => {
  setState({
    AllFilters: [...state.AllFilters,name]
  })
  
}

const handleSubmit = (e, props) => {
  console.log("submit The value!!!");
  props.history.push({
    pathname: `/Subscription`,
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
      <AppBar position="static">
        <Toolbar variant="dense" style={{ background: "white" }}>
          <Typography variant="h6" color="primary">
            <img src={image1} alt="Meredith Logo" />
          </Typography>
        </Toolbar>
      </AppBar>
      
     
        <AppBar position="static" color="default">
          <div className="chip">
          <div className="headLine">
            Selected Filters:
          </div>
            {state.AllFilters.map((i, k) => {
              return <Chip className="categoryChip" label={i} onDelete={(e) =>{handleDelete(e,i)} } color="primary" />;
            })}
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
                {data.map(item => {
                  return (
                    <Grid item xs={3}>
                      <Paper className={classes.paper}>
                        <ButtonBase onClick={(e) => {handleClick(e, item.name)}}>
                          <img
                            className="imageScr"
                            alt={item.name}
                            src={item.logo}
                            width="200px"
                            height="180px"
                          />
                        </ButtonBase>
                        <Typography gutterBottom variant="subtitle1">
                          {item.name}
                        </Typography>
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
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
              <ListSubheader component="div">Categories</ListSubheader>
           </GridListTile>
           {data1.map(item => {
                  return (
                    <GridListTile onClick={(e) => {handleClick(e, item.name)}}>
                            <img
                            alt={item.name}
                            src={`./${item.name}.jpg`}
                          />
                  <GridListTileBar
                    title={item.name}
                    subtitle={<span>{item.name}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about ${item.name}`} className={classes.icon}>
                        {/* <InfoIcon /> */}
                      </IconButton>
                    }
                  />
                    </GridListTile>
                  );
           })}
          </GridList>
          {/* <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                {data1.map(item => {
                  return (
                    <Grid item xs={3}>
                      <Paper className={classes.paper}>
                        <ButtonBase onClick={(e) => {handleClick(e, item.name)}}>
                          <img
                            className="imageScr"
                            alt={item.name}
                            src={`./${item.name}.jpg`}
                            width="200px"
                            height="200px"
                          />
                        </ButtonBase>
                        <Typography gutterBottom variant="subtitle1">
                          {item.name}
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid> */}
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