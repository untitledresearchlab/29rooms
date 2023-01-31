import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const images = [
    {
        url: 'https://images.unsplash.com/photo-1496939376851-89342e90adcd',
        title: 'Singapore',
        width: '100%',


    },
    {
        url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd',
        title: 'Japan',
        width: '100%',
    },
    {
        url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
        title: 'America',
        width: '100%',
    },
    {
        url: 'https://images.unsplash.com/photo-1513326738677-b964603b136d',
        title: 'Russia',
        width: '100%',
    },
    {
        url: 'https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118',
        title: 'London',
        width: '100%',
    },


];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {images.map((image) => (
                <ImageButton
                    focusRipple
                    key={image.title}
                    style={{
                        width: image.width,
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>

                    </Image>

                </ImageButton>
            ))}
        </Box>
    );
}


function wakewo1() {

    fetch('http://192.168.1.3:5000/wakewo1')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });
}

function wakewo2() {

    fetch('http://192.168.1.3:5000/wakewo2')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });
}

function shutwo1() {
    fetch('http://192.168.1.3:5000/shutwo1')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });

}


function shutwo2() {
    fetch('http://192.168.1.3:5000/shutwo2')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}
