const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://127.0.0.1:5173'}));

const AllBookRoutes = require('./routes/book.routes');
AllBookRoutes(app);


app.listen(port, () => {console.log(`Listening on port ${port}`)});