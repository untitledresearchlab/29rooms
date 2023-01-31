import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { ThemeProvider,createTheme } from '@mui/material/styles';

import './App.css';






const image1 = [
    {
        url: 'http://192.168.1.202:5000/indo.jpg',
        title: 'Indonesia',
        width: '100%',


    },


];

const image2 = [
    {
        url: 'http://192.168.1.202:5000/southkorea.jpeg',
        title: 'Korea',
        width: '100%',


    },


];

const image3 = [
    {
        url: 'http://192.168.1.202:5000/malaysia.jpg',
        title: 'Malaysia',
        width: '100%',


    },


];

const image4 = [
    {
        url: 'http://192.168.1.202:5000/philippines.jpg',
        title: 'Philippines',
        width: '100%',


    },


];

const image5 = [
    {
        url: 'http://192.168.1.202:5000/singapore.jpg',
        title: 'Singapore',
        width: '100%',


    },


];

const image6 = [
    {
        url: 'http://192.168.1.202:5000/thailand.jpeg',
        title: 'Thailand',
        width: '100%',


    },


];

const image7 = [
    {
        url: 'http://192.168.1.202:5000/vietnam.jpeg',
        title: 'Vietnam',
        width: '100%',


    },


];


const theme = createTheme({
    typography: {
        fontFamily: [
            'Samsung Sharp Sans Bold',
            'sans-serif',
        ].join(','),
    },
});


const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 150,
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

     var [value, setValue] = useState(0.0);
 
     var handleChange = (event, newValue) => {
         setValue(newValue);
         sendDataToServer(newValue);
         console.log(newValue);
     };
 
     var sendDataToServer = (data) => {
         fetch('http://192.168.1.202:5000/api/send-data-to-server', {
             method: 'POST',
 
             headers:
                 { 'Content-Type': 'application/json' },
                  'body': JSON.stringify({ value: data })
         });


       /*  fetch('http://192.168.1.202:5000/sendvalue')
             .then((response) => {
                 return response.text();
             })
             .then((myJson) => {
                 console.log(myJson);
             });
             */



     };

   /* const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
        socket.emit('slider', event.target.value);
    };*/
    function resetSlider1() {
        setValue(-0.61);
        timeline1();
    }

    function resetSlider2() {
        setValue(-0.61);
        timeline2();
    }

    function resetSlider3() {
        setValue(-0.61);
        timeline3();
    }

    function resetSlider4() {
        setValue(-0.61);
        timeline4();
    }

    function resetSlider5() {
        setValue(-0.61);
        timeline5();
    }

    function resetSlider6() {
        setValue(-0.61);
        timeline6();
    }

    function resetSlider7() {
        setValue(-0.61);
        timeline7();
        sendDataToServer();
    }

    return (

        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>

            {image1.map((image1) => (
                <ImageButton
                    onClick={resetSlider1}
                    
                    focusRipple
                    key={image1.title}
                    style={{
                        width: image1.width,
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image1.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="h4"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image1.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>

                    </Image>

                </ImageButton>
            ))}
            {image2.map((image2) => (
                <ImageButton
                    onClick={resetSlider2}
                    focusRipple
                    key={image2.title}
                    style={{
                        width: image2.width,
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image2.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="h4"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image2.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>

                    </Image>

                </ImageButton>
            ))}
            {image3.map((image3) => (
                <ImageButton
                    onClick={resetSlider3}
                    focusRipple
                    key={image3.title}
                    style={{
                        width: image3.width,
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image3.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="h4"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image3.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>

                    </Image>

                </ImageButton>
            ))}
            {image4.map((image4) => (
                <ImageButton
                    onClick={resetSlider4}
                    focusRipple
                    key={image4.title}
                    style={{
                        width: image4.width,
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image4.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            
                            component="span"
                            variant="h4"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image4.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>

                    </Image>

                </ImageButton>

            ))}
            {image5.map((image5) => (
                <ImageButton
                    onClick={resetSlider5}
                    focusRipple
                    key={image5.title}
                    style={{
                        width: image5.width,
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image5.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="h4"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image5.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>

                    </Image>

                </ImageButton>
            ))}
            {image6.map((image6) => (
                <ImageButton
                    onClick={resetSlider6}
                    focusRipple
                    key={image6.title}
                    style={{
                        width: image6.width,
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image6.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="h4"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image6.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>

                    </Image>

                </ImageButton>
            ))}

            {image7.map((image7) => (
                <ImageButton
                    onClick={resetSlider7}
                    focusRipple
                    key={image7.title}
                    style={{
                        width: image7.width,
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image7.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="h4"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image7.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>

                    </Image>

                </ImageButton>
            ))}




            
                <Typography
                    component="span"
                    variant="body5"
                    color="inherit"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 1.5,
                        pb: (theme) => `calc(${theme.spacing(1)} )`,
                    }}
                >
                   
                </Typography>

            





            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                value={value}
                onChange={handleChange}
                min={-3.4}
                max={2.16}
                defaultValue={0.0}
                step={0.01}
            />

        </Box>
        </ThemeProvider>

    );
}

const PrettoSlider = styled(Slider)({
    color: '#ffff',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#ffff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#12279e',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

function timeline1() {

    fetch('http://192.168.1.202:5000/indonesia')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });

}

function timeline2() {

    fetch('http://192.168.1.202:5000/korea')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });
}

function timeline3() {
    fetch('http://192.168.1.202:5000/malaysia')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });

}


function timeline4() {
    fetch('http://192.168.1.202:5000/philippines')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function timeline5() {
    fetch('http://192.168.1.202:5000/singapore')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function timeline6() {
    fetch('http://192.168.1.202:5000/thailand')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function timeline7() {
    fetch('http://192.168.1.202:5000/vietnam')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}


