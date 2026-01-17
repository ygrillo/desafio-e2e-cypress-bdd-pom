#language: pt

@login
Funcionalidade: Login

@login_sucesso
Cenário: Login com sucesso
    Dado que estou na página de login
    Quando eu digito o e-mail e senha válidos
    Então eu devo ser direcionado para a página principal

@login_erro
Cenário: Login com credenciais inválidas
    Dado que estou na página de login
    Quando eu digito o e-mail e senha inválidos
    Então a mensagem de erro "Your email or password is incorrect!" deve ser exibida

Exemplos:    
    | fixture                 | 
    | usuarios-invalidos.json |