import { Viewport } from '../common/constants/viewport.constant';
import { IDUtil } from '../common/utils';

const TXT_QUESTION = '[data-cy="txt-question"]';
const TXT_ANSWER = '[data-cy="txt-answer"]';
const LBL_VIEWS = '[data-cy="lbl-views"]';

describe('Write', () => {

    let screenshotName = 'web';

    beforeEach(() => {
        if (Viewport.iPhone6) {
            cy.viewport('iphone-6');
            screenshotName = 'iphone6';
        }
    });

    const question = `Automation Test ${IDUtil.ObjectId().substring(8, 13)}`;
    const answer = IDUtil.UUID();

    it('Click Write navigation', () => {
        cy.get('[data-cy="nav-write"]').click();
    });

    it('Should display question text field', () => {
        cy.get(TXT_QUESTION).should('be.visible');
    });

    it('Enter question', () => {
        cy.get(TXT_QUESTION).type(question);
    });

    it('Enter answer', () => {
        cy.get(TXT_ANSWER).type(answer);
        cy.screenshot(`${screenshotName}/3.1-writing-question-and-answer`);
    });

    it('Click Post button', () => {
        cy.get('[data-cy="btn-post"]').click().then(() => {
            cy.get('[data-cy="nav-home"]').click();
        });
    });

    it('Should display the question', () => {
        cy.contains(question).should('be.visible');
        cy.screenshot(`${screenshotName}/3.2-question-was-posted`);
    });

    it('Number of views should start with zero', () => {
        cy.get(LBL_VIEWS).first().should('contain.text', '0 views');
    });

    it('Click the view icon', () => {
        cy.get('[data-cy="btn-read"]').first().click();
    });

    it('Should display the answer', () => {
        cy.contains(answer).should('be.visible');
    });

    it('Number of views should now be incremented', () => {
        cy.get(LBL_VIEWS).first().should('contain.text', '1 views');
        cy.screenshot(`${screenshotName}/3.3-views-incremented`);
    });


});