import FleetPage from '../pageobjects/fleet.page';
import chai from 'chai';
const assert = chai.assert
, chaiExpect = chai.expect
, chaiShould = chai.should();

describe('Test fleet page', () => {
    before(() => {
        FleetPage.open();
        FleetPage.acceptCookies;
    })
    it('should verify the title', () => {
        expect(browser).toHaveTitle('Fleet cars | Volvo cars - International');
    })
      it('should have a url containing -> /buy/fleet-cars', () => {
        chaiExpect(FleetPage.url).to.include('/buy/fleet-cars');
    });
    it('should have a header text including -> Safer and smarter. Better business for you.', () => {
        FleetPage.headerText.waitForDisplayed();
        expect(FleetPage.headerText).toHaveTextContaining('Safer and smarter. Better business for you.');
    });
    it('should the second header text not to be empty', () => {
        assert.isNotEmpty(FleetPage.headerTextSection2);
    });
})
