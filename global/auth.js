const Express = require("express");
const app = Express();
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const iniparser = require("ini");

app.post("/datarouter/api/v1/public/data", async (req, res) => {
    res.status(204);
    res.end();
})

app.post("/account/api/oauth/token", async (req, res) => {
    res.json({
        "access_token": "token",
        "expires_in": 28800,
        "expires_at": "9999-12-02T01:12:01.100Z",
        "token_type": "bearer",
        "refresh_token": "token",
        "refresh_expires": 86400,
        "refresh_expires_at": "9999-12-02T01:12:01.100Z",
        "account_id": "accountid",
        "client_id": "clientid",
        "internal_client": true,
        "client_service": "fortnite",
        "displayName": "Backend Template",
        "app": "fortnite",
        "in_app_id": "appid",
        "device_id": "devideid"
    })
})

app.get("/fortnite/api/cloudstorage/system", async (req, res) => {
    const dir = path.join(__dirname, "..", "cloud")
    var CloudFiles = [];

    fs.readdirSync(dir).forEach(name => {
        if (name.toLowerCase().endsWith(".ini")) {
            const ParsedFile = fs.readFileSync(path.join(dir, name), 'utf-8');
            const ParsedStats = fs.statSync(path.join(dir, name));

            CloudFiles.push({
                "uniqueFilename": name,
                "filename": name,
                "hash": crypto.createHash('sha1').update(ParsedFile).digest('hex'),
                "hash256": crypto.createHash('sha256').update(ParsedFile).digest('hex'),
                "length": ParsedFile.length,
                "contentType": "application/octet-stream",
                "uploaded": ParsedStats.mtime,
                "storageType": "S3",
                "storageIds": {},
                "doNotCache": true
            })
        }
    });

    res.json(CloudFiles)
})

app.delete("/account/api/oauth/sessions/kill", async (req, res) => {
    res.status(204);
    res.end();
})

app.delete("/account/api/oauth/sessions/kill/*", async (req, res) => {
    res.status(204);
    res.end();
})

app.get("/account/api/public/account/:accountId", async (req, res) => {
    res.json({
        "id": "id",
        "displayName": "Template Backend",
        "name": "Template Backend",
        "email": "backend@template.com",
        "failedLoginAttempts": 0,
        "lastLogin": new Date().toISOString(),
        "numberOfDisplayNameChanges": 0,
        "ageGroup": "UNKNOWN",
        "headless": false,
        "country": "US",
        "lastName": "Server",
        "preferredLanguage": "en",
        "canUpdateDisplayName": false,
        "tfaEnabled": false,
        "emailVerified": true,
        "minorVerified": false,
        "minorExpected": false,
        "minorStatus": "UNKNOWN"
    })
})

app.get("/account/api/public/account/*/externalAuths", async (req, res) => {
    res.json([])
})

module.exports = app;