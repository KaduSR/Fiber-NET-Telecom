# FiberNet Telecom - Aplicativo Móvel

Aplicativo móvel (Android & iOS) para clientes da **FiberNet Telecom**, permitindo acesso rápido e fácil à Área do Cliente.

## 🚀 Tecnologias Utilizadas

- **Core:** React Native, Expo
- **Navegação:** React Navigation (`@react-navigation/native`, `@react-navigation/stack`)
- **Requisições HTTP:** Axios
- **Componentes:** Componentes nativos do React Native

---

## ✨ Funcionalidades (Planejadas)

- **Autenticação:** Login seguro para acesso à área do cliente.
- **Dashboard:** Visualização rápida de informações da conta.
- **Faturas:** Acesso a faturas, segunda via e pagamento.
- **Suporte:** Abertura e acompanhamento de tickets de suporte.
- **Consumo:** Visualização do consumo de internet.

---

## 📂 Estrutura de Pastas

```
/
├── src/
│   ├── assets/          # Imagens, ícones e fontes
│   ├── components/      # Componentes de UI reutilizáveis
│   ├── navigation/      # Configuração da navegação (React Navigation)
│   ├── screens/         # Telas principais da aplicação (Login, Dashboard, etc.)
│   ├── services/        # Funções para interação com a API (Axios)
│   ├── contexts/        # Gerenciamento de estado global (Context API ou Redux)
│   └── hooks/           # Hooks customizados
├── .env.example         # Exemplo de arquivo de variáveis de ambiente
└── App.js               # Componente raiz da aplicação
```

---

## 🏁 Começando

### Pré-requisitos
- Node.js (versão 18 ou superior)
- Gerenciador de pacotes (npm, yarn ou pnpm)
- Expo CLI (`npm install -g expo-cli`)
- Um dispositivo físico ou emulador/simulador Android/iOS

### Passos

1. **Clone o repositório e acesse a pasta:**
   ```bash
   git clone https://github.com/KaduSR/fibernet-telecom.git
   cd fibernet-telecom/mobile
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz da pasta `mobile/` a partir do `.env.example` e preencha a `API_URL`.

4. **Execute a aplicação:**
   ```bash
   npm start
   ```
   Isso iniciará o Metro Bundler e exibirá um QR Code. Escaneie o QR Code com o aplicativo Expo Go em seu dispositivo ou execute em um emulador.

---

## 🤝 Como Contribuir

1. Faça um Fork do projeto.
2. Crie uma nova branch com a sua feature: `git checkout -b feature/sua-feature`.
3. Faça commit das suas alterações: `git commit -m 'feat: Adiciona nova funcionalidade'`.
4. Envie para a sua branch: `git push origin feature/sua-feature`.
5. Abra um **Pull Request**.

---

### **📄 Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](/docs/LICENSE.md) para mais detalhes.