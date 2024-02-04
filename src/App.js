import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import RouteLayout from "./layout/Layout";
import backgroundImage from './images/wowBG.jpg'
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh', 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        <BrowserRouter>
          <RouteLayout />
          {/* Here comes the ContextProvider / main routes */}
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
