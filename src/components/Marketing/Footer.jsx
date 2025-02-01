import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

import logo from '../../Assets/images/logo.png';
import footerBg from '../../Assets/images/footerbg.png';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${footerBg})`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#FFFFFF',
        padding: '2rem 0',
        position: 'relative',
        bottom: 0,
        width: '100%',
        
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: '1200px', margin: '0 auto', padding:"0px 120px" }}>
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Box sx={{ marginBottom: '1rem' }}>
            <img
              src={logo}
              alt="Binary Hub Logo"
              style={{
                width: '150px', 
                marginBottom: '1rem',
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ lineHeight: 1.8, fontSize: '12px' }}>
            Binary Hub - Your Partner in Digital Transformation. Empowering businesses with innovative IT solutions.
          </Typography>
        </Grid>

        {/* Center Section */}
        <Grid item xs={12} md={4} sx={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"column"
        }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              fontSize: '15px',
            }}
          >
            Services
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 2, fontSize: '10px' }}>
            <Link href="#" color="inherit" underline="none">
              Web Development
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              UI/UX Design
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Digital Marketing
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Graphic Design
            </Link>
          </Typography>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              fontSize: '13px',
            }}
          >
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 2 }}>
            <Link
              href="mailto:info@binaryhub.com"
              color="inherit"
              underline="none"
              sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
              }}
            >
              <svg
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1813 3.02252C12.2735 2.94926 12.4105 3.01779 12.4105 3.13359V7.9665C12.4105 8.59277 11.9024 9.10088 11.2762 9.10088H1.44492C0.818652 9.10088 0.310547 8.59277 0.310547 7.9665V3.13596C0.310547 3.01779 0.445254 2.95162 0.539785 3.02488C1.06916 3.43609 1.77105 3.95838 4.1816 5.70957C4.68025 6.07351 5.52158 6.83922 6.36055 6.83449C7.20424 6.84158 8.06211 6.05934 8.54186 5.70957C10.9524 3.95838 11.6519 3.43373 12.1813 3.02252ZM6.36055 6.07588C6.90883 6.08533 7.69816 5.3858 8.0952 5.09748C11.2313 2.82164 11.47 2.62312 12.1931 2.05594C12.3302 1.94959 12.4105 1.78416 12.4105 1.60928V1.16025C12.4105 0.533984 11.9024 0.0258789 11.2762 0.0258789H1.44492C0.818652 0.0258789 0.310547 0.533984 0.310547 1.16025V1.60928C0.310547 1.78416 0.390898 1.94723 0.527969 2.05594C1.25113 2.62076 1.48982 2.82164 4.6259 5.09748C5.02293 5.3858 5.81227 6.08533 6.36055 6.07588Z"
                  fill="white"
                />
              </svg>
              <p
                style={{
                  marginLeft: '10px',
                }}
              >
                info@binaryhub.com
              </p>
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 2 }}>
            <Link
              href="mailto:info@binaryhub.com"
              color="inherit"
              underline="none"
              sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
              }}
            >
              <svg
                width="11"
                height="15"
                viewBox="0 0 11 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.17842 14.3979C5.17842 14.3979 1.04403 9.85738 0.623956 5.91975C0.598746 5.71372 0.582031 5.506 0.582031 5.29266C0.582031 2.50802 2.78295 0.25039 5.49766 0.25039C8.21236 0.25039 10.4133 2.50802 10.4133 5.29266C10.4133 5.50235 10.3966 5.70838 10.3722 5.9116C9.96252 9.8512 5.88704 14.3979 5.88704 14.3979C5.81333 14.4814 5.74235 14.5354 5.67385 14.5733C5.67303 14.5742 5.67138 14.5742 5.67029 14.575C5.62316 14.6003 5.57657 14.6191 5.53273 14.6191C5.48889 14.6191 5.4423 14.6003 5.39517 14.575C5.39408 14.5742 5.39243 14.5742 5.39161 14.5733C5.32311 14.5354 5.25214 14.4814 5.17842 14.3979ZM5.49766 2.04929C3.75435 2.04929 2.33575 3.50472 2.33575 5.29266C2.33575 7.08089 3.75435 8.53603 5.49766 8.53603C7.24096 8.53603 8.65956 7.08089 8.65956 5.29266C8.65956 3.50472 7.24096 2.04929 5.49766 2.04929Z"
                  fill="white"
                />
              </svg>
              <p
                style={{
                  marginLeft: '10px',
                }}
              >
                Gilgit, Pakistan
              </p>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
