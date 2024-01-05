const express = require('express');
const routes =require('./routes/index')
const app = express();
const port = 4000;
app.use('/',routes)
// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
