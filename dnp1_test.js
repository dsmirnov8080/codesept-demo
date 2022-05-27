Feature('test1');

Scenario('Открыть главную страницу, адресный план, потребность', ({ I }) => {

    I.amOnPage('https://dnp.megafon.ru/');
    I.waitForElement('a[data-test-item-id="AddressPlan"]', 10);
    //I.see('Адресный план', 'a[data-test-item-id="AddressPlan"]');
    //I.seeElement('.address-plan-panel.full-size');
    I.click('a[data-test-item-id="AddressPlan"]');
    //I.waitToHide('#preloader-block', 20);
    I.seeElement('.address-plan-panel.full-size');

    I.saveScreenshot('debug.png');

});