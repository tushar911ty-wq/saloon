const http = require('http');

function postData(path, data) {
    return new Promise((resolve, reject) => {
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
            let body = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                const status = res.statusCode;
                console.log(`[${path}] Status: ${status}`);
                try {
                    const parsed = JSON.parse(body);
                    console.log(`[${path}] Response:`, parsed);
                    resolve({ status, body: parsed });
                } catch (e) {
                    console.log(`[${path}] Response: ${body}`);
                    resolve({ status, body });
                }
            });
        });

        req.on('error', (e) => {
            console.error(`[${path}] Error: ${e.message}`);
            reject(e);
        });

        req.write(dataString);
        req.end();
    });
}

async function runTests() {
    console.log("Starting backend tests...");

    try {
        await postData('/api/contact', {
            name: "Test User",
            email: "test@example.com",
            phone: "1234567890",
            message: "Hello from improved test"
        });

        console.log("\nWaiting 2 seconds before next test...");
        await new Promise(resolve => setTimeout(resolve, 2000));

        await postData('/api/newsletter', {
            email: "subscriber@test.com"
        });

        console.log("\nAll tests completed successfully.");
    } catch (error) {
        console.error("Test suite failed:", error);
    }
}

runTests();
