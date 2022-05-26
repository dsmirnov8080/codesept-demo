



1. Install Codesept Playwright:
   https://codecept.io/playwright/#setup
   npm install codeceptjs playwright --save

3. Install Sample Project & Test
   npx codeceptjs init
   npx codeceptjs gt

4. Сделать свой тест (Feature)
   todo_test.js
   Feature('ToDo');
   Scenario('create todo item', ({ I }) => {
   I.amOnPage('http://todomvc.com/examples/react/');
   I.dontSeeElement('.todo-count');
   I.fillField('What needs to be done?', 'Write a guide');
   I.pressKey('Enter');
   I.see('Write a guide', '.todo-list');
   I.see('1 item left', '.todo-count');
   });

5. Добавить тест в steps_file.js
   I.todo();



6. Запустить тесты:
   npx codeceptjs run --steps

npx codeceptjs run github_test.js
# or
npx codeceptjs run admin/login_test.js


2. Config Codesept
   codecept.conf.js

{ // ..
helpers: {
Playwright: {
url: "http://localhost",
show: true,
browser: 'chromium'
}
}
// ..
}








***************************
Добавить примеры тестов:
npm install codeceptjs playwright --save
npx codeceptjs init
npx codeceptjs gt