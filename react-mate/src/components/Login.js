import React, { useEffect, useState } from 'react';
import { Button, FormControl, TextField } from '@mui/material';
import { login } from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../actions/actions';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('password');
  const token = useSelector(state => state.auth.token);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      const token = response.data.token;
      // Lưu token vào localStorage hoặc Redux store để sử dụng sau này
      
      dispatch(loginSuccess(token));
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   console.log(token);
  // })

  return (
    <FormControl>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </FormControl>
  );
};

export default Login;