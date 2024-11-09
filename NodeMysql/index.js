const express = require('express');
const db = require('./mysqlDB');
const app = express();

// Middleware to parse JSON body data
app.use(express.json());


app.get('/bank', (req, res) => {
    const query = 'SELECT * FROM bank';
    db.query(query, (err, results) => {
        if (err) {
            // if not .status(500) then it will be 200 because of the callback
            return res.status(500).send(err);
        }
        res.send(results);
    });
});


app.post('/bank', (req, res) => {
    const { stu_id, stu_name, mode_pyt, city } = req.body;
    const query = 'INSERT INTO bank (stu_id, stu_name, mode_pyt, city) VALUES (?, ?, ?, ?)';
    db.query(query, [stu_id, stu_name, mode_pyt, city], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId, stu_id, stu_name, mode_pyt, city });
    });
});


app.put('/bank/:stu_id', (req, res) => {
    const { stu_id } = req.params;
    const { stu_name, mode_pyt, city } = req.body;
    const query = 'UPDATE bank SET stu_name = ?, mode_pyt = ?, city = ? WHERE stu_id = ?';
    db.query(query, [stu_name, mode_pyt, city, stu_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'bank not found' });
        }
        res.json({ stu_id, stu_name, mode_pyt, city });
    });
});


app.delete('/bank/:stu_id', (req, res) => {
    const { stu_id } = req.params;
    const query = 'DELETE FROM bank WHERE stu_id = ?';
    db.query(query, [stu_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'bank not found' });
        }
        res.json({ message: `Row with stu_id: ${stu_id} from table bank has been deleted successfully`});
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
