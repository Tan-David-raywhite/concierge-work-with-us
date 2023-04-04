
import './App.css';

import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from '@mui/material/';

function App() {
  return (
    <div className="App">
      <Box paddingY={3}>
        <Container maxWidth={'xl'}>
          <Box paddingY={3}>
            <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant='h3' fontFamily={'Display'} textTransform={'uppercase'} align={'left'} letterSpacing={2}>
                  Work with us
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }} paddingX={2}>
                  <Link href='https://www.raywhite.com/concierge' target='_blank'>
                    <img alt="hero" height={'20px'} src="https://rw-media.s3.amazonaws.com/raywhitecom/wp-content/uploads/2017/04/19123847/concierge.png" />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Container maxWidth="xl">
              <Typography variant="p" fontFamily={'Base'}>
                Ray White Concierge is a professional communications business that forms part of the Ray White
                Corporate team. We work with our corporate teams and Ray White offices to help service customers
                who transact with Ray White businesses across Australia and New Zealand.
                <br />
                <br />
                Our Concierge culture and environment is based on a high level of energy, and enthusiasm and
                provides a positive workplace for our team to develop and grow their professional communication,
                administration and client relation skills within their careers. We work during business hours Monday to
                Friday and offer a range of casual, part time and full time roles for all levels of experience.
                We have two businesses within our Concierge team, one which is our Client Welcome Experience
                Service for home buyers and sellers, and the other is our Client Nurturing service where we work
                closely with business owners and agents of Ray White.
                <br />
                <br />
                If you would like to know what roles we have available, or would like to express your interest in
                working at Concierge, we’re always looking for great people and would love to hear from you. Please
                email your resume and cover letter to <b>applyatconcierge@raywhite.com</b>.
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box style={{
              backgroundImage: 'url(https://rw-media.s3.amazonaws.com/raywhitecom/wp-content/uploads/2022/06/29095040/RayWhite_EliseHassey21_1232-scaled.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: '0 40%',
              paddingBottom: '55%',
            }} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
