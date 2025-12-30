import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Backend API 🚀' });
});

app.listen(5000, '0.0.0.0', () => {
  console.log('Backend running on port 5000');
});
