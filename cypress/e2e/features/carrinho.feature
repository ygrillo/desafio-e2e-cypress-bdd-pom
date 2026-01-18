#language: pt

Funcionalidade: Adicionar ao carrinho

@carrinho
Cenário: Adicionar um produto ao carrinho com sucesso
    Dado que estou na página principal
    Quando eu clico no botão "Adicionar ao carrinho"
    Então um modal de sucesso deve aparecer
    E o produto deve ser adicionado ao carrinho com sucesso