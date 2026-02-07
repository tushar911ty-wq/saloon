const http = require('http');

function postData(path, data) {
    const dataString = JSON.stringify(data);
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': dataString.length
        }
    };

    const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    });

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    req.write(dataString);
    req.end();
}

console.log("Testing /api/contact...");
postData('/api/contact', {
    name: "Test User",
    email: "test@example.com",
    phone: "1234567890",
    message: "Hello form test"
});

setTimeout(() => {
    console.log("\nTesting /api/newsletter...");
    postData('/api/newsletter', {
        email: "subscriber@test.com"
    });
}, 2000);
