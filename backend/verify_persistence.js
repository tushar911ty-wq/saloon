const http = require('http');

function request(method, path, data) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: path,
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        if (data) {
            options.headers['Content-Length'] = Buffer.byteLength(JSON.stringify(data));
        }

        const req = http.request(options, (res) => {
            let body = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    try {
                        resolve(JSON.parse(body));
                    } catch (e) {
                        resolve(body);
                    }
                } else {
                    reject(new Error(`Request failed with status ${res.statusCode}: ${body}`));
                }
            });
        });

        req.on('error', (e) => reject(e));

        if (data) {
            req.write(JSON.stringify(data));
        }
        req.end();
    });
}

async function runTest() {
    try {
        console.log('--- Testing Contact Form Persistence ---');
        const testContact = {
            name: `Test User ${Date.now()}`,
            email: 'test@example.com',
            phone: '1234567890',
            message: 'Persistence test message'
        };

        console.log('Sending POST request to /api/contact...');
        await request('POST', '/api/contact', testContact);
        console.log('POST successful.');

        console.log('Sending GET request to /api/messages...');
        const messages = await request('GET', '/api/messages');

        const foundContact = messages.find(m => m.name === testContact.name);
        if (foundContact) {
            console.log('SUCCESS: Contact found in retrieved messages.');
        } else {
            console.error('FAILURE: Contact NOT found in retrieved messages.');
            process.exit(1);
        }

        console.log('\n--- Testing Newsletter Persistence ---');
        const testSubscriber = {
            email: `subscriber${Date.now()}@test.com`
        };

        console.log('Sending POST request to /api/newsletter...');
        await request('POST', '/api/newsletter', testSubscriber);
        console.log('POST successful.');

        console.log('Sending GET request to /api/subscribers...');
        const subscribers = await request('GET', '/api/subscribers');

        const foundSubscriber = subscribers.find(s => s.email === testSubscriber.email);
        if (foundSubscriber) {
            console.log('SUCCESS: Subscriber found in retrieved subscribers.');
        } else {
            console.error('FAILURE: Subscriber NOT found in retrieved subscribers.');
            process.exit(1);
        }

        console.log('\nALL TESTS PASSED');

    } catch (error) {
        console.error('Test failed:', error.message);
        process.exit(1);
    }
}

runTest();
