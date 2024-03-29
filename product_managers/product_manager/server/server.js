const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
app.use(cors())

require("../server/config/mongoose.config");
app.use(express.json(), express.urlencoded({extended:true}));

const AllMyProductRoutes = require('./routes/product.routes');
AllMyProductRoutes(app);





app.listen(port, ()=>console.log(" The server is up and running on "+ port))