// const statik = require('node-static');

// var fileServer = new statik.Server(".");
// console.log(fileServer)

// require('http').createServer(function (request, response) {
//     request.addListener('end', function () {
//         fileServer.serve(request, response);
//     }).resume();
// }).listen(8080);

const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
    return handler(request, response, {
        "public": "D:/OLD/Downloads/"
    });
})

server.listen(3000, () => {
    console.log('Running at http://localhost:3000');
});


            <script src="../node_modules/qrcode/build/qrcode.min.js"></script>
            <script>
                QRCode.toCanvas(document.getElementById('canvas'), 'http://puskarbharti.me/', function (error) {
                    if (error) console.error(error)
                    console.log('success!');
                })
            </script>

function getd() {
    console.log(document.getElementById("myFile").files[0].path)
}