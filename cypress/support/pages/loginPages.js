/**
 * Page Object para a página de Login do AutomationExercise
 */

export class LoginPage {

    /** Visita a página de login */
    visitLogin() {
        cy.visit('/login');
    }

    /** Preenche o campo de e-mail */
    fillEmail(email) {
        cy.get('[data-qa="login-email"]').type(email);
    }

    /** Preenche o campo de senha */
    fillPassword(password) {
        cy.get('[data-qa="login-password"]').type(password);
    }

    /** Clica no botão de login */
    submit() {
        cy.get('[data-qa="login-button"]').click();
    }

    /** Realiza o login com e-mail e senha fornecidos */
    login(email, password) {
        this.visitLogin();
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
    }
}