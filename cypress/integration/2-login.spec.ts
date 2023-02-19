import { Viewport } from '../common/constants/viewport.constant';
import { Login } from '../fixtures/login.interface';

let login: Login;

before(() => {
    cy.fixture('login').then(data => {
        login = data;
    });
});

describe('Login', () => {

    let screenshotName = 'web';

    beforeEach(() => {
        if (Viewport.iPhone6) {
            cy.viewport('iphone-6');
            screenshotName = 'iphone6';
        }
    });

    it('Click Login button', () => {
        cy.get('[data-cy="btn-login"]').click();
    });

    it('Click menu', () => {
        cy.get('[data-cy="btn-menu"]').click();
    });

    it('Should display my username', () => {
        cy.contains(`Hello ${login.username}`).should('be.visible');
        cy.screenshot(`${screenshotName}/2-login`);
    });
});
