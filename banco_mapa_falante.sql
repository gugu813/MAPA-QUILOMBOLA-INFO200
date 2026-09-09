CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  papel VARCHAR(30) NOT NULL COMMENT 'lider_comunitario, anciao, jovem_comunitario, pesquisador',
  telefone VARCHAR(20),
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comunidades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  historia TEXT NOT NULL,
  latitude DECIMAL(10,8) NOT NULL,
  longitude DECIMAL(11,8) NOT NULL,
  situacao_palmares VARCHAR(30) NOT NULL COMMENT 'certificado, em_processo, nao_certificado',
  aprovado BOOLEAN DEFAULT FALSE,
  usuario_cadastrador_id INT NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_cadastrador_id) REFERENCES usuarios(id)
);

CREATE TABLE marcos_territoriais (
  id INT AUTO_INCREMENT PRIMARY KEY,
  comunidade_id INT NOT NULL,
  titulo VARCHAR(150) NOT NULL,
  descricao TEXT,
  categoria VARCHAR(50) NOT NULL COMMENT 'canto_sagrado, festa_tradicional, roca_sustento, caminho_antigo',
  latitude DECIMAL(10,8) NOT NULL,
  longitude DECIMAL(11,8) NOT NULL,
  autor_id INT NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (comunidade_id) REFERENCES comunidades(id),
  FOREIGN KEY (autor_id) REFERENCES usuarios(id)
);

CREATE TABLE relatos_orais (
  id INT AUTO_INCREMENT PRIMARY KEY,
  comunidade_id INT NOT NULL,
  anciao_narrador VARCHAR(100) NOT NULL,
  titulo VARCHAR(150) NOT NULL,
  descricao TEXT,
  arquivo_audio_url VARCHAR(255) NOT NULL,
  transcricao TEXT,
  jovem_registrador_id INT NOT NULL,
  status_aprovacao VARCHAR(20) DEFAULT 'pendente' COMMENT 'pendente, aprovado, rejeitado',
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (comunidade_id) REFERENCES comunidades(id),
  FOREIGN KEY (jovem_registrador_id) REFERENCES usuarios(id)
);

CREATE TABLE zonas_sinal (
  id INT AUTO_INCREMENT PRIMARY KEY,
  comunidade_id INT NOT NULL,
  operadora VARCHAR(50),
  qualidade_sinal VARCHAR(20) COMMENT 'fraco, medio, forte',
  latitude DECIMAL(10,8) NOT NULL,
  longitude DECIMAL(11,8) NOT NULL,
  FOREIGN KEY (comunidade_id) REFERENCES comunidades(id)
);