const express = require('express');
const app = express();
const carRoutes = require('./routes/carRoutes');
const { loggerMiddleware } = require('./middlewares/logger');


app.use(express.json());
app.use(loggerMiddleware);

app.use('/api/cars', carRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(3000, () => {
  console.log(' Car API server running at http://localhost:3000');
});
