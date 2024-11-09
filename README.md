# Mapeando Dados Tecendo Redes

Este projeto é uma aplicação web desenvolvida com React, TypeScript, Tailwind e Vite. Abaixo está uma descrição detalhada de cada pasta e como utilizar o projeto.

## Estrutura do Projeto

### `src/`
Esta é a pasta principal que contém todo o código-fonte da aplicação.

#### `components/`
Contém componentes reutilizáveis da interface do usuário.

- **footer/**: Componente de rodapé que inclui informações sobre o projeto e links de navegação.
- **header/**: Componente de cabeçalho que contém a navegação principal e o logotipo.
- **layouts/**: Componente de layout que envolve as páginas com cabeçalho e rodapé.
- **toggle-theme/**: Componente para alternar entre temas claro e escuro.
- **ui/**: Contém componentes de interface do usuário como botões, separadores, menus suspensos e tooltips.

#### `contexts/`
Contém contextos React para gerenciar estados globais.

- **dark-theme.tsx**: Contexto para gerenciar o tema da aplicação (claro, escuro, sistema).
- **providers.tsx**: Componente que fornece contextos para a aplicação.

#### `hooks/`
Contém hooks personalizados.

- **useTheme.tsx**: Hook para acessar o contexto do tema.

#### `lib/`
Contém utilitários e funções auxiliares.

- **utils.ts**: Funções utilitárias, como a função `cn` para manipulação de classes CSS.

#### `pages/`
Contém as páginas da aplicação.

- **about/**: Página "Sobre" que descreve a história do projeto.
- **contact/**: Página "Fale Conosco" para contato.
- **get-help/**: Página "Buscar Ajuda" com informações sobre locais de ajuda.
- **home/**: Página inicial da aplicação.

#### `routes/`
Define as rotas da aplicação usando `react-router-dom`.

- **index.tsx**: Configuração das rotas principais da aplicação.

#### `services/`
Contém serviços para interações com APIs externas (atualmente vazio).

#### `assets/`
Contém arquivos estáticos, como imagens e ícones.

#### `styles/`
Contém arquivos de estilo global.

- **index.css**: Estilos globais da aplicação, incluindo configurações do Tailwind CSS.

### `public/`
Contém arquivos públicos que são servidos diretamente, como `index.html`.

### `vite.config.ts`
Configuração do Vite, incluindo plugins e resoluções de caminho.

### `package.json`
Define as dependências do projeto, scripts e configurações do projeto.

### `tsconfig.json`
Configurações do TypeScript, incluindo opções de compilação e caminhos.

### `.gitignore`
Lista de arquivos e pastas que devem ser ignorados pelo Git.

### `.eslintrc.cjs`
Configuração do ESLint para garantir a qualidade do código.

### `.prettierrc`
Configuração do Prettier para formatação de código.

## Como Usar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Mapeando-Dados-Tecendo-Redes/website.git
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Abra o navegador** e acesse `http://localhost:3000` para visualizar a aplicação.

5. **Para construir a aplicação para produção**:
   ```bash
   npm run build
   ```

6. **Para visualizar a aplicação em modo de pré-visualização**:
   ```bash
   npm run preview
   ```

