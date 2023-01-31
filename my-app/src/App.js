import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';

export default function ColorTextFields() {

    
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField label="Outlined secondary" color="secondary" focused />
            <Fab variant="extended">
                
                Submit
            </Fab>
            
        </Box>
    );
}