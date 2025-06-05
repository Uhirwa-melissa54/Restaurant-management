import React from 'react'
import { Box } from '@mui/material'
import background from '../assets/bakground image.jpg'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import Typography from '@mui/material/Typography'
import sitting from  '../assets/sittting3.jpg'

function Home() {
    return (

          <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

             <Box sx={{ minHeight: '100vh', width: '60%', bgcolor: '#F0F0F0', display: 'flex', justifyContent: 'center', }}>
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
Experience warmth, quality, and flavor in every bite.</Typography>

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
