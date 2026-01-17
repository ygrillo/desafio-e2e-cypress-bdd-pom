import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../support/pages/loginPages';

const loginPage = new LoginPage();

Before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

Given('que estou na página de login', () => {
    loginPage.visitLogin();
    cy.url().should('eq', Cypress.config().baseUrl + '/login');
});

When('eu digito o e-mail e senha válidos', (fixtureFile) => {
        loginPage.login(Cypress.env('user_email'), Cypress.env('user_password'));
    });

When('eu digito o e-mail e senha inválidos', (fixtureFile) => {
    cy.fixture('usuarios-invalidos.json').then((usuarios) => {
        usuarios.forEach((usuario) => {
            loginPage.login(usuario.email, usuario.senha);
        })
    });
});

Then('eu devo ser direcionado para a página principal', () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/');
    cy.contains('Full-Fledged practice website for Automation Engineers')
        .should('be.visible');
});

Then('a mensagem de erro "Your email or password is incorrect!" deve ser exibida', () => {
    cy.contains('Your email or password is incorrect!')
        .should('be.visible')
        .and('contain.text', 'Your email or password is incorrect!');
});