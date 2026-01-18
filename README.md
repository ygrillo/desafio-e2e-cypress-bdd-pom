# Desafio E2E Cypress + BDD e Page Object Model

Desafio técnico para demonstrar minhas habilidades ao criar testes E2E usando Cypress e Cucumber (Gherkin) e usando POM para organização do projeto.
Estou usando o site https://automationexercise.com/ para realizar os testes E2E e de API.

## Instalação

`npm install`

Esse comando vai instalar todas as dependências do projeto que estão configuradas no arquivo "package.json".

## Execução E2E e API

`npm run cy:open` -> Modo interativo do Cypress

`npm run cy:cadastro` -> executa todos os testes relacionados a funcionalidade de cadastro

`npm run cy:login` -> executa todos os testes relacionados a funcionalidade de login

`npm run cy:carrinho` -> executa todos os testes relacionados a funcionalidade de carrinho de compras

`npx cypress run --env tags="@login_sucesso"` -> Modo _headless_ com tags

`npm run test:api` -> executa testes nos endpoints **/productsList**, **/brandsList** e **/verifyLogin**.

`npm run test:e2e` -> executa todos os testes E2E no modo _headless_

`npm run test:full` -> executa todos os testes E2E e de API

## Extensões importantes

- Cucumber (Gherkin) Full Support -> para reconhecer a sintaxe Gherkin dentro dos arquivos .feature

- Cypress Snippets -> ajuda muito a autocompletar

## Observações

1. Antes de executar o projeto, configure o arquivo `cypress.env.json` usando o exemplo na pasta raiz. Ele vai servir para fazer login com um usuário e senha já cadastrados no site do Automation Exercise.

1. Para cadastrar um usuário ainda não existente, modifique o arquivo `usuarios-cadastro.json` na pasta `fixtures`.