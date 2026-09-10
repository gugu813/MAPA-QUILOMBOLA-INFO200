const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Conecta ao banco de dados SQLite
const db = new sqlite3.Database('./mapa.db');

// Inicializa o banco e dados de exemplo
db.serialize(() => {
    const schema = fs.readFileSync('../database/schema.sql', 'utf8');
    db.exec(schema);

    // Insere dados de teste se o banco estiver vazio
    db.get('SELECT COUNT(*) as total FROM comunidades', (err, row) => {
        if (row && row.total === 0) {
            const seed = fs.readFileSync('../database/seed/seed.sql', 'utf8');
            db.exec(seed);
        }
    });
});

// GET: Retorna todas as comunidades
app.get('/api/comunidades', (req, res) => {
    db.all('SELECT * FROM comunidades', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// POST: Cadastra uma nova comunidade
app.post('/api/comunidades', (req, res) => {
    const { nome, historia, latitude, longitude, situacao_palmares } = req.body;
    const sql = `INSERT INTO comunidades (nome, historia, latitude, longitude, situacao_palmares) VALUES (?, ?, ?, ?, ?)`;
    
    db.run(sql, [nome, historia, latitude, longitude, situacao_palmares], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID, ...req.body });
    });
});

app.listen(3000, () => console.log('🚀 Servidor rodando em http://localhost:3000'));