import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import { CadastroPage } from '../pages/cadastroPages';
import { faker } from '@faker-js/faker/locale/pt_BR';

const cadastroPage = new CadastroPage();

Before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

Given('que estou na página de cadastro', () => {
    cadastroPage.visitCadastro();
    cy.url().should('eq', Cypress.config().baseUrl + '/login');
});

When('eu preencho o nome e email', () => {
    const personFirstName = faker.person.firstName();
    const personLastName = faker.person.lastName();
    cadastroPage.fillName(faker.person.fullName({ firstName: personFirstName, lastName: personLastName }));
    cadastroPage.fillEmail(faker.internet.email({ firstName: personFirstName, lastName: personLastName }));
});

When('eu clico no botão de submeter', () => {
    cadastroPage.submit();
    cy.url().should('include', '/signup');
});

When('eu preencho todos os campos obrigatórios do formulário de cadastro', () => {
    cadastroPage.fillPassword('senha123');
    cadastroPage.fillFirstName('Yuri');
    cadastroPage.fillLastName('Grillo');
    cadastroPage.fillAddress('R. dos Alfeneiros, 4')
    cadastroPage.selectCountry('United States');
    cadastroPage.fillState('Ontario');
    cadastroPage.fillCity('Toronto');
    cadastroPage.fillZipCode('13091604');
    cadastroPage.fillMobileNumber('19974021745');
});

When('eu clico no botão de criar conta', () => {
    cadastroPage.clickCreateAccountButton();
});

Then('eu devo ver a mensagem de conta criada com sucesso', () => {
    cy.contains('Account Created!').should('be.visible');
    cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible');
});

Then('eu devo ver a mensagem de erro "(Street address, P.O. Box, Company name, etc.)"', () => {
    cy.contains('(Street address, P.O. Box, Company name, etc.)').should('be.visible');
});