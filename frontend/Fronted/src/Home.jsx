import React from 'react'
import { Box, Typography,Button } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { Link } from 'react-router-dom';


function Home() {
    return (
      <Box
      position='fixed'
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  width="100vw"
  
  px={4}
>
  {/* Left Section: Icon + Login Button */}
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    sx={{ml:10}}
  >
    <PeopleOutlineIcon sx={{ fontSize: 250 }} />
    <Button
      component={Link}
      to="/employee"
      variant="contained"
      sx={{ width: "200px", mt: 2 }} // mt: margin-top
    >
      Employee
    </Button>
  </Box>

  {/* Right Section: Sign In */}
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    sx={{mr:10}}
  >
    <GroupsOutlinedIcon sx={{ fontSize: 250 }} />
   <Button
      component={Link}
      to="/clients"
      variant="contained"
      sx={{ width: "200px", mt: 2 }} // mt: margin-top
    >
      Clients
    </Button>
  </Box>
</Box>

    )
}

export default Home
