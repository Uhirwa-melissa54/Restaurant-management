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
                             <Box  sx={{  maxWidth: '60%',height:'200px',mt:3 }}>
            <img src={sitting}  style={{ width: '300px', height: '100%', objectFit:'cover',overflow:'hidden',borderTopRightRadius: 8 }}  />
          </Box>

           <Box sx={{ width:'50%',mt:5 }}>
 <Typography variant='h5'>Who are we?</Typography>
                <Typography variant='h8' >We are a fine dining restaurant dedicated to exceptional taste and elegant ambiance.
Our chefs craft every dish with passion and fresh, local ingredients.
Whether it's a romantic dinner or a special celebration, we make it memorable.
</Typography>

  <Button
            component={Link}
            to="/employee"
            
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'white',
             
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
                    <Box sx={{m:50}}>
                         <Typography variant='h5'  sx={{textAlign: 'center' ,mt:5}}>Our Exquisite Menu</Typography>
                         <Typography variant='h5'  sx={{textAlign: 'center' }}>Our Menu does not exclude anyone or make them feel left out.</Typography>
                         <Box sx={{
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
    gap: 4,
    mt: 4,
  }}>

      <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 1 }}>
    <img src={speciesOne} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight="600">Species One</Typography>
      <Typography variant="body2" color="text.secondary">$25</Typography>
    </Box>
  </Box>

  <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 1 }}>
    <img src={speciesTwo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight="600">Species Two</Typography>
      <Typography variant="body2" color="text.secondary">$30</Typography>
    </Box>
  </Box>

  <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 1 }}>
    <img src={speciesThree} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight="600">Species Three</Typography>
      <Typography variant="body2" color="text.secondary">$28</Typography>
    </Box>
  </Box>

  <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 1 }}>
    <img src={speciesFour} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight="600">Species Four</Typography>
      <Typography variant="body2" color="text.secondary">$35</Typography>
    </Box>
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
