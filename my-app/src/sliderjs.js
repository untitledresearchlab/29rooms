import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';

function MyComponent() {
    const [value, setValue] = useState(50);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        sendDataToServer(newValue);
    };

    const sendDataToServer = (data) => {
        fetch('/api/send-data-to-server', {
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
    };

    return (
        <Slider value={value} onChange={handleChange} />
    );
}

app.post('/api/send-data-to-server', (req, res) => {
    const { value } = req.body;
    console.log(`Received value: ${value}`);
    res.send({ success: true });
});