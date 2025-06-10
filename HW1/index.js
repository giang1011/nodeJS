const express = require('express');
const cors = require('cors'); 
const app = express();
app.use(cors());  

app.use(express.json()); 
app.post('/add', (req, res) => {
    console.log("Body:", req.body);
    const { a, b } = req.body;
    const result = parseFloat(a) + parseFloat(b);
    res.json({ result });
});


app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    if (a == null || b == null) {
        return res.status(400).json({ error: "Missing a or b" });
    }
const result = parseFloat(a) - parseFloat(b);
    res.status(200).json({ result });
});

app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    const result = parseFloat(a) * parseFloat(b);
    res.json({ result });
});

app.post('/divide', (req, res) => {
    const { a, b } = req.body;
    if (parseFloat(b) === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }
    const result = parseFloat(a) / parseFloat(b);
    res.json({ result });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
