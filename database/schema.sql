CREATE TABLE IF NOT EXISTS comunidades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    historia TEXT NOT NULL,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    situacao_palmares TEXT NOT NULL
);