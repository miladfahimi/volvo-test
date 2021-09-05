import HomePage from '../pageobjects/home.page';
import chai from 'chai';
import homePage from '../pageobjects/home.page';
import { waitAndClick } from '../../utilities/helper';
import resources from '../../resources';

const assert = chai.assert
, chaiExpect = chai.expect
, chaiShould = chai.should();

describe('menu items', () => {
    before(() => {
        HomePage.open();

    })
    it('should verify the title', () => {
        expect(browser).toHaveTitle(resources.homeTitle);
    })
    it('should verify that len of the menu items to be 5', () => {
        chaiExpect(HomePage.menuItems).to.have.lengthOf(5);
    })
    it('should test the menu items to be clickable', () => {

        homePage.acceptCookiesBtn.waitForDisplayed(); // Explicit wait
        HomePage.acceptCookiesBtn.click();
        browser.pause(2000); // Implicit wait
        HomePage.hamMenuBtn.click();
        homePage.menuItem2.waitForDisplayed();

        waitAndClick(HomePage.menuItem2, homePage.backBtn,);
        waitAndClick(HomePage.menuItem3, homePage.backBtn,);
        waitAndClick(HomePage.menuItem4, homePage.backBtn,);
        waitAndClick(HomePage.menuItem5, homePage.backBtn,);

        expect(HomePage.menuBody).toBeExisting();

    })
})

