# Como publicar o sistema como site de verdade

Siga na ordem. Nenhum passo exige saber programar — é tudo clicar e colar.

---

## Passo 1 — Criar o banco de dados (Firebase, gratuito)

1. Acesse **console.firebase.google.com** e entre com uma conta Google.
2. Clique em **"Criar projeto"**. Dê um nome, ex: `pentagono-salvados`. Pode desmarcar o Google Analytics (não precisa).
3. Dentro do projeto, no menu esquerdo, clique em **"Firestore Database"** → **"Criar banco de dados"**.
4. Escolha **"Iniciar no modo de produção"** → escolha a localização mais próxima (ex: `southamerica-east1` — São Paulo) → Concluir.
5. Ainda no Firestore, vá na aba **"Regras"** e substitua o conteúdo por isto (permite leitura/escrita do seu app):

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /salvados_storage/{doc} {
         allow read, write: if true;
       }
     }
   }
   ```
   Clique em **Publicar**.

   > Nota de segurança: isso deixa os dados abertos para quem tiver o link do app. Para 1-5 pessoas de confiança já é aceitável para começar. Se depois quiser exigir login, me avise que eu ajusto as regras.

6. Volte para a página inicial do projeto (ícone de casa) → clique no ícone **"</>"** (Web) para criar um app da Web.
7. Dê um apelido (ex: `salvados-web`) → Registrar app.
8. Vai aparecer um bloco de código com `firebaseConfig = { apiKey: "...", ... }`. **Copie esses valores.**

## Passo 2 — Colar a configuração no projeto

1. Abra o arquivo `src/firebase.js` (dentro do projeto que te enviei).
2. Substitua os valores `"COLE_AQUI..."` pelos valores reais que você copiou no Passo 1.8.
3. Salve o arquivo.

## Passo 3 — Subir o código para o GitHub

1. Acesse **github.com** e crie uma conta gratuita (se ainda não tiver).
2. Clique em **"New repository"** (Novo repositório). Nome: `pentagono-salvados`. Deixe **Público** ou **Privado** (tanto faz). Não marque nenhuma opção extra. Criar.
3. Na página do repositório vazio, clique no link **"uploading an existing file"**.
4. Arraste **todos os arquivos e pastas** deste projeto (menos a pasta `node_modules`, se existir, e a pasta `dist`) para a área de upload.
5. Role para baixo → **"Commit changes"**.

## Passo 4 — Publicar no Vercel (o site fica no ar aqui)

1. Acesse **vercel.com** → **"Sign Up"** → escolha **"Continue with GitHub"** (facilita a conexão).
2. No painel, clique em **"Add New..." → "Project"**.
3. Encontre o repositório `pentagono-salvados` que você acabou de subir → **"Import"**.
4. O Vercel já reconhece que é um projeto Vite automaticamente. Não precisa mudar nada.
5. Clique em **"Deploy"**. Espera uns 1-2 minutos.
6. Pronto — vai aparecer um link tipo `pentagono-salvados.vercel.app`. **Esse é o endereço definitivo do seu sistema.**

## Passo 5 — Instalar no celular / computador

**Celular (Android ou iPhone):**
1. Abra o link do Vercel no navegador do celular (Chrome ou Safari).
2. Vai aparecer um aviso ou opção no menu: **"Adicionar à tela inicial"** / **"Instalar app"**.
3. Confirme — vira um ícone normal, igual qualquer app.

**Computador:**
1. Abra o link no Chrome ou Edge.
2. Um ícone de instalação aparece na barra de endereço (perto do favorito ⭐).
3. Clique → Instalar.

---

## Quando eu (Claude) atualizar o sistema depois

1. Eu te aviso o que mudou e te mando os arquivos atualizados.
2. Você vai no repositório no GitHub → entra na pasta/arquivo que mudou → ícone de lápis (editar) → cola o conteúdo novo → Commit.
   - Ou, mais simples: apaga o(s) arquivo(s) antigo(s) e faz upload dos novos (mesmo processo do Passo 3.3-3.5).
3. O Vercel detecta a mudança no GitHub e **republica sozinho** em cerca de 1 minuto. Não precisa fazer nada no Vercel.

---

## Se travar em algum passo

Me manda um print de onde parou que eu te oriento — sem problema nenhum, é normal ter dúvida na primeira vez.
