#language: pt

Funcionalidade: Cadastro de Usuário

@cadastro
Cenário: Cadastro com sucesso
    Dado que estou na página de cadastro
    Quando eu preencho o nome e email
    E eu clico no botão de submeter
    E eu preencho todos os campos obrigatórios do formulário de cadastro
    E eu clico no botão de criar conta
    Então eu devo ver a mensagem de conta criada com sucesso