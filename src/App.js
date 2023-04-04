
import './App.css';

import {
  Box,
  Typography,
  useMediaQuery,
} from '@mui/material/';

function App() {
  return (
    <div className="App">
      <Box paddingY={3}>
        <Typography variant='h2' fontFamily={'Display'} textTransform={'uppercase'}>
          Work with us
        </Typography>
      </Box>
    </div>
  );
}

export default App;
