import HomePage from '../pageobjects/home.page';
import chai from 'chai';
const assert = chai.assert
, chaiExpect = chai.expect
, chaiShould = chai.should();

describe('menu items', () => {
    before(() => {
        HomePage.open();
        HomePage.acceptCookies;
    })
    it('should verify the title', () => {
        expect(browser).toHaveTitle('A million more | Volvo Cars - International');
    })
    it('should verify that len of the menu items to be 5', () => {
        chaiExpect(HomePage.menuItems).to.have.lengthOf(5);
    })
    it('should test the menu items to be clickable', () => {

        HomePage.acceptCookiesBtn.click();
        browser.pause(2000);
        HomePage.hamMenuBtn.click();
        browser.pause(1000);

        HomePage.menuItem2.click();
        browser.pause(1000);
        HomePage.backBtn.click();
        browser.pause(1000);

        HomePage.menuItem3.click();
        browser.pause(1000);
        HomePage.backBtn.click();
        browser.pause(1000);

        HomePage.menuItem4.click();
        browser.pause(1000);
        HomePage.backBtn.click();
        browser.pause(1000);

        HomePage.menuItem5.click();
        browser.pause(1000);
        HomePage.backBtn.click();
        browser.pause(1000);

        expect(HomePage.menuBody).toBeExisting();
        
    })
})

