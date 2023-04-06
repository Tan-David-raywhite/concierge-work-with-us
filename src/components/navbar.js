import React, { useState } from 'react'

import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';

export default function Navbar() {
  const theme = useTheme();
  const isBelowSm = useMediaQuery(theme.breakpoints.down('md'))
  const isMd = useMediaQuery('(max-width:1025px)')
  const [inView, setinView] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const onScrollNav = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      setinView(true)
    } else {
      setinView(false)
    }
  }

  const navbarLinks = [
    { text: 'Concierge', link: 'https://www.raywhite.com/concierge/' },
    { text: 'Client Nurturing for Ray White Members', link: 'https://www.raywhite.com/concierge-client-nurturing/' },
  ]

  window.addEventListener('scroll', onScrollNav);
  return (
    <AppBar position="fixed" color="tertiary" elevation={inView ? 3 : 0} >
      <Container maxWidth="xl" sx={{ padding: '12px 0' }}>
        <Toolbar disableGutters>
          {/* above sm navbar */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: isMd ? 1 : 2 }}>
            {
              navbarLinks.map((item, index) => {
                return (
                  <Button key={item.link} href={item.link} variant="text" color="secondary"
                    sx={{
                      fontSize: isMd ? 11.5 : 14,
                      my: 2,
                      color: 'secondary',
                      display: 'block',
                      position: 'relative',
                      '&:hover::before': {
                        transform: 'scaleX(1)',
                        transformOrigin: 'left'
                      },
                      '&:before': {
                        background: '#ffe512',
                        content: '""',
                        inset: 0,
                        position: 'absolute',
                        transform: 'scaleX(0)',
                        transformOrigin: 'right',
                        transition: 'transform 0.3s ease-in-out', zIndex: '-1'
                      }
                    }}
                  >
                    {item.text}
                  </Button>
                )
              })
            }
          </Box>
          {/* above sm navbar end */}

          {/* below sm navbar */}
          <Box sx={{ flexGrow: isBelowSm ? 0 : 1, display: { xs: 'flex', md: 'none' }, gap: 3, textAlign: 'left' }}>
            <Button color="secondary" onClick={() => setDrawerOpen(true)}><MenuIcon /></Button>
            <Drawer
              anchor='bottom'
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box padding={2}>
                {
                  navbarLinks.map((item, index) => {
                    return (
                      <Button key={item.link} href={item.link} variant="text" color="secondary"
                        sx={{
                          my: 2,
                          color: 'secondary',
                          display: 'block',
                          position: 'relative',
                          textAlign: 'left',
                          '&:hover::before': {
                            transform: 'scaleX(1)',
                            transformOrigin: 'left'
                          },
                          '&:before': {
                            background: '#ffe512',
                            content: '""',
                            inset: 0,
                            position: 'absolute',
                            transform: 'scaleX(0)',
                            transformOrigin: 'right',
                            transition: 'transform 0.3s ease-in-out', zIndex: '-1'
                          }
                        }}
                      >
                        {item.text}
                      </Button>
                    )
                  })
                }
              </Box>
            </Drawer>
          </Box>
          {/* below sm navbar end */}

          {/* Navbar Logo */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: isBelowSm ? 'flex-start' : 'flex-end', flexDirection: 'column', mr: isBelowSm ? 1 : 2 }}>
            <Typography textTransform={'uppercase'} letterSpacing={1} align={'right'} fontSize={13}>
              Get in touch:
            </Typography>
            <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }} align={'right'} fontSize={12}>
              <img style={{marginRight: '5px'}} alt="AUmap" width={'20px'} src="https://rw-media.s3.amazonaws.com/raywhitecom/wp-content/uploads/2022/09/02082432/ICONS_01GreyArtboard-20%404x-8.png" />
              AU -&nbsp;1300 729 944
            </Typography>
            <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }} align={'right'} fontSize={12}>
              <img style={{marginRight: '5px'}} alt="NZmap" width={'18px'} src="https://rw-media.s3.amazonaws.com/raywhitecom/wp-content/uploads/2022/09/02083421/NZmap_Grey.png" />
              NZ -&nbsp;1800 448 775
            </Typography>
            <Button size='small' href="mailto:relationshipmanager@raywhite.com" color="secondary" variant="text" startIcon={<EmailIcon fontSize={'10px'} />}>
              <Typography fontFamily={'Base'} align={'right'} fontSize={12}>
                Email us
              </Typography>
            </Button>
          </Box>
          <Box sx={{
            marginRight: 1,
            marginLeft: isBelowSm ? 'auto' : '',
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            <Link href="https://raywhite.com" sx={{
              width: inView ? '80px' : '120px',
              height: inView ? '80px' : '120px',
              transition: 'width, height, 450ms'
            }}>
              <svg class="page__logo" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
                <title>Ray White®</title>
                <rect id='block' fill='#ffe512' width='120' height='120' />
                <g id='logomark' fill='#595959'>
                  <path id='logomark--R' d='M21.26,100.13s-.22-.26.12-.31c2.52-.36,4.25-3,4.57-4.79a4.46,4.46,0,0,0-1.07-4.14c-1.29-1.4-2.48-1.38-4.7-1.31H15.7a.41.41,0,0,0-.4.34l-2.76,14.8a.27.27,0,0,0,.28.34h3a.41.41,0,0,0,.4-.34l.85-4.59h0s0,0,.22.28l3.24,4.37a.72.72,0,0,0,.54.28h3.77s.34,0,.13-.27Zm-2.14-3.29h-1a.26.26,0,0,1-.27-.34l.78-4.07H20c1.9.07,2.6,1,2.35,2.42C22.23,95.59,21.62,96.9,19.12,96.84Z' />
                  <path id='logomark--a' d='M39.42,93.63H36.34L36,95.08a3,3,0,0,0-3-1.85,7.26,7.26,0,0,0-6.88,6.1c-.61,3.28,1,6.12,4.62,6.12a4.68,4.68,0,0,0,3.56-2l-.24,1.26a.27.27,0,0,0,.28.34H37.3a.43.43,0,0,0,.41-.34L39.7,94A.27.27,0,0,0,39.42,93.63Zm-4.13,5.7a3.56,3.56,0,0,1-3.41,2.93,2.32,2.32,0,0,1-2.31-2.89,3.55,3.55,0,0,1,3.37-2.94A2.28,2.28,0,0,1,35.29,99.33Z' />
                  <path id='logomark--y' d='M52.26,93.63H49.39a.63.63,0,0,0-.51.29l-3,5.33s-.16.3-.23,0l-1-5.26a.42.42,0,0,0-.41-.33h-3A.26.26,0,0,0,41,94l2,9.87a1,1,0,0,1-.1.63l-2.17,3.83s-.17.3.17.3h2.81a.62.62,0,0,0,.51-.3l8.19-14.37S52.6,93.63,52.26,93.63Z' />
                  <path id='logomark--W' d='M71.71,89.81H68.6a.55.55,0,0,0-.48.31L64.3,98.31s-.15.31-.16,0l-.45-8.13a.36.36,0,0,0-.36-.34H61a.53.53,0,0,0-.47.32l-3.49,8.18s-.13.31-.16,0l-.6-8.13a.36.36,0,0,0-.36-.34H53a.31.31,0,0,0-.32.34l1.06,14.57a.37.37,0,0,0,.37.34H57a.53.53,0,0,0,.47-.32l3.48-8.6s.12-.31.14,0l.29,8.54a.35.35,0,0,0,.36.35h3a.55.55,0,0,0,.48-.31L71.9,90.12S72.05,89.81,71.71,89.81Z' />
                  <path id='logomark--h' d='M78.92,93.23a3.89,3.89,0,0,0-3.21,1.45h0s0,0,0-.34l.78-4.19a.27.27,0,0,0-.28-.34H73.49a.41.41,0,0,0-.4.34l-2.71,14.57a.27.27,0,0,0,.28.34H73.4a.42.42,0,0,0,.41-.34l1.11-6c.1-.55.45-2.51,2.37-2.51s1.46,2.08,1.36,2.63l-1.1,5.89a.27.27,0,0,0,.28.34h2.74a.41.41,0,0,0,.4-.34l1.13-6c.38-2,.46-3-.3-4.18A3.46,3.46,0,0,0,78.92,93.23Z' />
                  <g id='logomark--i'>
                    <path d='M87.9,93.68H85.17a.42.42,0,0,0-.41.33l-2,10.76a.27.27,0,0,0,.28.34h2.73a.42.42,0,0,0,.41-.34l2-10.76A.27.27,0,0,0,87.9,93.68Z' />
                    <path d='M88.61,89.86H85.87a.41.41,0,0,0-.4.34l-.36,1.93a.27.27,0,0,0,.28.33h2.74a.41.41,0,0,0,.4-.33l.36-1.93A.27.27,0,0,0,88.61,89.86Z' />
                  </g>
                  <path id='logomark--t' d='M96.61,93.68h-1.3a.27.27,0,0,1-.28-.34l.58-3.14a.27.27,0,0,0-.28-.34H92.59a.41.41,0,0,0-.4.34l-.65,3.48H90.2a.42.42,0,0,0-.41.33l-.42,2.26h1.35a.27.27,0,0,1,.28.34l-1.51,8.16a.27.27,0,0,0,.28.34H92.5a.43.43,0,0,0,.41-.34l1.57-8.5h1.31a.41.41,0,0,0,.4-.33Z' />
                  <path id='logomark--e' d='M103.41,93.36a7.58,7.58,0,0,0-7.11,6.06,4.89,4.89,0,0,0,4.93,6.06,6.24,6.24,0,0,0,3.44-.84,8.3,8.3,0,0,0,2.82-2.47s.18-.29-.16-.29h-3.46a2.45,2.45,0,0,1-2.11.79c-1.33,0-2.35-.69-2.3-2h8.23s.34,0,.38-.13a7.92,7.92,0,0,0,.24-1C109,96.05,106.9,93.36,103.41,93.36Zm1.35,5H99.91a3.2,3.2,0,0,1,3-2,2,2,0,0,1,2.22,1.61A.32.32,0,0,1,104.76,98.4Z' />
                  <g id='logomark--registered'>
                    <path d='M110.17,104c0-.29-.17-.43-.52-.43h-.58v1.49h.24v-.64h.24l.41.64h.25l-.43-.66A.38.38,0,0,0,110.17,104Zm-.62.23h-.24v-.47h.3c.16,0,.33,0,.33.23S109.75,104.25,109.55,104.25Z' />
                    <path d='M109.57,103.06a1.27,1.27,0,0,0-1.28,1.27,1.25,1.25,0,0,0,.37.91,1.28,1.28,0,0,0,2.19-.91A1.27,1.27,0,0,0,109.57,103.06Zm0,2.36a1.09,1.09,0,1,1,1.05-1.09A1,1,0,0,1,109.57,105.42Z' />
                  </g>
                </g>
              </svg>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
