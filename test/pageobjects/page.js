export default class Page{
    get acceptCookiesBtn() {
        return $('button[class="optanon-allow-all accept-cookies-button"]');
    }
    open(path) {
        browser.url(path);
    }
}