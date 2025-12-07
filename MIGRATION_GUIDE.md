🚀 Guia de Migração: Unificação do Backend (Monorepo)

Este documento descreve o processo passo a passo para substituir a antiga API Express (JavaScript/Legacy) pelo novo **IXC REST API Gateway** (TypeScript/Modern), consolidando a arquitetura do projeto **FiberNet Telecom**.

## 🎯 Objetivo
Substituir a pasta `api` (legada) pelo conteúdo do repositório `ixc-rest-api-gateway`, garantindo que o Frontend (`web`) e Mobile (`mobile`) continuem a funcionar, agora consumindo uma API mais robusta, segura e tipada.

---

## 📋 Pré-requisitos
* Node.js (v18+)
* NPM ou PNPM instalados
* Acesso aos repositórios locais

---

## 🛠️ Passo 1: Limpeza e Preparação

Antes de mover os arquivos, precisamos remover a implementação antiga para evitar conflitos.

1.  **Backup (Opcional, mas recomendado):**
    Renomeie a pasta atual caso queira consultar algo depois.
    ```bash
    mv api api_legacy_backup
    ```

2.  **Remoção:**
    Caso já tenha feito backup ou tenha certeza, remova a pasta `api` antiga do repositório `Fiber-NET-Telecom`.

---

## 📦 Passo 2: Migração do Código (Gateway)

Agora vamos mover o código robusto para o lugar da API.

1.  **Copiar Arquivos:**
    Copie **todo o conteúdo** (pastas `src`, arquivos de configuração, `package.json`, etc.) do projeto `ixc-rest-api-gateway` para dentro da pasta `api` no repositório `Fiber-NET-Telecom`.

    A estrutura final deve ficar assim:
    ```text
    Fiber-NET-Telecom/
    ├── api/                 <-- Novo Gateway TypeScript aqui
    │   ├── src/
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── ...
    ├── web/                 <-- Frontend React
    ├── mobile/              <-- App Expo
    └── shared/              <-- Tipos compartilhados
    ```

---

## ⚙️ Passo 3: Configuração do Ambiente

O novo gateway possui dependências e variáveis de ambiente que precisam ser configuradas.

1.  **Instalar Dependências:**
    Navegue até a pasta `api` e instale os pacotes.
    ```bash
    cd api
    npm install
    # ou
    pnpm install
    ```

2.  **Configurar Variáveis de Ambiente:**
    Crie um arquivo `.env` dentro da pasta `api` baseado no `.env.example` do gateway (se houver) ou crie do zero com as configurações do IXC:

    ```env
    # Servidor
    PORT=3333
    NODE_ENV=development

    # Autenticação e Segurança
    JWT_SECRET=sua_chave_secreta_super_segura

    # API IXC Soft (Backend real)
    IXC_BASE_URL=[https://seu-ixc.com.br/webservice/v1](https://seu-ixc.com.br/webservice/v1)
    IXC_TOKEN=seu_token_base64_aqui

    # Cache (Opcional)
    CACHE_ENABLED=true
    CACHE_TTL=300
    ```

---

## 🔌 Passo 4: Ajuste de Portas (Frontend & Mobile)

O gateway roda por padrão na porta **3333**, enquanto a API antiga rodava na **3001**. Precisamos alinhar isso.

### Opção A: Ajustar o Frontend (Recomendado)
Atualize o arquivo de configuração do Vite para apontar para a nova porta.

**Arquivo:** `web/vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3333', // Atualizado de 3001 para 3333
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
Opção B: Ajustar o Mobile
Verifique o arquivo de serviços do mobile para apontar para o novo endereço.

Arquivo: mobile/src/services/api.js

JavaScript

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SEU_IP_LOCAL:3333/api', // Atualizado para porta 3333
});

export default api;
🔄 Passo 5: Migração de Funcionalidades Específicas
1. Autenticação
O novo gateway já possui rotas de autenticação em src/api/routes/authRoutes.ts.

Verifique: Certifique-se de que a lógica de login (Controller) está validando o usuário contra o banco de dados do IXC ou a lógica que você usava anteriormente.

Ação: Se a API antiga tinha alguma lógica customizada de validação no authController.js, transcreva-a para o authController.ts do novo gateway.

2. Tipos Compartilhados (shared)
Seu projeto possui uma pasta shared/types/api.ts.

Recomendação: No api/tsconfig.json, adicione um mapeamento para importar esses tipos facilmente, ou importe-os via caminho relativo (../../shared/types/api) para manter a consistência entre Front e Back.

✅ Passo 6: Execução e Teste
Inicie o Backend:

Bash

cd api
npm run dev
Deve aparecer: "🚀 Servidor rodando na porta 3333"

Inicie o Frontend:

Bash

cd ../web
npm run dev
Teste de Integração:

Tente fazer Login na área do cliente.

Verifique se o token JWT é gerado corretamente.

Teste o download de um boleto (funcionalidade nova do gateway).

🧹 Passo 7: Finalização (Git)
Após validar que tudo funciona:

Bash

# Na raiz do projeto
git add .
git commit -m "refactor(api): substituição da api legada pelo ixc-api-gateway v2 com typescript"
git push origin main