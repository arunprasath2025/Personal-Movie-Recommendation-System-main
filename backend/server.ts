require('dotenv').config({ path: '.environment/.dev.env' });

const express = require("express");

const http = require("http");

import { router as flightroute } from './src/routes/routes';

const cors = require("cors");

const app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


app.use(express.json({ limit: '100mb' }));

app.use('/', flightroute);

const port = process.env.PORT || 80
http
  .createServer(app)
  .listen(port, () =>
    console.log(`Server is running on port ${port}`)
  );
