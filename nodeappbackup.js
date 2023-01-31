var udp = require('dgram');
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
var cors = require('cors')
const cron = require("node-cron");
var wintools = require('wintools');
const axios = require('axios');
const bodyparser = require('body-parser');

var client = udp.createSocket('udp4');

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

const osc = require('osc');
const oscPort = new osc.UDPPort({ localAddress: '0.0.0.0' });
oscPort.open({ port: 8000 });


app.get('/wakewo1', wakeWatchout1);
app.get('/delay', delay);


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

//Turn On equipment

function wakeWatchout1() {
    // wake on lan
    var wol1 = require('wake_on_lan');
    wol1.wake('E0D55EE619BF');

    wol1.wake('E0D55EE619BF', function (error) {
        if (error) {
            // handle error
        } else {
            // done sending packets
        }
    });

    var magic_packet = wol1.createMagicPacket('E0:D5:5E:E6:19:BF');

    //.
    // e0:d5:5e:e6:19:bf


    console.log("System Turned On");

}



//Turn Off equipment

app.get('/shutwo1', shutdownWatchout1);



var shutdownWatchout1 = Buffer.from("authenticate 1  \npowerDown");


function shutdownWatchout1(req, res) {
    client.send(shutdownWatchout1, 0, shutdownWatchout1.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST + ':' + PORT);
        console.log(bytes);
        //client.close();
        // res.send('Send message to Watchout');
        console.log('Shutting down Internal Display');
    });

}




//INTERNAL TIMELINE

app.get('/indonesia', indonesia);
app.get('/japan', japan);
app.get('/china', china);
app.get('/southkorea', southkorea);
app.get('/vietnam', vietnam);



var timeline1 = Buffer.from("authenticate 1    \nreset \nrun \"indonesia\"");
var timeline2 = Buffer.from("authenticate 1    \nreset \nrun \"japan\"");
var timeline3 = Buffer.from("authenticate 1    \nreset \nrun \"china\"");
var timeline4 = Buffer.from("authenticate 1    \nreset \nrun \"southkorea\"");
var timeline5 = Buffer.from("authenticate 1    \nreset  \nrun \"vietnam\"");
var slider = Buffer.from("\nsetInput \"haha\"");


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
    client.send(southkorea, 0, southkorea.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST + ':' + PORT);
        console.log(bytes);
        //  client.close();
        res.send('Play Capture Timeline');

    });
}

function vietnam(req, res) {
    client.send(vietnam, 0, vietnam.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST + ':' + PORT);
        console.log(bytes);
        //  client.close();
        res.send('Play Capture Timeline');

    });
}




app.post('/api/send-data-to-server', (req, res) => {
    const { value } = req.body;

    console.log(`Received value: ${value}`);
    res.send({ success: true });
    console.log(req.body)

    var number = JSON.stringify(req.body);

    oscPort.send({
        timeTag: osc.timeTag(0),
        packets: [{ address: '/cues/selected/scenes/by_cell/col_1' },
        ],
    }, '192.168.1.202', 8000);
    //client.close();
    res.send('Playing All Videos on Internal Display');

});




/*app.use((req, res, next) => {
    console.log(req.body)
    n
    const message = req.body;
    client.send(slider , 0, slider.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST + ':' + PORT);
        console.log(bytes);
          client.close();
        

    });
}); */

