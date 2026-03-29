# 📚 EntreCapas

Aplicação web simples que permite **buscar livros e visualizar informações básicas** como título, autor e ano de publicação.

O projeto consome dados da API pública Open Library e exibe os resultados dinamicamente na página.

🔎 O objetivo do projeto é praticar **consumo de API, responsividade mobile e recursos modernos da web**, incluindo funcionalidades de Progressive Web App (PWA) e integração com hardware.

---

# 🌐 Deploy do Projeto

A aplicação está disponível online através do GitHub Pages:

🔗 https://leticia-dev07.github.io/Projeto-de-consumo-de-API-EntreCapas-/

---

# 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando:

* **HTML5** – estrutura da aplicação
* **CSS3** – estilização e responsividade
* **JavaScript (Vanilla JS)** – consumo da API e manipulação do DOM
* **Open Library API** – fonte dos dados dos livros
* **Web Speech API** – reconhecimento de voz (microfone)
* **Service Workers** – cache e funcionamento offline
* **Web App Manifest** – configuração como PWA
* **Git e GitHub** – versionamento e hospedagem

---

# 📡 API Utilizada

O projeto consome dados da **Open Library API**, uma API pública de livros.

Endpoint utilizado:

```
https://openlibrary.org/search.json?q=
```

A API retorna informações como:

* Título do livro
* Autor
* Ano de publicação
* Outros metadados literários

---

# 📱 Funcionalidades

* 🔎 Busca de livros pelo nome
* 🎤 Busca por voz utilizando microfone
* 📚 Exibição de até 10 resultados por busca
* 📖 Informações exibidas:

  * Título
  * Autor
  * Ano de publicação
* 📱 Layout responsivo com foco em dispositivos móveis
* ⏳ Mensagem de carregamento durante a busca
* ⚠️ Tratamento de erro caso a API não responda
* 📦 Aplicação instalável (PWA)
* ⚡ Cache com Service Worker

---

# 🎤 Recurso de Hardware

A aplicação utiliza o **microfone do dispositivo** através da Web Speech API, permitindo que o usuário realize buscas por voz.

---

# 📦 Progressive Web App (PWA)

O projeto foi configurado como um PWA, permitindo:

* Instalação no dispositivo (como um app)
* Funcionamento offline básico
* Melhor performance com cache

---

# 🖥️ Estrutura do Projeto

```
EntreCapas
│
├── index.html
├── style.css
├── script.js
├── manifest.json
├── service-worker.js
├── icons/
└── img/
     └── fundo-livros.png
```

**Descrição dos arquivos:**

* **index.html** → estrutura da interface
* **style.css** → estilização e responsividade
* **script.js** → lógica da aplicação e integração com API + voz
* **manifest.json** → configuração do PWA
* **service-worker.js** → cache e funcionamento offline
* **icons/** → ícones do aplicativo
* **img/** → imagens do layout

---

# 📱 Responsividade

O projeto foi desenvolvido com **prioridade para visualização mobile**.

Foram utilizadas técnicas como:

* Flexbox
* CSS Grid
* Media Queries

Breakpoints principais:

* até **480px** → celulares
* acima de **768px** → tablets e desktops

---

# 💻 Como Executar o Projeto

1. Clone o repositório:

```
git clone https://github.com/leticia-dev07/Projeto-de-consumo-de-API-EntreCapas-.git
```

2. Abra o projeto no VS Code

3. Execute com:

👉 Live Server (recomendado para funcionamento do microfone)

---

# 👩‍💻 Autora

Projeto desenvolvido por:

**Leticia Gabrielle Claudino da Paz**

Estudante de **Análise e Desenvolvimento de Sistemas**.

---

# 📄 Licença

Este projeto foi desenvolvido para fins educacionais na disciplina de desenvolvimento mobile.
