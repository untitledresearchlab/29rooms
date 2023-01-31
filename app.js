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

var client = udp.createSocket('udp4');

const oscPort = new osc.UDPPort({ localAddress: '192.168.1.202' });
 oscPort.open({port : 8000});


app.use(express.static('public'));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
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








//content trigger

app.get('/indonesia', indonesia);
app.get('/korea', korea);
app.get('/malaysia', malaysia);
app.get('/philippines', philippines);
app.get('/singapore', singapore);
app.get('/korea', korea);
app.get('/thailand', thailand);
app.get('/vietnam', vietnam);




function indonesia(req, res) {
    
    oscPort.send({
        timeTag: osc.timeTag(0),
        packets: [{ address: '/cues/selected/scenes/by_cell/col_1' },
        ],
    }, '192.168.1.202', 8000);
    client.stop();
    console.log('indonesia video is playing');
}

function korea(req, res) {
    
    oscPort.send({
        timeTag: osc.timeTag(0),
        packets: [{ address: '/cues/selected/scenes/by_cell/col_2' },
        ],
    }, '192.168.1.202', 8000);
    client.stop();
    console.log('korea video is playing');
}

function malaysia(req, res) {
    oscPort.send({
        timeTag: osc.timeTag(0),
        packets: [{ address: '/cues/selected/scenes/by_cell/col_3' },
        ],
    }, '192.168.1.202', 8000);
    client.stop();
    console.log('malaysia video is playing');
   
}

function philippines(req, res) {
    oscPort.send({
        timeTag: osc.timeTag(0),
        packets: [{ address: '/cues/selected/scenes/by_cell/col_4' },
        ],
    }, '192.168.1.202', 8000);
    client.stop();
    console.log('philippines video is playing');
}

function singapore(req, res) {
    oscPort.send({
        timeTag: osc.timeTag(0),
        packets: [{ address: '/cues/selected/scenes/by_cell/col_5' },
        ],
    }, '192.168.1.202', 8000);
    client.stop();
    console.log('singapore video is playing');
}

function thailand(req, res) {
    oscPort.send({
        timeTag: osc.timeTag(0),
        packets: [{ address: '/cues/selected/scenes/by_cell/col_6' },
        ],
    }, '192.168.1.202', 8000);
    client.stop();
    console.log('thailand video is playing');
}


function vietnam(req, res) {
    oscPort.send({
        timeTag: osc.timeTag(0),
        packets: [{ address: '/cues/selected/scenes/by_cell/col_7' },
        ],
    }, '192.168.1.202', 8000);
    client.stop();
    console.log('vietnam video is playing');
}

///////////////////





app.post('/api/send-data-to-server', (req, res) => {

 res.send({ success: true });
    console.log('received:'+ req.body.value)

    newFunction(req);


});



//app.get('/sendvalue', sendvalue);

function newFunction(req) {
    var json = req.body.value;
    var data = JSON.parse(json);
    let floatval = parseFloat(data);
    let float = +(Number(floatval));
    console.log(`sent${float}`);

    oscPort.send({
        timeTag: osc.timeTag(0),
        packets: [{ address: '/surfaces/Quad-2/input/x', args: float },
        ],
    }, '192.168.1.202', 8000);
}

//function sendvalue(req, res) {

    
  
//};






