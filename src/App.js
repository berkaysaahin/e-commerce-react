import "./App.css";
import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [count, setcount] = useState(0);
  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color="#263238" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <h2>Counter: {count}</h2>
      <div>
        <button
          onClick={() => {
            setcount(count - 1);
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            setcount(count + 1);
          }}
        >
          increment
        </button>
      </div>
    </>
  );
}

export default App;
