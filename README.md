<div align="center">

# 🌊 Nautilis
### Explorando a Cultura Oceânica

[![Vercel Status](https://img.shields.io/website?down_color=red&down_message=offline&label=Vercel&up_color=success&up_message=online&url=https%3A%2F%2Fnautilis.vercel.app)](https://nautilis.vercel.app)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

<br />

**Plataforma Web Educativa desenvolvida para o [IF Ciência 2025]** *Instituto Federal de São Paulo — Campus Salto*

[Ver Demo Online](https://nautilis.vercel.app)

</div>

---

## 📘 Sobre o Projeto

O **Nautilis** é uma plataforma web interativa dedicada ao ensino e divulgação científica sobre os cinco oceanos do planeta.

Muitos estudantes encontram dificuldades em achar materiais consolidados, visuais e organizados sobre oceanos. O Nautilis resolve isso centralizando informações confiáveis em uma interface moderna, tornando o aprendizado sobre biodiversidade marinha e mudanças climáticas acessível e atraente.

> **Destaque:** Cada página de oceano conta com um player de áudio (podcast IA), facilitando o acesso para estudantes que preferem aprender ouvindo ou possuem necessidades específicas de acessibilidade.

---

## 🎯 Objetivos

* **Educação Visual:** Facilitar o aprendizado sobre oceanos, clima e biodiversidade através de uma interface clara.
* **Centralização:** Unir dados científicos, curiosidades históricas e mapas em um único lugar.
* **Engajamento:** Oferecer ferramentas interativas (mapas e carrosséis) para despertar o interesse dos jovens.
* **Cultura Oceânica:** Promover a educação ambiental alinhada ao tema do IF Ciência 2025.

---

## 🔊 Funcionalidades Principais

* 🗺️ **Mapa Interativo:** Navegação visual com acesso rápido a cada um dos 5 oceanos.
* 🎧 **Áudio Imersivo:** Player de áudio integrado em cada página com narração explicativa.
* 📊 **Base de Dados Rica:** Informações detalhadas sobre área, profundidade, temperatura e correntes.
* 🐋 **Vida Marinha:** Carrosséis interativos de espécies (ameaçadas, importantes, raras e populares).
* 📱 **Design Responsivo:** Interface otimizada para desktops e dispositivos móveis.

---

## 🖥️ Tecnologias Utilizadas

### Frontend
* **HTML5 & CSS3:** Estrutura semântica e estilização moderna.
* **JavaScript (Vanilla):** Lógica de interação no cliente, manipulação de DOM e players de áudio.
* **UI/UX:** Foco em design limpo e acessibilidade.

### Backend
* **Node.js:** Ambiente de execução.
* **Express.js:** Framework para rotas e renderização de views estáticas.
* **JSON Data:** API interna simples (`oceanData.js`) para alimentar as páginas dinamicamente.

---

## 📂 Estrutura do Projeto

```text
nautilis/
│
├── public/              # Arquivos estáticos
│   ├── css/             # Estilos
│   ├── img/             # Imagens otimizadas
│   └── audio/           # Faixas de áudio explicativas
│
├── views/               # Páginas HTML (Templates)
│   ├── index.html
│   ├── mapa.html
│   ├── oceano.html      # Template dinâmico
│   └── ...
│
├── middlewares/         # Loggers e tratativas
├── oceanData.js         # "Banco de dados" em JSON
├── routes.js            # Definição das rotas
└── index.js             # Ponto de entrada do servidor
````

-----

## 🛠️ Como Rodar Localmente

Para executar este projeto na sua máquina, você precisará do [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clone o repositório
git clone [https://github.com/MatheusCampagnolo/nautilis.git](https://github.com/MatheusCampagnolo/nautilis.git)

# 2. Entre na pasta do projeto
cd nautilis

# 3. Instale as dependências
npm install

# 4. Inicie o servidor
npm start
```

O projeto estará rodando em: `http://localhost:3000`

-----

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.