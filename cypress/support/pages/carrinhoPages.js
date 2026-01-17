/**
 * Page Object para a página do Carrinho do AutomationExercise
 */

export class CarrinhoPage {

    /** Visita a página do carrinho */
    visitCarrinho() {
        cy.visit('/view_cart');
    }

    /** Clica no botão de adicionar para o carrinho o primeiro produto */
    addToCartFirstProduct() {
        cy.contains('Add to cart').first().click();
    }
}