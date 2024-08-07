import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Product } from './Product';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';
import food from "../assets/foodLogo.svg";
import drink from "../assets/drinkLogo.svg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p:3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}

    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',width:"100%",marginBottom:"100px" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs - Category"
        sx={{backgroundColor:"white", width:"25%",borderRight: 1, borderColor: 'divider'}}
      >
        <Tab sx={{fontSize:"10px"}} 
            label="ALL"  
            {...a11yProps(0)}/>

        <Tab sx={{fontSize:"10px"}}
              icon={<img src={food}></img>}
              label="Food" {...a11yProps(1)}/>
        <Tab sx={{fontSize:"10px"}} icon={<img src={drink}></img>} label="Beverage" {...a11yProps(2)}/>
      </Tabs>

      <TabPanel value={value} index={0}>
        {Product.map((p)=>(
          <Link className="link" to={`food/${p.id}`}>
              <FoodCard tag={p.type} img={p.imgUrl} name={p.name} price={p.price}></FoodCard>
          </Link>
        ))}     
      </TabPanel>

      <TabPanel  value={value} index={1}>
        {Product.map((p) => {

          if (p.type !== "Drink") {
            return (
              <Link className="link" to={`food/${p.id}`} key={p.id}>
                <FoodCard tag={p.type} img={p.imgUrl} name={p.name} price={p.price} />
              </Link>
            );
          }
          return null; 
        })}    
      </TabPanel>

      <TabPanel value={value} index={2}>
        {Product.map((p) => {
          if (p.type == "Drink") {
            return (
              <Link className="link" to={`food/${p.id}`} key={p.id}>
                <FoodCard tag={p.type} img={p.imgUrl} name={p.name} price={p.price} />
              </Link>
            );
          }
          return null; 
        })}
      </TabPanel>
      
    </Box>
  );
}

