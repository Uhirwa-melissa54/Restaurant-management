import { Typography, Box, TextField, InputAdornment, Button } from '@mui/material'
import { useState } from 'react'
import axios from 'axios';

function EmployeeForm() {
  const [errors, setErrors] = useState({});
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    roleId:"",
    password: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try{
    const res=await axios.post('http://localhost:5000/employee/register',userCredentials);
     console.log(userCredentials);
     console.log(res.data.message)
    }
    catch(err){
        console.log('error submitting the form')
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserCredentials(credentials => ({
      ...credentials,
      [name]: value
    }));
    validateField(name, value);
  }

  const validateField = (name, value) => {
    let message = '';
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) message = 'Email is required';
      else if (!emailRegex.test(value)) message = 'Invalid email format';
    }
    if (name === 'password') {
      if (!value) message = 'Password is required';
      else if (value.length < 8) message = 'Password must be at least 8 characters';
      else if (!/[A-Z]/.test(value)) message = 'Include at least one uppercase letter';
      else if (!/[a-z]/.test(value)) message = 'Include at least one lowercase letter';
      else if (!/[0-9]/.test(value)) message = 'Include at least one number';
    }
    if (name === 'name') {
      if (!value) message = "Your full name is required";
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: message
    }));
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Box
        p={4}
        borderRadius={2}
        boxShadow={3}
        bgcolor="white"
        width="100%"
        maxWidth={500}
        display="flex"
        flexDirection="column"
      >
        <Typography variant='h4' align='center' gutterBottom>
          Register
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            type='text'
            name="name"
            placeholder='Full name'
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={userCredentials.name}
            error={Boolean(errors.name)}
            helperText={errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <i className="fas fa-user" />
                </InputAdornment>
              )
            }}
          />
          <TextField
            type='email'
            placeholder='Email'
            name="email"
            value={userCredentials.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.email)}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <i className="fas fa-envelope" />
                </InputAdornment>
              )
            }}
          />
          <TextField
            type='text'
            placeholder='Age'
            name="age"
            value={userCredentials.age}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            type='text'
            placeholder='Gender'
            name="gender"
            value={userCredentials.gender}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
         
           <TextField
            type='text'
            placeholder='Your roleId'
            name="roleId"
            value={userCredentials.roleId}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <i className="fa fa-map-marker" />
                </InputAdornment>
              )
            }}
          />
          <TextField
            type='password'
            name="password"
            placeholder='Password'
            value={userCredentials.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={Boolean(errors.password)}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <i className="fas fa-lock" />
                </InputAdornment>
              )
            }}
          />

          <Box mt={3} textAlign="center">
            <Button type='submit' variant="contained" size="large">
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default EmployeeForm;
