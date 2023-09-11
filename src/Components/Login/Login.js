import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container
      style={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          placeholder="Enter your Name"
          margin="normal"
          required
          type="text"
          sx={{ width: "400px"}}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          placeholder="Enter your password"
          margin="normal"
          required
          type="password"
          sx={{ width: "400px" }}
        />
        <Button variant="contained" color="primary" type="submit" sx={{display:'flex'}}>
          Login
        </Button>
        <h4>Not a user? Click here to register (only shopoth people)</h4>
      </form>
    </Container>
  );
}

export default LoginForm;
