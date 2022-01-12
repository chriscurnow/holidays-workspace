import { getAddHolidayButton, getHolidays } from '../support/app.po';

describe('HolidayApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display holidays', () => {
    getHolidays().should((t) => expect(t.length).equal(2));
    getAddHolidayButton().click();
    getHolidays().should((t) => expect(t.length).equal(3));
  });
});
