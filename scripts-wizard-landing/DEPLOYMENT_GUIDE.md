# Guia Completo de Deployment - Scripts Infalíveis Wizard

## 📋 Pré-requisitos

Antes de fazer o deploy, certifique-se de ter instalado em seu servidor:

- **Node.js** versão 18+ ([Download](https://nodejs.org/))
- **npm** ou **pnpm** (gerenciador de pacotes)
- Um servidor web (Nginx, Apache) ou plataforma de hosting (Vercel, Netlify, Heroku)

---

## 🚀 Opção 1: Deploy Local (Seu Servidor)

### Passo 1: Preparar o Servidor

```bash
# Criar diretório do projeto
mkdir -p /var/www/scripts-wizard
cd /var/www/scripts-wizard

# Descompactar o ZIP enviado
unzip scripts-wizard-landing.zip
```

### Passo 2: Instalar Dependências

```bash
# Usar pnpm (recomendado)
npm install -g pnpm
pnpm install

# Ou usar npm
npm install
```

### Passo 3: Build para Produção

```bash
# Gerar versão otimizada para produção
pnpm build

# Ou com npm
npm run build
```

Isso criará uma pasta `dist/` com todos os arquivos estáticos prontos para servir.

### Passo 4: Servir os Arquivos

#### Opção A: Usando Nginx

```nginx
server {
    listen 80;
    server_name seu-dominio.com.br;

    root /var/www/scripts-wizard/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache para arquivos estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Depois reinicie o Nginx:
```bash
sudo systemctl restart nginx
```

#### Opção B: Usando Apache

```apache
<VirtualHost *:80>
    ServerName seu-dominio.com.br
    DocumentRoot /var/www/scripts-wizard/dist

    <Directory /var/www/scripts-wizard/dist>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted

        # Redirecionar para index.html para rotas do React
        <IfModule mod_rewrite.c>
            RewriteEngine On
            RewriteBase /
            RewriteRule ^index\.html$ - [L]
            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteRule . /index.html [L]
        </IfModule>
    </Directory>

    # Cache para arquivos estáticos
    <FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$">
        Header set Cache-Control "max-age=31536000, public"
    </FilesMatch>
</VirtualHost>
```

Depois reinicie o Apache:
```bash
sudo systemctl restart apache2
```

#### Opção C: Usando Node.js Direto (Desenvolvimento)

Para testes rápidos, você pode servir com Node.js:

```bash
# Instalar servidor estático global
npm install -g serve

# Servir a pasta dist
serve -s dist -l 3000
```

Acesse em `http://localhost:3000`

---

## 🌐 Opção 2: Deploy em Plataformas de Hosting

### Vercel (Recomendado para React)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale o Vercel CLI:
```bash
npm install -g vercel
```

3. Faça o deploy:
```bash
vercel
```

4. Siga as instruções interativas

### Netlify

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Instale o Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Faça o deploy:
```bash
netlify deploy --prod --dir=dist
```

### Heroku

1. Crie uma conta em [heroku.com](https://heroku.com)
2. Instale o Heroku CLI
3. Crie um arquivo `Procfile` na raiz do projeto:
```
web: npm run preview
```

4. Faça o deploy:
```bash
heroku login
heroku create seu-app-name
git push heroku main
```

---

## 🔧 Configurações Importantes

### Variáveis de Ambiente

Se precisar adicionar variáveis de ambiente, crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_APP_TITLE=Scripts Infalíveis Wizard
VITE_APP_LOGO=/logo.svg
```

### HTTPS/SSL

**Importante:** Para produção, sempre use HTTPS. Opções:

- **Let's Encrypt** (Gratuito): Use Certbot com Nginx/Apache
- **Cloudflare** (Gratuito): Adicione seu domínio e ative SSL
- **Seu Provedor de Hosting**: Geralmente oferece SSL gratuito

---

## 📊 Monitoramento e Manutenção

### Verificar Logs

```bash
# Nginx
sudo tail -f /var/log/nginx/error.log

# Apache
sudo tail -f /var/log/apache2/error.log
```

### Atualizar o Projeto

Quando tiver novas mudanças:

```bash
# Baixar novo ZIP
unzip scripts-wizard-landing.zip

# Instalar dependências atualizadas
pnpm install

# Fazer novo build
pnpm build

# Reiniciar o servidor
sudo systemctl restart nginx  # ou apache2
```

---

## 🐛 Troubleshooting

### Problema: "Cannot find module"

```bash
# Solução: Reinstalar dependências
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Problema: Porta já em uso

```bash
# Encontrar processo na porta 3000
lsof -i :3000

# Matar o processo
kill -9 <PID>
```

### Problema: Permissões de arquivo

```bash
# Dar permissões corretas
sudo chown -R www-data:www-data /var/www/scripts-wizard
sudo chmod -R 755 /var/www/scripts-wizard
```

---

## 📱 Testar Responsividade

Após o deploy, teste em diferentes dispositivos:

- Desktop (1920x1080, 1366x768)
- Tablet (768x1024)
- Mobile (375x667, 414x896)

Use as ferramentas de desenvolvedor do navegador (F12) para testar responsividade.

---

## 🎯 Checklist Final

- [ ] Node.js e npm/pnpm instalados
- [ ] Dependências instaladas (`pnpm install`)
- [ ] Build gerado com sucesso (`pnpm build`)
- [ ] Servidor web configurado (Nginx/Apache)
- [ ] Domínio apontando para o servidor
- [ ] SSL/HTTPS configurado
- [ ] Página acessível em seu domínio
- [ ] Responsividade testada em mobile
- [ ] Notificações fake funcionando
- [ ] Timer de countdown funcionando

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs do servidor
2. Teste em um navegador diferente
3. Limpe o cache do navegador (Ctrl+Shift+Delete)
4. Verifique se todas as dependências foram instaladas

---

**Sucesso no seu deployment! 🚀**
