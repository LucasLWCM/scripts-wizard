# Guia Completo: Deploy no Digital Ocean Droplet Ubuntu

## 📋 Informações do Seu Droplet

- **IP**: 159.65.190.89
- **SO**: Ubuntu
- **Porta Padrão**: 80 (HTTP), 443 (HTTPS)

---

## 🚀 Passo 1: Conectar ao Seu Droplet

### Via Terminal (Mac/Linux)

```bash
ssh root@159.65.190.89
```

### Via PuTTY (Windows)

1. Abra PuTTY
2. Host Name: `159.65.190.89`
3. Port: `22`
4. Clique em "Open"
5. Login: `root`

---

## 📦 Passo 2: Preparar o Servidor

Após conectar, execute os seguintes comandos:

```bash
# Atualizar pacotes do sistema
apt update && apt upgrade -y

# Instalar Node.js e npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install -y nodejs

# Instalar pnpm (gerenciador de pacotes recomendado)
npm install -g pnpm

# Instalar Nginx (servidor web)
apt install -y nginx

# Instalar Git (para clonar o repositório)
apt install -y git

# Verificar instalações
node --version
npm --version
pnpm --version
nginx --version
```

---

## 📂 Passo 3: Fazer Upload do Projeto

### Opção A: Via SCP (Recomendado)

No seu computador local, execute:

```bash
scp -r scripts-wizard-landing root@159.65.190.89:/var/www/
```

### Opção B: Via Git

No seu droplet, execute:

```bash
cd /var/www
git clone https://seu-repositorio-git.git scripts-wizard-landing
cd scripts-wizard-landing
```

### Opção C: Via ZIP

1. Faça upload do ZIP para o droplet
2. No droplet, execute:

```bash
cd /var/www
unzip scripts-wizard-landing.zip
cd scripts-wizard-landing
```

---

## 🔧 Passo 4: Instalar Dependências e Fazer Build

```bash
cd /var/www/scripts-wizard-landing

# Instalar dependências
pnpm install

# Fazer build para produção
pnpm build

# Verificar se a pasta 'dist' foi criada
ls -la dist/
```

---

## 🌐 Passo 5: Configurar Nginx

### Criar arquivo de configuração do Nginx

```bash
nano /etc/nginx/sites-available/scripts-wizard
```

Cole o seguinte conteúdo:

```nginx
server {
    listen 80;
    server_name 159.65.190.89;

    root /var/www/scripts-wizard-landing/dist;
    index index.html;

    # Redirecionar todas as rotas para index.html (React Router)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache para arquivos estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Desabilitar cache para index.html
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
```

Salve com: `Ctrl+X`, depois `Y`, depois `Enter`

### Ativar a configuração

```bash
# Criar link simbólico
ln -s /etc/nginx/sites-available/scripts-wizard /etc/nginx/sites-enabled/

# Remover configuração padrão (opcional)
rm /etc/nginx/sites-enabled/default

# Testar configuração do Nginx
nginx -t

# Reiniciar Nginx
systemctl restart nginx
```

---

## 🔒 Passo 6: Configurar SSL/HTTPS (Gratuito com Let's Encrypt)

```bash
# Instalar Certbot
apt install -y certbot python3-certbot-nginx

# Gerar certificado SSL
certbot certonly --nginx -d seu-dominio.com.br

# Se não tiver domínio, use o IP (menos seguro)
certbot certonly --standalone -d 159.65.190.89
```

### Atualizar Nginx para HTTPS

```bash
nano /etc/nginx/sites-available/scripts-wizard
```

Substitua o conteúdo por:

```nginx
server {
    listen 80;
    server_name 159.65.190.89;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name 159.65.190.89;

    ssl_certificate /etc/letsencrypt/live/159.65.190.89/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/159.65.190.89/privkey.pem;

    root /var/www/scripts-wizard-landing/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
```

Reinicie o Nginx:

```bash
systemctl restart nginx
```

---

## ✅ Passo 7: Verificar se Está Funcionando

Abra seu navegador e acesse:

```
http://159.65.190.89
```

Você deve ver sua landing page!

---

## 🔄 Passo 8: Atualizar o Projeto (Futuras Mudanças)

Quando tiver novas mudanças no projeto:

```bash
cd /var/www/scripts-wizard-landing

# Puxar código atualizado (se usando Git)
git pull origin main

# Ou descompactar novo ZIP
# unzip scripts-wizard-landing.zip

# Instalar dependências atualizadas
pnpm install

# Fazer novo build
pnpm build

# Reiniciar Nginx
systemctl restart nginx
```

---

## 📊 Monitoramento

### Ver logs do Nginx

```bash
# Erros
tail -f /var/log/nginx/error.log

# Acessos
tail -f /var/log/nginx/access.log
```

### Verificar espaço em disco

```bash
df -h
```

### Verificar uso de memória

```bash
free -h
```

---

## 🆘 Troubleshooting

### Erro: "Permission denied"

```bash
# Dar permissões corretas
chmod -R 755 /var/www/scripts-wizard-landing
chown -R www-data:www-data /var/www/scripts-wizard-landing
```

### Erro: "Port 80 already in use"

```bash
# Encontrar processo na porta 80
lsof -i :80

# Matar o processo
kill -9 <PID>
```

### Nginx não inicia

```bash
# Testar configuração
nginx -t

# Ver erros
systemctl status nginx
```

### Página em branco ou erro 404

```bash
# Verificar se dist/ existe
ls -la /var/www/scripts-wizard-landing/dist/

# Se não existir, fazer build novamente
cd /var/www/scripts-wizard-landing
pnpm build
```

---

## 🎯 Próximas Etapas

1. **Apontar Domínio** - Se tiver um domínio, configure o DNS para apontar para `159.65.190.89`
2. **Configurar Email** - Configure um email para receber notificações do servidor
3. **Backup Automático** - Configure backups automáticos no Digital Ocean
4. **Monitoramento** - Use ferramentas como Uptime Robot para monitorar disponibilidade

---

## 📞 Comandos Úteis

```bash
# Reiniciar Nginx
systemctl restart nginx

# Parar Nginx
systemctl stop nginx

# Iniciar Nginx
systemctl start nginx

# Status do Nginx
systemctl status nginx

# Habilitar Nginx para iniciar automaticamente
systemctl enable nginx

# Desabilitar Nginx
systemctl disable nginx
```

---

**Seu site estará online em poucos minutos! 🚀**
