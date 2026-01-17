import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import { CarrinhoPage } from '../../support/pages/carrinhoPages';

const carrinhoPage = new CarrinhoPage();

Before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

Given('que estou na página principal', () => {
    cy.visit('/');
    cy.url().should('eq', Cypress.config().baseUrl + '/');
});

When('eu clico no botão "Adicionar ao carrinho"', () => {
    carrinhoPage.addToCartFirstProduct();
});

Then('um modal de sucesso deve aparecer', () => {
    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-content').within(() => {
        cy.contains('Added!').should('be.visible');
    });
});

Then('o produto deve ser adicionado ao carrinho com sucesso', () => {
    carrinhoPage.visitCarrinho();
    cy.url().should('eq', Cypress.config().baseUrl + '/view_cart');
    cy.get('.cart_info').should('be.visible');
    cy.get('.cart_info').within(() => {
        cy.get('.cart_description').should('be.visible');
        cy.get('.cart_description').within(() => {
            cy.contains('Blue Top').should('be.visible');
        });
        cy.get('.cart_quantity').within(() => {
            cy.contains('1').should('be.visible');
        });
    });
});
