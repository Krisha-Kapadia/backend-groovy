const express = require('express');
const app = express();

const musicRoutes = require('./musicRoutes');
const cors = require('cors');
app.use(cors());
app.use(musicRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!'); 
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});