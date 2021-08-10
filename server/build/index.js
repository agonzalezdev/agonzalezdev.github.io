"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = process.env.PORT || 3001;
app.get("/api", function (req, res) {
    res.json({ message: "Hello from server!" });
});
var corsOpts = {
    origin: '*',
    methods: [
        'GET',
        'POST',
    ],
    allowedHeaders: [
        'Content-Type',
    ],
};
app.use(cors_1.default(corsOpts));
//@ts-ignore
app.listen(PORT, function (err) {
    if (err) {
        return console.error(err);
    }
    return console.log("server is listening on " + PORT);
});
