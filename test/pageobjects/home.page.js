import Page from './page';

class HomePage extends Page{

    get hamMenuBtn() {
        return $('#sitenav-v2-sidenav-toggle');
    }
    get menuBody() {
        return $('div[class="_SiteNav-a _SiteNav-c _SiteNav-d _SiteNav-en _SiteNav-fj _SiteNav-fk _SiteNav-fl _SiteNav-fm _SiteNav-fn _SiteNav-h _SiteNav-j"]');
    }
    get menuItems() {
        return $$('div[data-autoid="nav:sideNavLinksMenu"] button');
    }
    get menuItem1() {
        return $('div[data-autoid="nav:sideNavLinksMenu"] button:nth-child(1)');
    }
    get menuItem2() {
        return $('div[data-autoid="nav:sideNavLinksMenu"] button:nth-child(2)');
    }
    get menuItem3() {
        return $('div[data-autoid="nav:sideNavLinksMenu"] button:nth-child(3)');
    }
    get menuItem4() {
        return $('div[data-autoid="nav:sideNavLinksMenu"] button:nth-child(4)');
    }
    get menuItem5() {
        return $('div[data-autoid="nav:sideNavLinksMenu"] button:nth-child(5)');
    }
    get backBtn() {
        return $('button[aria-label="Go back in Site Navigation"]');
    }
    get acceptCookiesBtn() {
        return $('button[class="optanon-allow-all accept-cookies-button"]');
    }

    open() {
        super.open('https://www.volvocars.com/intl/v/car-safety/a-million-more')
    }

    acceptCookies() {
        super.acceptCookiesBtn().click();
    }
}

export default new HomePage();