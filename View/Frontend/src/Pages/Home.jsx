import React from 'react'
import { Box } from '@mui/material'
import background from '../assets/bakground image.jpg'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import Typography from '@mui/material/Typography'
import sitting from  '../assets/sittting3.jpg'
import speciesOne from  '../assets/speciesOne.jpg'
import speciesTwo from  '../assets/speciesTwo.jpg'
import speciesThree from  '../assets/speciesThree.jpg'
import speciesFour from  '../assets/speciesFour.jpg'

function Home() {
    return (

          <Box sx={{  height:'auto',width: '100%', bgcolor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

             <Box sx={{height:'auto',width: '60%', bgcolor: '#F0F0F0', display: 'flex', justifyContent: 'center', }}>
                <Box sx={{ width: '80%',display: 'flex' }}>
                    <Box sx={{height:'60vh',position: 'relative',width:'100%',backgroundImage:`linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(${background})`}}>
                           <Box sx={{ display: 'flex', gap: 2,position: 'absolute',   right: '5px',  
       }}>

                  <Button
            component={Link}
            to="/employee"
             size="small" 
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              paddingY: 0.5, 
            mt:2,
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Employee
          </Button>

            <Button
            component={Link}
            to="/employee"
            size="small" 
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
             
             mt:2,
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Clients
          </Button>

              </Box>
             

               <Box  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', 
    textAlign: 'center',
    color: 'white', 
  }}>
                <Typography color='white' variant='h4'  sx={{ fontWeight: '300',  }}>Experience the Art <br></br>of Fine Dining</Typography>
                <Typography color='white' variant='h8' sx={{mt:0,ml:9,mr:9}}>
                    Welcome to our restaurant, where every dish is crafted with passion and fresh ingredients. We serve delicious, memorable meals in a warm and inviting atmosphere.
                </Typography>

                 <Button
            component={Link}
            to="/employee"
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              paddingX: 2,
              paddingY: 1,
             mt:2,
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Explore More
          </Button>


              </Box>

<Box>
                        <Typography variant='h5'  sx={{textAlign: 'center' ,mt:5}}>Our Story, Your Experience</Typography>
                        <Box display='flex' justifyContent='space-between' sx={{}}>
                             <Box  sx={{  maxWidth: '60%',height:'250px',mt:5}}>
            <img src={sitting}  style={{ width: '300px', height: '100%', objectFit:'cover',overflow:'hidden',borderTopRightRadius: 8 }}  />
          </Box>

           <Box sx={{ width:'50%',mt:8,display:'flex', flexDirection:'column' }}>
            <Box>
 <Typography variant='h5'>Who are we?</Typography>
                <Typography variant='h8' >We are a fine dining restaurant dedicated to exceptional taste and elegant ambiance.
Our chefs craft every dish with passion and fresh, local ingredients.
Whether it's a romantic dinner or a special celebration, we make it memorable.
</Typography>
</Box>
<Box>
  <Button
            component={Link}
            to="/employee"
            
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              size:"small" ,
             mt:2,
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            Learn More
          </Button>
          </Box>


                </Box>

                        </Box>

                    </Box>
                    <Box>
                    <Box sx={{mt:8,backgroundColor:'rgba(252, 204, 209, 0.4)',width:'100%',textAlign: 'center' }}>
                         <Typography variant='h5'  sx={{pt:3,mb:1}}>Our Exquisite Menu</Typography>
                         <Typography variant='h8' >Our Menu does not exclude anyone or make them feel left out.<br></br> We have  vegetarian food that is healthy</Typography>
                         <Box display='flex'    alignItems= 'center'
    justifyContent= 'center' sx={{mt:'6'}}>
                            <Button size='small'  variant='contained'sx={{textTransform:'none',color:'grey', '&:hover': {
                backgroundColor: '#f0f0f0',
              }, }}>All Dishes</Button>
                            <Button size='small'>Starters</Button>
                            <Button size='small'>Main</Button>
                            <Button size='small'>Desserts</Button>
                           
                         </Box>
                        


                    </Box>
                    </Box>

                    
                     </Box>

                </Box>

             </Box>
          
           
        </Box>
           
        
    )
}

export default Home
