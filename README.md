# 📚 Meu Banco de Dados

Projeto simples desenvolvido para praticar a conexão entre Node.js e MySQL, realizando consultas em um banco de dados e exibindo os resultados no terminal.

## 🚀 Tecnologias Utilizadas

- Node.js
- MySQL
- mysql2

## 📋 Funcionalidades

- Conectar ao banco de dados MySQL
- Realizar consultas SQL
- Buscar registros da tabela `alunos`
- Exibir resultados formatados no terminal

## 🛠️ Estrutura do Projeto

```
projeto/
│
├── interacao/
│   └── conexao.js
│
├── consultas/
│   └── buscarAlunos.js
│
└── package.json
```

## 📖 Como Funciona

O sistema estabelece conexão com o banco de dados `escola` e executa a consulta:

```sql
SELECT * FROM alunos;
```

Os registros encontrados são exibidos no console utilizando `console.table()`.

## ▶️ Como Executar

### Instalar dependências

```bash
npm install
```

### Configurar o banco

Certifique-se de possuir:

- MySQL instalado
- Banco de dados `escola`
- Tabela `alunos`

### Executar o projeto

```bash
node buscarAlunos.js
```

## 🎯 Objetivo do Projeto

Projeto desenvolvido para praticar:

- Conexão com banco de dados
- Consultas SQL
- Integração Node.js com MySQL
- Manipulação de resultados de consultas

## 📚 Conceitos Praticados

- Banco de Dados Relacional
- SQL
- Módulos Node.js
- Tratamento de erros
- Conexão com banco de dados

## 👨‍💻 Autor

André Felipe da Silva Leal

Estudante de Análise e Desenvolvimento de Sistemas.
