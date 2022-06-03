Feature('test1');

Scenario('Открыть главную страницу, адресный план, потребность', ({ I }) => {

    I.amOnPage('https://dnp.megafon.ru/');
    I.waitForElement('a[data-test-item-id="AddressPlan"]', 10);
    I.waitForResponse('https://dnp.megafon.ru/api/address-plan-service/technical-solution', 30); //Разобраться, почему так долго выполняется запрос.

    I.click('a[data-test-item-id="AddressPlan"]');
    //I.waitToHide('#preloader-block', 20);
    I.seeElement('.address-plan-panel.full-size');
    I.waitForResponse('https://dnp.megafon.ru/api/address-plan-service/issue?limit=20&offset=0', 30); //Разобраться, почему так долго выполняется запрос.
    //I.wait(30);

    I.saveScreenshot('debug.png');

});