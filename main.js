const Express = require("express");
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static('public'));

app.use(require("./global/auth.js"));
app.use(require("./global/others.js"));

const port = 3551;

app.listen(port, () => {
    console.clear();
    console.log("(Port: " + port + ")");

});