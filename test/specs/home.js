import HomePage from '../pageobjects/home.page';

describe('menu items', () => {
    before(() => {
        HomePage.open();
        HomePage.acceptCookies;
    })
    it('should verify the title', () => {
        expect(browser).toHaveTitle('A million more | Volvo Cars - International');
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

