import Cors from "cors";
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const corsOpts = {
origin: '*',
methods: [
  'GET',
  'POST',
],

allowedHeaders: [
  'Content-Type',
],
};

app.use(Cors(corsOpts));

//@ts-ignore
app.listen(PORT, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});