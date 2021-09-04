import HomePage from '../pageobjects/home.page';

describe('menu items', () => {
    it('should open the main page nad verify the title', () => {
        HomePage.open();
        expect(browser).toHaveTitle('A million more | Volvo Cars - International');
        HomePage.acceptCookies;
        browser.pause(2000);
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

