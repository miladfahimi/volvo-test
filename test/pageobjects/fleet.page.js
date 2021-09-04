import Page from './page';

class FleetPage extends Page {
    get url() {
        return browser.getUrl();
    }
    get headerText() {
        return $$('section[data-autoid="ModelIntro"] h1')[0];
    }
    get headerTextSection2() {
        return $$('section[data-autoid="ModelIntro"] h1')[1];
    }

    open() {
        super.open('https://www.volvocars.com/intl/v/buy/fleet-cars')
    }
    acceptCookies() {
        super.acceptCookiesBtn().click();
    }
}

export default new FleetPage();