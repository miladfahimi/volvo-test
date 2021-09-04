export const waitAndClick = (el, back, timeout=3000) => {
    el.click();
    back.waitForDisplayed({ timeout });
    back.click();
    el.waitForDisplayed();
}