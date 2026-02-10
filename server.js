// server.js
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// IMPORT CONFIG
const config = require('./config_server');

// HOST FRONTEND
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/api/link/:user', async (req, res) => {
    const userKey = req.params.user;
    console.log(`\n🤖 Request received for: ${userKey}`);

    if (!config.users[userKey]) return res.status(404).send("User not defined");

    try {
        const response = await axios.post(config.BASE_URL, {
            clientUserId: config.users[userKey].clientUserId,
            formValues: config.users[userKey].formValues,
            returnUrl: "https://placehold.co/1000x800/FFFFFF/000000?text=Submission+Successful!+Return+to+Dashboard",
            expirationOffset: 120 // 120 Hours = 5 Days
        }, {
            headers: { 
                'Authorization': `Bearer ${config.TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        // LOGIC TO COMBINE URL + TOKEN
        const base = response.data.formUrl;
        const token = response.data.instanceToken;

        let finalUrl;
        if (base && token) {
            finalUrl = `${base}#instanceToken=${token}`;
        } else {
            finalUrl = response.data.instanceUrl || response.data.formUrl || response.data.url;
        }
        
        console.log("🔗 Generated URL for", userKey);
        res.json({ url: finalUrl });

    } catch (error) {
        console.error("❌ ERROR:");
        if (error.response) {
            console.error(JSON.stringify(error.response.data, null, 2));
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    }
});

app.listen(3000, () => console.log('\n🚀 Demo running at http://localhost:3000\n'));