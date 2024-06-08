import * as React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/joy/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

export default function ColorInversionMarketing() {
  const [color, setColor] = React.useState('primary');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        flexGrow: 1,
        display: 'flex',
        bgcolor: color === 'primary' ? '#09824b' : undefined,
        p: { xs: '36px', md: '70px' },
        pt: { xs: '24px', md: '60px' },
        borderRadius: '',
        overflow: 'hidden',
        '& button': { borderRadius: 'xl' },
      }}
    >
      <Box sx={{ zIndex: 1, position: 'relative' }}>
        <Typography level="h2" >Get started</Typography>
        <Typography sx={{ mt: 0.5, mb: 2 }}>
          Start shopping with the advanced technology.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            maxWidth: 'max-content',
            '& > *': { flexGrow: 1, fontWeight: 'lg' },
          }}
        >
        <a href="https://github.com/SarathA9/E-Commerce-ReactApp" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button sx={{ minWidth: 8, maxWidth:80 }}>
                <GitHubIcon />GitHub
            </Button>
        </a>
        </Box>
      </Box>
      <Box
        component="img"
        alt=""
        src="https://storage.googleapis.com/cms-storage-bucket/72521e62275b24d3c37d.png"
        sx={{ position: 'absolute', height: '100%', top: 0, right: 0 }}
      />
    </Sheet>
  );
}