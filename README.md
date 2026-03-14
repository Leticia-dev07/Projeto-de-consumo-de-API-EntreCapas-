# 📚 EntreCapas

Aplicação web simples que permite **buscar livros e visualizar informações básicas** como título, autor e ano de publicação.

O projeto consome dados de uma API pública e exibe os resultados dinamicamente na página.

🔎 O objetivo do projeto é praticar **consumo de API, responsividade mobile** utilizando tecnologias fundamentais do desenvolvimento web.

---

# 🌐 Deploy do Projeto

A aplicação está disponível online através do GitHub Pages:

🔗 https://leticia-dev07.github.io/Projeto-de-consumo-de-API-EntreCapas-/

---

# 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando:

- **HTML5** – estrutura da aplicação
- **CSS3** – estilização e responsividade
- **JavaScript (Vanilla JS)** – consumo da API e manipulação do DOM
- **Git e GitHub** – versionamento e hospedagem

---

# 📡 API Utilizada

O projeto consome dados da **Open Library API**, uma API pública de livros.

Endpoint utilizado:

```
https://openlibrary.org/search.json?q=
```

A API retorna informações como:

- Título do livro
- Autor
- Ano de publicação
- Outros metadados literários

---

# 📱 Funcionalidades

- 🔎 Busca de livros pelo nome
- 📚 Exibição de até 10 resultados por busca
- 📖 Informações exibidas:
  - Título
  - Autor
  - Ano de publicação
- 📱 Layout responsivo com foco em dispositivos móveis
- ⏳ Mensagem de carregamento durante a busca
- ⚠️ Tratamento de erro caso a API não responda

---

# 🖥️ Estrutura do Projeto

```
EntreCapas
│
├── index.html
├── style.css
├── script.js
└── img
     └── fundo-livros.png
```

**Descrição dos arquivos:**

- **index.html** → estrutura da interface da aplicação  
- **style.css** → estilização e responsividade da página  
- **script.js** → lógica da aplicação e consumo da API  
- **img/** → pasta de imagens utilizadas no layout

---

# 📱 Responsividade

O projeto foi desenvolvido com **prioridade para visualização mobile**.

Foram utilizadas técnicas como:

- Flexbox
- CSS Grid
- Media Queries

Breakpoints principais:

- até **480px** → celulares
- acima de **768px** → tablets e desktops

---

# 💻 Como Executar o Projeto

1. Clone o repositório:

```
git clone https://github.com/leticia-dev07/Projeto-de-consumo-de-API-EntreCapas-.git
```

2. Abra a pasta do projeto.

3. Execute o arquivo:

```
index.html
```

4. Digite o nome de um livro no campo de busca.

---

# 👩‍💻 Autora

Projeto desenvolvido por:

**Leticia Gabrielle Claudino da Paz**

Estudante de **Análise e Desenvolvimento de Sistemas**.

---

# 📄 Licença

Este projeto foi desenvolvido para **fins educacionais para aula de mobile**.
