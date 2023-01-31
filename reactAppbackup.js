import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';



const image1 = [
    {
        url: 'http://192.168.1.202:5000/china.jpeg',
        title: 'China',
        width: '100%',


    },


];

const image2 = [
    {
        url: 'http://192.168.1.202:5000/indonesia.jpeg',
        title: 'Indonesia',
        width: '100%',


    },


];

const image3 = [
    {
        url: 'http://192.168.1.202:5000/japan.jpg',
        title: 'Japan',
        width: '100%',


    },


];

const image4 = [
    {
        url: 'http://192.168.1.202:5000/southkorea.jpeg',
        title: 'South Korea',
        width: '100%',


    },


];

const image5 = [
    {
        url: 'http://192.168.1.202:5000/vietnam.jpeg',
        title: 'Vietnam',
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

    const [value, setValue] = useState(1.0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        sendDataToServer(newValue);
    };

    const sendDataToServer = (data) => {
        fetch('http://192.168.1.202:5000/api/send-data-to-server', {
            method: 'POST',
            body: JSON.stringify({ value: data }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (



        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {image1.map((image1) => (
                <ImageButton
                    onClick={timeline1}
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
                            variant="subtitle1"
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
                    onClick={timeline2}
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
                            variant="subtitle1"
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
                    onClick={timeline3}
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
                            variant="subtitle1"
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
                    onClick={timeline4}
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
                            variant="subtitle1"
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
                    onClick={timeline5}
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
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 10,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image5.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>

                    </Image>

                </ImageButton>
            ))}








            <Slider
                value={value}
                onChange={handleChange}
                defaultValue={0}
                min={-1000}
                max={1000}

            />



        </Box>


    );
}



function timeline1() {

    fetch('http://192.168.1.202:5000/china')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });
}

function timeline2() {

    fetch('http://192.168.1.202:5000/indonesia')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });
}

function timeline3() {
    fetch('http://192.168.1.202:5000/timeline3')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });

}


function timeline4() {
    fetch('http://192.168.1.202:5000/timeline5')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}

function timeline5() {
    fetch('http://192.168.1.202:5000/timeline5')
        .then((response) => {
            return response.text();
        })
        .then((myJson) => {
            console.log(myJson);
        });


}