1. Install Codesept Playwright:
   https://codecept.io/playwright/#setup
   npm install codeceptjs playwright --save

2. Install Sample Project & Test
   npx codeceptjs init
   npx codeceptjs gt

3. Запустить тесты:
   npx codeceptjs run --steps

npx codeceptjs run github_test.js
# or
npx codeceptjs run admin/login_test.js