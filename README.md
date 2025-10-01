# PR Auto Assigner

Uma extensão de navegador que automaticamente atribui você como assignee ao criar novos Pull Requests no GitHub.

## Funcionalidades

- **Auto Atribuição**: Atribuição automática ao criar novos PRs
- **Interface de Controle**: Switch simples para ativar/desativar a extensão
- **Persistência**: Mantém suas preferências salvas entre sessões
- **Não Intrusivo**: 
  - Funciona silenciosamente em segundo plano
  - Permite remoção manual da atribuição
  - Não interfere com atribuições a outros usuários
- **Segurança**:
  - Sem necessidade de autenticação adicional
  - Sem acesso a dados sensíveis
  - Funciona apenas na página de criação de PR

## Instalação

1. Clone este repositório ou faça o download dos arquivos
2. Abra a página de extensões do seu navegador:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
3. Ative o "Modo do desenvolvedor"
4. Clique em "Carregar sem compactação"
5. Selecione a pasta do projeto

## Como Usar

### Uso Básico
1. Após instalar a extensão, simplesmente vá para o GitHub e crie um novo Pull Request
2. A extensão detectará automaticamente a página de criação de PR
3. Você será automaticamente atribuído como assignee do PR

### Controle da Extensão
1. Clique no ícone da extensão na barra de ferramentas do navegador
2. Use o switch para ativar ou desativar a funcionalidade
3. O estado (ativado/desativado) será mantido entre sessões

### Atribuição Manual
- Você pode remover sua atribuição a qualquer momento clicando no botão de assignee
- A extensão não irá re-atribuir automaticamente após uma remoção manual
- Você pode atribuir outros usuários normalmente

## Compatibilidade

- Google Chrome
- Microsoft Edge
- Outros navegadores baseados em Chromium

## Desenvolvimento

### Estrutura do Projeto
```
pr-auto-assigner/
├── manifest.json         # Configuração da extensão
├── src/
│   └── content.js       # Script principal de auto-atribuição
├── popup/
│   ├── popup.html       # Interface do popup
│   ├── popup.css        # Estilos do popup
│   └── popup.js         # Lógica de controle do popup
├── icons/               # Ícones da extensão
└── README.md           # Esta documentação
```

### Tecnologias Utilizadas

- JavaScript (ES6+)
- Chrome Extension Manifest V3
- Chrome Storage API
- DOM Manipulation
- GitHub Web Interface
- CSS3 Animations & Flexbox

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença GPLv3 - veja o arquivo [LICENSE](LICENSE) para detalhes.
