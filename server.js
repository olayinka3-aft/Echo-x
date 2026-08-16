const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

let db = JSON.parse(fs.readFileSync('./db.json'));
let admin = JSON.parse(fs.readFileSync('./admin.json'));

// Save helper
function saveDB() {
    fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));
}

// Complaint
app.post('/complaint', (req, res) => {
    db.complaints.push(req.body);
    saveDB();
    res.json({ status: "ok" });
});

// Review
app.post('/review', (req, res) => {
    db.reviews.push(req.body);
    saveDB();
    res.json({ status: "ok" });
});

// Get data
app.get('/data', (req, res) => res.json(db));

// Login
app.post('/login', (req, res) => {
    res.json({ success: req.body.password === admin.password });
});

// Delete complaint
app.post('/delete', (req, res) => {
    db.complaints.splice(req.body.index, 1);
    saveDB();
    res.json({ status: "deleted" });
});

// Announcement
app.post('/announcement', (req, res) => {
    db.announcement = req.body.text;
    saveDB();
    res.json({ status: "updated" });
});

app.listen(3000, () => console.log("Server running 🚀"));
