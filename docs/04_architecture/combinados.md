# Contrato de Integração do Sistema

## Nomes Padronizados

- Entidade: `comunidades`
- Campos do Formulário / Banco / API:
  - `id` (INTEGER, Autoincrement)
  - `nome` (TEXT)
  - `historia` (TEXT)
  - `latitude` (REAL)
  - `longitude` (REAL)
  - `situacao_palmares` (TEXT)

## Endpoints da API

- `GET /api/comunidades`: Retorna a lista de todas as comunidades.
- `POST /api/comunidades`: Cadastra uma nova comunidade.
