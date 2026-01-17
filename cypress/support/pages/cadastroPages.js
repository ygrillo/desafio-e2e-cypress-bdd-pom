/**
 * Page Object para a página de Cadastro do AutomationExercise
 */

export class CadastroPage {

    /** Visita a página de cadastro */
    visitCadastro() {
        cy.visit('/login');
    }

    /** Preenche o campo de nome */
    fillName(name) {
        cy.get('[data-qa="signup-name"]').type(name);
    }

    /** Preenche o campo de e-mail */
    fillEmail(email) {
        cy.get('[data-qa="signup-email"]').type(email);
    }

    /** Clica no botão de criar conta */
    submit() {
        cy.get('[data-qa="signup-button"]').click();
    }

    /** Preenche o campo de senha */
    fillPassword(password) {
        cy.get('[data-qa="password"]').type(password);
    }

    /** Preenche o campo de primeiro nome */
    fillFirstName(firstName) {
        cy.get('[data-qa="first_name"]').type(firstName);
    }

    /** Preenche o campo de último nome */
    fillLastName(lastName) {
        cy.get('[data-qa="last_name"]').type(lastName);
    }

    /** Preenche o campo de endereço */
    fillAddress(address) {
        cy.get('[data-qa="address"]').type(address);
    }

    /** Seleciona o país */
    selectCountry(country) {
        cy.get('[data-qa="country"]').select(country);
    }

    /** Preenche o campo de estado */
    fillState(state) {
        cy.get('[data-qa="state"]').type(state);
    }

    /** Preenche o campo de cidade */
    fillCity(city) {
        cy.get('[data-qa="city"]').type(city);
    }

    /** Preenche o campo de CEP */
    fillZipCode(zipCode) {
        cy.get('[data-qa="zipcode"]').type(zipCode);
    }

    /** Preenche o campo de número de celular */
    fillMobileNumber(mobileNumber) {
        cy.get('[data-qa="mobile_number"]').type(mobileNumber);
    }

    /** Clica no botão de criar conta */
    clickCreateAccountButton() {
        cy.get('[data-qa="create-account"]').click();
    }

    /** Realiza o preenchimento do nome e e-mail e submete o formulário */
    preencherNomeEmailEEnviar(name, email) {
        this.visitCadastro();
        this.fillName(name);
        this.fillEmail(email);
        this.submit();
    }
}