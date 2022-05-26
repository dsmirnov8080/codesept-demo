open main page
I.click('Адресный план'); //click on data-test-item-id="AddressPlan"

I.waitForElement('#agree_button', 30); // secs
// clicks a button only when it is visible
//https://codecept.io/helpers/Playwright/#clearcookie
I.click('#agree_button');