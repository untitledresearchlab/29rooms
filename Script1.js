


/*
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))


 // var json = '{"value": 0.5}';
    var data = JSON.parse(data);

    var client = new nodeosc.Client('192.168.1.202', 8000);

    // Send the data to the /jsonValue endpoint 
    client.send('/surfaces/Quad-1/input/x', data.value, function () {
        // Message has been sent
    });





app.get('/api/send-data-to-server', (req, res) => {

   
   

});

app.use((req, res, next) => {
    const udpPort2 = new osc.UDPPort({
    localAddress: "192.168.1.202",
    localPort: 8000
});

const values = req.body;

const json_msg = new osc.Message("/surfaces/Quad-1/input/x", values);
udpPort2.send(json_msg);
}); 


const message = new osc.Message('/surfaces/Quad-1/input/x');
const json = { some: 'value' };
message.append(JSON.stringify(json));

const udpPort = new osc.UDPPort({
    localAddress: "192.168.1.202",
    localPort: 8000
});

udpPort.open();
udpPort.send(message);
*/


/*


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
*/

/*
//Turn On equipment

//WO Display 1 IpAddress INTERNAL
var PORT = 3040;
var PORT2 = 3040;
//var HOST = '192.168.1.78';
var HOST = '192.168.1.202';

app.get('/wakewo1', wakeWatchout1);

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
*/


app.get('/api/send-data-to-server', (req, res) => {


    // Parse the received JSON string
    var { value } = req.data;
    var json = { value };
    var data = JSON.parse(json);

    var client = new osc.Client('192.168.1.202', 8000);

    // Send the data to the /jsonValue endpoint 
    client.send('/surfaces/Quad-1/input/x', data.value, function () {
        // Message has been sent


    });

});


app.use('/api/send-data-to-server', (req, res) => {

    //const { value } = req.body.data;
    //  console.log(`Received value: ${value}`);
    res.send({ success: true });
    console.log(req.body)
    //  let jsonString = req.body;
    // const obj = JSON.parse(jsonString);
});