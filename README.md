# Desafio E2E Cypress + BDD e Page Object Model

Desafio técnico para demonstrar minhas habilidades ao criar testes E2E usando Cypress e Cucumber (Gherkin) e usando POM para organização do projeto.

## Instalação

`npm install`

Esse comando vai instalar todas as dependências do projeto que estão configuradas no arquivo "package.json".

## Execução

`npx cypress open` -> Modo interativo do Cypress (você vai ver o browser sendo aberto e navegando)

`npx cypress run --env tags="@login_sucesso"` -> Modo _headless_ com tags

## Extensões importantes

- Cucumber (Gherkin) Full Support -> para reconhecer a sintaxe Gherkin dentro dos arquivos .feature

- Cypress Snippets -> ajuda muito a autocompletar

## Observações

1. Antes de executar o projeto, configure o arquivo `cypress.env.json` usando o exemplo na pasta raiz. Ele vai servir para fazer login com um usuário e senha já cadastrados no site do Automation Exercise.

1. Para cadastrar um usuário ainda não existente, modifique o arquivo `usuarios-cadastro.json` na pasta `fixtures`.