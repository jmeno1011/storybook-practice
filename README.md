#### storybook setting cli
- npx -p @storybook/cli sb init

#### storybook run cli
- npm run storybook

#### storybook error
- npm install --save-dev @testing-library/dom
- npm install --save-dev @testing-library/user-event
- module을 못찾는다는 에러가 발생하는데 아래 두가지 라이브러리를 dev디펜던시에 추가를 해주고 
- storybook실행을 중단했다가 다시 재실행 해주면 에러가 사라진것을 볼 수 있다.