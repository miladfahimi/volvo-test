import HomePage from '../pageobjects/home.page';
import chai from 'chai';
import homePage from '../pageobjects/home.page';
const assert = chai.assert
, chaiExpect = chai.expect
, chaiShould = chai.should();

describe('menu items', () => {
    before(() => {
        HomePage.open();
        
    })
    it('should verify the title', () => {
        expect(browser).toHaveTitle('A million more | Volvo Cars - International');
    })
    it('should verify that len of the menu items to be 5', () => {
        chaiExpect(HomePage.menuItems).to.have.lengthOf(5);
    })
    it('should test the menu items to be clickable', () => {

        homePage.acceptCookiesBtn.waitForDisplayed(); // Explicit wait
        HomePage.acceptCookiesBtn.click();
        browser.pause(1000); // Implicit wait
        HomePage.hamMenuBtn.click();
        homePage.menuItem1.waitForDisplayed();

        HomePage.menuItem2.click();
        homePage.backBtn.waitForDisplayed();
        HomePage.backBtn.click();
        homePage.menuItem2.waitForDisplayed();

        HomePage.menuItem3.click();
        homePage.backBtn.waitForDisplayed();
        HomePage.backBtn.click();
        homePage.menuItem3.waitForDisplayed();

        HomePage.menuItem4.click();
        homePage.backBtn.waitForDisplayed();
        HomePage.backBtn.click();
        homePage.menuItem4.waitForDisplayed();

        HomePage.menuItem5.click();
        homePage.backBtn.waitForDisplayed();
        HomePage.backBtn.click();

        expect(HomePage.menuBody).toBeExisting();
        
    })
})

