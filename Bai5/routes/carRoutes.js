const express = require('express');
const router = express.Router();
const db = require('../models/db');
const { logSuccess, logError } = require('../middlewares/logger');

router.post('/', async (req, res) => {
  try {
    const { brand, model, year } = req.body;
    await db.execute('INSERT INTO cars (brand, model, year) VALUES (?, ?, ?)', [brand, model, year]);
    logSuccess(req, 'Created new car');
    res.status(201).json({ message: 'Car created' });
  } catch (err) {
    logError(req, err.message);
    res.status(500).json({ error: 'Failed to create car' });
  }
});

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM cars');
    logSuccess(req, 'Fetched cars list');
    res.json(rows);
  } catch (err) {
    logError(req, err.message);
    res.status(500).json({ error: 'Failed to fetch cars' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { brand, model, year } = req.body;
    await db.execute('UPDATE cars SET brand = ?, model = ?, year = ? WHERE id = ?', [brand, model, year, req.params.id]);
    logSuccess(req, `Updated car id ${req.params.id}`);
    res.json({ message: 'Car updated' });
  } catch (err) {
    logError(req, err.message);
    res.status(500).json({ error: 'Failed to update car' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await db.execute('DELETE FROM cars WHERE id = ?', [req.params.id]);
    logSuccess(req, `Deleted car id ${req.params.id}`);
    res.json({ message: 'Car deleted' });
  } catch (err) {
    logError(req, err.message);
    res.status(500).json({ error: 'Failed to delete car' });
  }
});

module.exports = router;
