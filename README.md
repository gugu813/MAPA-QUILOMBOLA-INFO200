# Memórias Quilombolas

Projeto de mapeamento territorial e salvaguarda de comunidades quilombolas, com foco em visibilidade cartográfica, memória histórica e apoio à análise de situação fundiária.

## Visão geral

O objetivo do sistema é registrar comunidades, suas histórias, coordenadas geográficas e informações relevantes sobre sua situação territorial, permitindo visualizar esses dados em um mapa interativo.

A aplicação é composta por:

- frontend em HTML/JavaScript com Leaflet
- backend em Node.js + Express
- banco de dados SQLite
- documentação de arquitetura e materiais de apoio em `docs/`

## Estrutura do repositório

```text
MAPA-QUILOMBOLA-INFO200/
├── backend/
│   ├── backend/
│   │   └── server.js
│   └── package.json
├── database/
│   ├── database/
│   │   └── seed/
│   │       └── seed.sql
│   └── schema.sql
├── docs/
│   └── 04_architecture/
│       └── combinados.md
├── frontend/
│   ├── frontend/
│   │   ├── app.js
│   │   └── ...
│   ├── index.html
│   └── README.md
├── tests/
│   └── integration/
│       └── checklist.md
└── README.md (opcional, se for criado na raiz)
```

## Tecnologias

- Node.js
- Express
- SQLite
- Leaflet
- HTML/CSS/JavaScript
- Git

## Como executar

### 1. Instale as dependências do backend

No diretório `backend/`:

```bash
npm install
```

### 2. Inicie o servidor

```bash
npm start
```

O backend ficará disponível em:

```text
http://localhost:3000
```

### 3. Abra o frontend

Abra o arquivo `frontend/index.html` em um navegador.

Se o navegador bloquear carregamento local de arquivos, pode ser necessário servir a pasta `frontend` por um pequeno servidor local, por exemplo:

```bash
cd frontend
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Endpoints da API

### GET /api/comunidades

Retorna todas as comunidades cadastradas.

### POST /api/comunidades

Cria uma nova comunidade com os campos:

- nome
- historia
- latitude
- longitude
- situacao_palmares

## Banco de dados

O banco é gerado a partir do arquivo `database/schema.sql`.

Os dados iniciais podem ser carregados pelo arquivo `database/seed/seed.sql`.

## Objetivo do projeto

A proposta é apoiar a identificação, documentação e preservação de territórios quilombolas, com foco em:

- visibilidade territorial
- memória histórica
- análise fundiária
- organização de informações comunitárias
- apoio a pesquisas e ações de salvaguarda

## Contribuição

1. Faça um fork ou clone do repositório.
2. Crie uma branch para sua alteração.
3. Faça as mudanças com atenção à estrutura do projeto.
4. Teste localmente.
5. Faça commit e submeta a alteração.

## Observações de segurança

- Evite expor dados pessoais sensíveis sem autorização.
- Revise coordenadas e informações públicas antes de cadastrar novos registros.
- Mantenha a documentação e os dados organizados para preservar a integridade do projeto.

## Equipe

- Joaquim Gustavo
- Maria José da Silva
- Maria do Carmo Barboza
- Igor Cruz
- Cauã Pereira

## Licença

Este projeto está em desenvolvimento e pode ser ajustado conforme a necessidade da equipe e dos dados envolvidos.
