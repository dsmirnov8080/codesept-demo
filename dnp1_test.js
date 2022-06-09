Feature('test1');

Scenario('Открыть главную страницу, адресный план, потребность', ({ I }) => {

    I.amOnPage('https://dnp.megafon.ru/'); //Открыть DNP
    I.waitForElement('a[data-test-item-id="AddressPlan"]', 10); //Ждем до 10 секунд до появления элемента Адресный план
    I.waitForResponse('https://dnp.megafon.ru/api/address-plan-service/technical-solution', 30); //Ждем до 30 секунд прогрузки тех решений
    I.click('a[data-test-item-id="AddressPlan"]'); //Кликаем по Адресному плану
    I.seeElement('.address-plan-panel.full-size'); //Видим форму Адресного плана
    I.waitForResponse('https://dnp.megafon.ru/api/address-plan-service/issue?limit=20&offset=0', 30); //Ждем до 30 секунд прогрузки потребностей
    I.saveScreenshot('debug.png'); //Делаем скриншот в каталог /output

});