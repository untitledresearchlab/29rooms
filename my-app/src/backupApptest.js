import * as React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,

    };
}


export default function MyApp() {
    return (
        <ImageList
            
            rowHeight={250}
            gap={0}
        >
            {itemData.map((item) => {
                const cols = item.featured ? 1 : 7;
                const rows = item.featured ? 0 : 1;

                return (
                    <ImageListItem key={item.img} cols={cols} rows={rows}>
                        <img
                            {...srcset(item.img, 250, 200, rows, cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }}
                            //title={item.title}
                            
                            position="bottom"
                            actionIcon={
                                <Box width={300}>
                                    <Button size="large" color="success">Primary</Button>
                                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                                </Box>
                                
                            }


                            actionPosition="right - 2"

                        />
                    </ImageListItem>
                );
            })}
        </ImageList>
    
    );
}



const itemData = [
 
    {
        img: 'https://images.unsplash.com/photo-1496939376851-89342e90adcd',
        title: 'Singapore',
        author: '@rollelflex_graphy726',

    },
  
    {
        img: 'https://images.unsplash.com/photo-1480796927426-f609979314bd',
        title: 'Japan',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
        title: 'America',
        author: '@hjrc33',
    },

    
    {
        img: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b',
        title: 'China',
        author: '@katie_wasserman',
    },
  
    {
        img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d',
        title: 'Russia',
        author: '@shelleypauls',
    },
  
    {
        img: 'https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118',
        title: 'London',
        author: '@southside_customs',
    },
];


/*const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
]; */