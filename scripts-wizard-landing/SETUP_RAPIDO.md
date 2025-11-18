# Setup Rápido - Scripts Infalíveis Wizard

## ⚡ Começar em 5 Minutos

### 1. Instalar Dependências
```bash
pnpm install
```

### 2. Rodar em Desenvolvimento
```bash
pnpm dev
```
Acesse: `http://localhost:3000`

### 3. Build para Produção
```bash
pnpm build
```

### 4. Servir Produção Localmente
```bash
pnpm preview
```

---

## 📁 Estrutura do Projeto

```
scripts-wizard-landing/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          ← Página principal da landing
│   │   ├── hooks/
│   │   │   └── useFakeSalesNotifications.ts  ← Hook de notificações
│   │   ├── components/           ← Componentes reutilizáveis
│   │   ├── index.css             ← Estilos globais
│   │   └── App.tsx               ← Configuração de rotas
│   └── public/                   ← Arquivos estáticos
├── package.json
├── vite.config.ts
└── DEPLOYMENT_GUIDE.md           ← Guia completo de deploy
```

---

## 🎨 Customizar a Página

### Mudar Cores
Edite `client/src/index.css` e procure por `@theme`:
```css
@theme {
  --color-primary: oklch(0.65 0.2 240);  /* Azul */
  --color-accent: oklch(0.7 0.25 0);     /* Vermelho */
}
```

### Mudar Textos
Edite `client/src/pages/Home.tsx` e procure pelos textos que deseja alterar.

### Mudar Logo
Coloque sua logo em `client/public/logo.svg` e atualize em `client/src/const.ts`:
```typescript
export const APP_LOGO = '/logo.svg';
```

### Ajustar Notificações
Edite `client/src/hooks/useFakeSalesNotifications.ts`:
- Altere `FIRST_NAMES`, `LAST_NAMES`, `CITIES` para seus dados
- Ajuste `getRandomInterval()` para mudar frequência (30-60 segundos)

---

## 🚀 Deploy Rápido

### Vercel (Mais Fácil)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Seu Servidor
Veja `DEPLOYMENT_GUIDE.md` para instruções detalhadas.

---

## 📊 Scripts Disponíveis

```bash
pnpm dev          # Rodar em desenvolvimento
pnpm build        # Build para produção
pnpm preview      # Visualizar build localmente
pnpm lint         # Verificar erros de código
```

---

## ✨ Recursos Inclusos

- ✅ Landing Page otimizada para conversão
- ✅ Timer de countdown em tempo real
- ✅ Notificações fake de vendas (aleatórias)
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Componentes shadcn/ui
- ✅ Tailwind CSS 4
- ✅ React 19 + Vite

---

## 🆘 Problemas Comuns

**Erro: "Cannot find module"**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Porta 3000 em uso**
```bash
# Matar processo
lsof -i :3000
kill -9 <PID>
```

**Mudanças não aparecem**
```bash
# Limpar cache
rm -rf .vite
pnpm dev
```

---

## 📞 Próximos Passos

1. **Integrar Pagamento** - Adicione Stripe ou outra gateway
2. **Capturar Emails** - Implemente formulário de captura
3. **Analytics** - Configure Google Analytics
4. **Domínio Customizado** - Aponte seu domínio para o servidor

---

**Pronto para começar? Execute `pnpm install && pnpm dev`! 🚀**
