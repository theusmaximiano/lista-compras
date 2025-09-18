# Lista de Compras

Aplicativo de lista de compras desenvolvido em React Native com Expo.

Funcionalidades:

- Adicionar itens com nome, quantidade e preço
- Visualizar detalhes de cada item
- Marcar como comprado ou desmarcar
- Remover itens
- Tela Sobre com informações do app
- Fundo personalizado e cards para cada item
- Gerenciamento global de estado com Context API
- Navegação entre telas (Home → Detalhes → voltar, AddItem → voltar, About → voltar)

Estrutura do projeto:

- context/ShoppingListContext.js → Gerencia globalmente a lista de itens, funções de adicionar, remover e marcar/desmarcar
- screens/HomeScreen.js → Tela inicial mostrando a lista de itens em cards interativos
- screens/AddItemScreen.js → Tela para adicionar novos itens com cálculo automático do total
- screens/DetailsScreen.js → Tela para visualizar detalhes de cada item e alterar status
- screens/AboutScreen.js → Tela com informações sobre o aplicativo
- assets/ → Pasta com imagens e ícones
- App.js → Entrada principal do aplicativo

Tecnologias:

- React Native
- Expo
- React Native Paper
- Context API

Como rodar:

1. Clone o repositório:
   git clone https://github.com/theusmaximiano/lista-compras.git
2. Entre na pasta do projeto:
   cd lista-compras
3. Instale as dependências:
   npm install
4. Inicie o Expo:
   npm start
5. Abra no Expo Go no celular ou no emulador Android/iOS

Observações:

- O app cumpre os requisitos mínimos do projeto: possui telas de Home, Detalhes e Sobre, usando gerenciamento global de estado.
- Funcionalidades extras implementadas: design com fundo personalizado, cards interativos, cálculo automático do total ao adicionar item, navegação entre telas.
- O projeto utiliza Context API para manter a lista de itens centralizada, evitando passar props entre telas.

Autores:

- Matheus Maximiano
- Leonardo Zanardi
