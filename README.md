# Raldo Céu Azul, E.I. — Website Institucional

Website institucional da empresa moçambicana **Raldo Céu Azul, E.I.**, construído com **React + TypeScript + Vite + Tailwind CSS**, pronto para publicação estática na **Vercel** através do GitHub.

O site cobre as quatro áreas de negócio da empresa — **Combustíveis, Residencial, Ferragem e Catering** — e a sua presença em **Alto Molócuè e Gilé** (província da Zambézia).

---

## Stack e tecnologias

| Tecnologia | Utilização |
| --- | --- |
| React 18 + TypeScript | Interface e tipagem segura |
| Vite 7 | Build e dev server |
| Tailwind CSS 4 | Design system e utilitários |
| React Router 7 | Navegação multi-página (com página 404) |
| Lucide React | Ícones profissionais |
| react-helmet-async | Gestão de `<title>`, meta e Open Graph |

Não existe backend, base de dados, autenticação ou variáveis de ambiente. É um frontend 100% estático.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20.19+ ou 22.12+ (testado com Node 24).
- Conta no [GitHub](https://github.com/) e na [Vercel](https://vercel.com/).

---

## 1. Instalar as dependências

```bash
npm install
```

> No Windows, se o `npm` falhar por Execution Policy (o ficheiro `npm.ps1` bloqueado), use:
>
> ```powershell
> cmd /c "npm install"
> ```

## 2. Executar o projecto localmente

```bash
npm run dev
```

Abrir em `http://localhost:5173`.

## 3. Criar a versão de produção

```bash
npm run build
npm run preview
```

A versão de produção fica na pasta `dist/` e é servida em `http://localhost:4173` pelo `preview`.

## 4. Publicar o código no GitHub

```bash
git init
git add .
git commit -m "Website institucional Raldo Céu Azul"
git branch -M main
git remote add origin https://github.com/kzsolutions/Raldo_Ceu_Azul.git
git push -u origin main
```

Se o repositório remoto já existe, basta:

```bash
git add .
git commit -m "Website institucional Raldo Céu Azul"
git push -u origin main
```

## 5. Importar o repositório na Vercel

1. Aceda a [vercel.com/new](https://vercel.com/new).
2. Importe o repositório `kzsolutions/Raldo_Ceu_Azul`.
3. A Vercel detecta o framework **Vite** automaticamente:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
4. Clique em **Deploy**.

O ficheiro `vercel.json` já inclui o rewrite necessário para o React Router funcionar em todas as rotas (404 incluído).

> Enquanto não atribuir um domínio próprio, a Vercel gera um URL tipo `https://raldo-ceu-azul.vercel.app`.

## 6. Configurar um domínio próprio (futuramente)

1. Compre o domínio num registador (ex.: `raldoceuazul.co.mz`).
2. Na Vercel: projecto → **Settings → Domains** → adicione o domínio.
3. Siga as instruções de DNS (apontar para `cname.vercel-dns.com`, ou usar os *nameservers* da Vercel).
4. Actualize depois estas referências ao domínio:
   - `src/components/Seo.tsx` → `BASE_URL`
   - `public/robots.txt` → `Sitemap:`
   - `public/sitemap.xml` → todos os `<loc>`
   - `index.html` → `<link rel="canonical">`

O uso de HTTPS é automático na Vercel.

---

## Estrutura do projecto

```
public/                 ficheiros estáticos (favicon, robots, sitemap, logo)
src/
  assets/               logótipo e recursos de imagem
  components/           componentes reutilizáveis (Header, Footer, Button, ...)
  sections/             secções da página inicial
  pages/                páginas (Home, Sobre, Áreas, Contactos, 404, ...)
  data/                 TODOS os conteúdos institucionais (empresa, áreas, contactos)
  styles/               tokens de design (Tailwind + CSS)
  App.tsx               rotas
  main.tsx              entrada da aplicação
```

## Como substituir imagens e actualizar contactos

Todas as informações institucionais estão centralizadas em `src/data/`, para facilitar futuras alterações:

- `company.ts` — nome, NUIT, sede, director, missão/visão/valores, diferenciais.
- `contacts.ts` — telefones, e-mail, WhatsApp, morada, unidades.
- `businessAreas.ts` — as quatro áreas de negócio (título, descrição, destaques, público).
- `nav.ts` — itens de navegação do cabeçalho e rodapé.

**Imagens:** o logótipo está em `src/assets/logo.jpg` (e uma cópia em `public/logo.jpg`). As ilustrações das áreas são vetoriais e on-brand, definidas em `src/components/Illustrations.tsx` — foram criadas para serem substituídas no futuro por **fotografias reais** das instalações sem alterar o resto do site. Para trocar, substitua o componente de ilustração por uma `<img>` apontando para o novo ficheiro em `src/assets/`.

> Nota: enquanto não existirem fotografias reais das instalações, o site usa ilustrações próprias e abstém-se de apresentar imagens de stock como se fossem as unidades da empresa.

---

## Funcionalidades implementadas

- Navegação multi-página com menu móvel acessível e menu dropdown de áreas no computador.
- Página 404 funcional.
- Links funcionais de telefone, e-mail e WhatsApp (`https://wa.me/258872921300`).
- Cabeçalho fixo com sombra ao deslocar; botão "voltar ao topo".
- Animações de entrada suaves com `IntersectionObserver`, respeitando `prefers-reduced-motion`.
- SEO: título/descrição por página, Open Graph, `sitemap.xml`, `robots.txt`, favicon do logótipo.
- Acessibilidade: saltar para o conteúdo, foco visível, `aria` labels, semântica HTML, texto alternativo.
- Imagens com `lazy loading`/`decoding="async"` e dimensões definidas.
- Copyright do rodapé actualizado automaticamente.
- Sem formulários fictícios, sem links vazios, sem funcionalidades inventadas.

---

## Notas de conteúdo

Todas as informações foram extraídas do documento **"Portefólio_Raldo Ceu Azul 2026.pdf"** e resumidas para leitura web. O site não inventa prémios, certificações, estatísticas, testemunhos ou funcionalidades não confirmadas pela empresa.

- Telefones: **+258 87 292 1300** e **+258 84 292 1300**.
- E-mail: **raldolentino5@gmail.com**.
- Sede: Alto Molócuè, Estrada Nacional n.º 1, Rua da Pista Velha.