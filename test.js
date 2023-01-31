var udp = require('dgram');
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
var cors = require('cors')
const cron = require("node-cron");
var wintools = require('wintools');
const axios = require('axios');
const bodyparser = require('body-parser');
const osc = require('osc');
const nodeosc = require('node-osc');
const io = require("socket.io")(client);
//var client = udp.createSocket('udp4');


const oscPort = new osc.UDPPort({ localAddress: '192.168.1.202' });
oscPort.open({ port: 8000 });

var client = new osc.UDPPort({
    localAddress: "192.168.1.202",
    localPort: 8000,
    remoteAddress: "192.168.1.202",
    remotePort: 8000
});
client.open();



//WO Display 1 IpAddress INTERNAL
var PORT = 3040;
var PORT2 = 3040;
//var HOST = '192.168.1.78';
var HOST = '192.168.1.202';


app.use(express.static('public'));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

var whitelist = ['http://localhost']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}


app.use(cors())
app.options(corsOptions, cors());


// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}




io.on('connection', function (socket) {
    socket.on('slider', function (data) {
        client.send({
            address: '/surfaces/Quad-1/input/x',
            args: [
                {
                    type: 'f',
                    value: data
                }
            ]
        }, "192.168.1.202", 8000);
    });
});


app.get('/indonesia', indonesia);
app.get('/japan', japan);
app.get('/china', china);
app.get('/southkorea', southkorea);
app.get('/vietnam', vietnam);




function indonesia(req, res) {
    
    oscPort.send({
        timeTag: osc.timeTag(0),
        packets: [{ address: '/cues/selected/scenes/by_cell/col_2' },
        ],
    }, '192.168.1.202', 8000);
   // client.close();
    res.send('Playing All Videos on Internal Display');;
}

function japan(req, res) {
    
    client.send(japan, 0, japan.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST + ':' + PORT);
        console.log(bytes);
        //  client.close();
        res.send('Play Japan timeline');

    });
}

function china(req, res) {
    oscPort.send({
        timeTag: osc.timeTag(0),
        packets: [{ address: '/cues/selected/scenes/by_cell/col_1' },
        ],
    }, '192.168.1.202', 8000);
    //client.close();
     res.send('Playing All Videos on Internal Display');
   
}

function southkorea(req, res) {

    client.send(japan, 0, japan.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST + ':' + PORT);
        console.log(bytes);
        //  client.close();
        res.send('Play Japan timeline');

    });
}

function vietnam(req, res) {

    client.send(japan, 0, japan.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST + ':' + PORT);
        console.log(bytes);
        //  client.close();
        res.send('Play Japan timeline');

    });
}



