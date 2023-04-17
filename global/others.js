const Express = require("express");
const app = Express();

app.get("/content/api/pages/*", async (req, res) => {
    res.json({})
})

app.get("/fortnite/api/versioncheck*", async (req, res) => {
    res.json({
        "type": "NO_UPDATE"
    })
})

app.get("/waitingroom/api/waitingroom", async (req, res) => {
    res.status(204);
    res.end();
})

app.get("/account/api/epicdomains/ssodomains", async (req, res) => {
    res.json([])
})

app.get("/eulatracking/api/shared/agreements/fn*", async (req, res) => {
    res.json({})
})

app.post("/fortnite/api/game/v2/tryPlayOnPlatform/account/*", async (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.send(true);
})

app.get("/lightswitch/api/service/bulk/status", async (req, res) => {
    res.json([{
            "serviceInstanceId": "fortnite",
            "status": "UP",
            "banned": false,
        }])
})

app.get("/fortnite/api/game/v2/enabled_features", async (req, res) => {
    res.json([])
})

app.post("/fortnite/api/game/v2/grant_access/*", async (req, res) => {
    res.json({});
    res.status(204);
})


module.exports = app;