# Persona — PWA

Assistente de chat pessoal com IA via Groq, instalável como app no celular e desktop.

## Estrutura de arquivos

```
/
├── index.html        ← app principal
├── manifest.json     ← config do PWA
├── sw.js             ← service worker (cache offline)
├── icon-192.png      ← ícone do app (você cria)
├── icon-512.png      ← ícone do app (você cria)
└── gerar-icones.js   ← script opcional para gerar os ícones
```

---

## Como rodar localmente

Você **precisa de um servidor HTTP** — abrir o `index.html` diretamente no navegador não ativa o PWA nem o service worker.

### Opção 1 — VS Code Live Server (mais fácil)
1. Instale a extensão **Live Server** no VS Code
2. Clique com botão direito em `index.html` → **Open with Live Server**
3. Acesse `http://127.0.0.1:5500`

### Opção 2 — Node.js http-server
```bash
npm install -g http-server
http-server . -p 8080
# acesse http://localhost:8080
```

### Opção 3 — Python
```bash
python3 -m http.server 8080
# acesse http://localhost:8080
```

---

## Ícones (obrigatório para instalar como PWA)

### Opção A — Gerar automaticamente
```bash
npm install canvas
node gerar-icones.js
```

### Opção B — Criar manualmente
Crie dois arquivos PNG com fundo escuro (#0e0e10) e um ícone centralizado:
- `icon-192.png` — 192×192 px
- `icon-512.png` — 512×512 px

### Opção C — Gerador online
Use [favicon.io](https://favicon.io) ou [realfavicongenerator.net](https://realfavicongenerator.net) e renomeie os arquivos.

---

## Instalar como PWA

### No Chrome / Edge (desktop)
1. Abra o app no navegador (via servidor local ou deploy)
2. Clique no ícone de instalação na barra de endereço (ícone de computador com seta para baixo)
3. Clique em **Instalar**

### No Android (Chrome)
1. Abra o app no navegador
2. Menu (⋮) → **Adicionar à tela inicial**

### No iOS (Safari)
1. Abra o app no Safari
2. Botão de compartilhar → **Adicionar à Tela de Início**

---

## Deploy gratuito (para usar no celular sem servidor local)

### Vercel (recomendado — 1 minuto)
```bash
npm install -g vercel
vercel
```

### Netlify (arrastar e soltar)
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para o dashboard
3. Pronto — URL pública gerada na hora

### GitHub Pages
1. Suba para um repositório público no GitHub
2. Settings → Pages → Source: main / root
3. Acesse `https://seuusuario.github.io/repositorio`

---

## Personalização

Abra `index.html` e edite o bloco **ZONA DE PERSONALIZAÇÃO** (~linha 420):

```javascript
const DEFAULT_CONFIG = {
  assistantName: 'Assistente',   // nome exibido no topo
  avatarInitial: 'A',            // inicial do avatar
  model: 'llama-3.3-70b-versatile',

  systemPersona: `...`,   // comportamento e personalidade do assistente
  systemUserInfo: ``,     // informações sobre você (o usuário)
  systemExtra: ``,        // regras extras sempre aplicadas
};
```

O usuário também pode editar isso pela engrenagem ⚙️ dentro do app.

---

## Obter chave Groq (grátis)

1. Acesse [console.groq.com/keys](https://console.groq.com/keys)
2. Crie uma conta (pode ser com Google)
3. Gere uma nova chave (começa com `gsk_`)
4. Cole no app quando solicitado

---

## Modelos disponíveis na Groq

| Modelo | Velocidade | Qualidade |
|--------|-----------|-----------|
| llama-3.3-70b-versatile | ★★★ | ★★★★★ |
| llama-3.1-8b-instant | ★★★★★ | ★★★ |
| mixtral-8x7b-32768 | ★★★★ | ★★★★ |
| gemma2-9b-it | ★★★★ | ★★★ |
