import { Viewport } from '../common/constants/viewport.constant';
import { Login } from '../fixtures/login.interface';

Cypress.Screenshot.defaults({
    overwrite: true
});

let login: Login;

before(() => {
    cy.fixture('login').then(data => {
        login = data;
    });
});

describe('Registration', () => {

    let screenshotName = 'web';

    beforeEach(() => {
        if (Viewport.iPhone6) {
            cy.viewport('iphone-6');
            screenshotName = 'iphone6';
        }
    });

    it('Visit the website', () => {
        /**
         * This is an alias generated in cypress/support/command.ts
         * Commonly we use cy.open('http://...')
         */
        cy.openWebsite();
    });

    it('Enter username', () => {
        cy.get('[data-cy="txt-username"]').type(login.username);
    });

    it('Enter password', () => {
        cy.get('[data-cy="txt-password"]').type(login.password);
    });

    it('Click Register button', () => {
        cy.get('[data-cy="btn-register"]').click();
    });

    it('Should display the snackbar with Registration or Username', () => {
        cy.contains(/Registration|Username/i).should('be.visible');
        cy.screenshot(`${screenshotName}/1-registration`);
    });
});
