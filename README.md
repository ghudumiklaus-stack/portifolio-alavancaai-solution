# 🚀 Portfólio Alavanca AI Solution

Bem-vindo ao repositório do **Portfólio Alavanca AI**! Esta é uma aplicação moderna e de alta performance desenvolvida para demonstrar as capacidades de automação e inteligência artificial da Alavanca AI, focada especialmente no setor imobiliário e gestão estratégica de clientes.

> [!TIP]
> Esta aplicação foi construída com foco em **experiência do usuário (UX)** e **escalabilidade**, utilizando as tecnologias mais modernas do mercado.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido com uma stack robusta e performática:

-   **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
-   **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
-   **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
-   **Componentização**: [Shadcn/UI](https://ui.shadcn.com/)
-   **Banco de Dados & Auth**: [Supabase](https://supabase.com/)
-   **Animações**: [Framer Motion](https://www.framer.com/motion/)
-   **Gerenciamento de Estado**: [TanStack Query](https://tanstack.com/query/latest)

---

## ⚡ Como Rodar Localmente

Para rodar este projeto no seu computador, você precisará ter o [Node.js](https://nodejs.org/) (recomendado v18+) ou o [Bun](https://bun.sh/) instalado.

1.  **Clone o repositório**:
    ```bash
    git clone https://github.com/ghudumiklaus-stack/portifolio-alavancaai-solution.git
    cd portifolio-alavancaai-solution
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    # ou
    bun install
    ```

3.  **Configuração das Variáveis de Ambiente**:
    Crie um arquivo `.env` na raiz do projeto com as chaves do seu Supabase:
    ```env
    VITE_SUPABASE_URL=seu_url_do_supabase
    VITE_SUPABASE_ANON_KEY=sua_chave_anon_key
    ```

4.  **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```

---

## ☁️ Deploy no Easypanel (VPS)

Este projeto foi otimizado para deploy em VPS utilizando o **Easypanel**.

### Passos para o Deploy:
1.  **Crie um novo serviço**: No painel do Easypanel, crie um novo serviço do tipo "App".
2.  **Conecte ao GitHub**: Selecione este repositório.
3.  **Configuração de Build**:
    *   **Build Method**: Nixpacks ou Dockerfile (recomendado: Nixpacks).
    *   **Environment Variables**: Não esqueça de adicionar as chaves `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` no dashboard do Easypanel.
4.  **Domínio**: Adicione o seu domínio customizado e o Easypanel cuidará do SSL automaticamente.

---

## 🛡️ Segurança e Boas Práticas

O repositório já conta com um `.gitignore` rigoroso que protege:
-   Segredos locais (`.env`)
-   Ferramentas locais de IA (`.agent/`, `.gemini/`)
-   Dependências e arquivos de build.

---

## 📄 Licença

Este projeto é de uso exclusivo da **Alavanca AI**. Para mais informações, entre em contato em `ghudumiklaus@gmail.com`.

---

Desenvolvido com ❤️ por [ghudumiklaus-stack](https://github.com/ghudumiklaus-stack)
