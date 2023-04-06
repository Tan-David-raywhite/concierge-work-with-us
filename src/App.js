
import './App.css';

import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from '@mui/material/';
import { useTheme } from '@mui/material/styles';

import Navbar from './components/navbar';

function App() {

  const theme = useTheme();
  const isBelowSm = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div className="App">
      <Navbar />
      <Box marginTop={'120px'} paddingY={3}>
        <Container maxWidth={'null'} disableGutters>
          <Box paddingY={3} bgcolor={'#efefef'} marginBottom={3}>
            <Typography variant={isBelowSm ? 'h4' : 'h3'} fontFamily={'Display'} textTransform={'uppercase'} align={'center'} letterSpacing={2}>
              Work with us
            </Typography>
          </Box>
        </Container>

        <Box marginY={isBelowSm ? 3 : 0}>
          <Grid container spacing={3} alignItems={'center'}>
            <Grid item xs={12} md={6}>
              <Container maxWidth="xl">
                <Typography variant={isBelowSm ? "h6" : "h5"} fontFamily={'Base'} fontWeight={300} lineHeight={'1.6'}>
                  Ray White Concierge is a professional communications business that forms part of the Ray White
                  Corporate team. We work with our corporate teams and Ray White offices to help service customers
                  who transact with Ray White businesses across Australia and New Zealand.
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <img width={'100%'} src="https://rw-media.s3.amazonaws.com/raywhitecom/wp-content/uploads/2022/06/29095040/RayWhite_EliseHassey21_1232-scaled.jpg" />
            </Grid>
          </Grid>
        </Box>

        <Box marginY={isBelowSm ? 3 : 13}>
          <Grid container spacing={3} alignItems={'center'} direction={isBelowSm ? 'column-reverse' : 'row'}>
            <Grid item xs={12} md={6}>
              <img width={'100%'} src="https://rw-media.s3.amazonaws.com/raywhitecom/wp-content/uploads/2021/04/15105527/RayWhite_EliseHassey_2017_315-scaled.jpg" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Container maxWidth="xl">
                <Typography variant={isBelowSm ? "h6" : "h5"} fontFamily={'Base'} fontWeight={300} lineHeight={'1.6'}>
                  Our Concierge culture and environment is based on a high level of energy, and enthusiasm and
                  provides a positive workplace for our team to develop and grow their professional communication,
                  administration and client relation skills within their careers. We work during business hours Monday to
                  Friday and offer a range of casual, part time and full time roles for all levels of experience.
                  We have two businesses within our Concierge team, one which is our Client Welcome Experience
                  Service for home buyers and sellers, and the other is our Client Nurturing service where we work
                  closely with business owners and agents of Ray White.
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Box>

        <Box marginY={isBelowSm ? 3 : 0} marginBottom={0}>
          <Grid container spacing={3} alignItems={'center'} >
            <Grid item xs={12} md={6}>
              <Container maxWidth="xl">
                <Typography variant={isBelowSm ? "h6" : "h5"} fontFamily={'Base'} fontWeight={300} lineHeight={'1.6'}>
                  If you would like to know what roles we have available, or would like to express your interest in
                  working at Concierge, we’re always looking for great people and would love to hear from you. Please
                  email your resume and cover letter to <b>applyatconcierge@raywhite.com</b>.
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <img width='100%' src='https://rw-media.s3.amazonaws.com/raywhitecom/wp-content/uploads/2022/10/12125445/RayWhite-Commercial-Elise-Hassey-0198_LR-1-1.jpg' />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div >
  );
}

export default App;
