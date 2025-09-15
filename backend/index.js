const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));

app.get('/health', (req, res) => res.json({ ok: true }));

app.post('/api/trade', (req, res) => {
  // placeholder: call your algo here using env keys
  res.json({ status: 'ok', received: req.body });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening on', port));
