# 원티드 프리온보딩 - TODO APP :computer:

## 소개

원티드 프리온보딩에서 진행한 간단한 회원가입 및 할 일 CRUD 기능이 구현되어있습니다.
API는 원티드에서 주어진 api로 진행하였습니다.

## 시연

### ToDo APP을 한눈에 볼 수 있습니다. 👉 [ToDo APP YouTube 데모영상](https://www.youtube.com/watch?v=1EQDwj4kPvg)

### Main

   <img src="https://github.com/nohnohnohnoh/ToDo-APP/assets/97607572/96297315-d1a0-4641-85f0-7ef7e5410cb3"/>

### AUTH (SIGNIN, SIGNUP)

#### SIGN IN

  <img src = "https://github.com/nohnohnohnoh/ToDo-APP/assets/97607572/b2956af0-0a8c-4e1c-a1cc-17c1bf5525dc"/>

#### SIGN UP

  <img src = "https://github.com/nohnohnohnoh/ToDo-APP/assets/97607572/e6757929-8feb-48c8-a3dc-255a0e603a25"/>

### TODO (ADD, MODIFY, DELETE)

#### ADD TODO

  <img src="https://github.com/nohnohnohnoh/ToDo-APP/assets/97607572/f04c808f-2408-44f3-9055-16d21d26ae24"/>

#### MODIFY TODO

  <img src="https://github.com/nohnohnohnoh/ToDo-APP/assets/97607572/a0dc1f3e-2ab7-4aaa-b253-d35e96514ea2"/>

#### DELETE TODO

  <img src="https://github.com/nohnohnohnoh/ToDo-APP/assets/97607572/fdad9209-98e9-459a-9d0a-046faa0d1a99"/>

## 실행 방법

```
- git clone https://github.com/nohnohnohnoh/wanted-pre-onboarding
- // 터미널을 두 개로 나눈다.
- // 각 터미널에 cd Front cd BackEnd
- // Front 터미널에서는 npm install Back 터미널에서는 yarn install을 한다.
- // Front 터미널에서 npm start Back 터미널에서 yarn start를 한다.
```

## 사용 스택

- JavaScript
- React
- Recoil
- Typescript
- React-query

## 구현 요구 사항

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [ ] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [ ] 이메일 조건 : 최소 `@`, `.` 포함
  - [ ] 비밀번호 조건 : 8자 이상 입력
  - [ ] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [ ] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [ ] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [ ] 목록 / 상세 영역으로 나누어 구현해주세요
  - [ ] Todo 목록을 볼 수 있습니다.
  - [ ] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [ ] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [ ] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [ ] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [ ] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 느낀 점

- CRUD의 기능을 다시 한번 상기시키는 시간이었다. 그리고 항상 fetch만을 써오다가 axios를 씀으로써 axios에 대한 이해가 넓어질 수 있는 시간이기도 했다. typescript를 씀으로써 왜 typescript가
  필수인지도 알게되었다. 또한 component를 많이 늘리는것보다는 하나의 componet를 중심으로 구현함으로써 좀 더 구조파악이 쉽게 고민하는 시간이기도 했다. 하지만 이것보다 좀 더 좋은 구조 파악이 있을거라 생각하는데 차후 리팩토링을 하면서 좀 더 고민을 해봐야할 것 같다.
- React-query에 useQuery useMutation을 씀으로써 get post put delete를 실제 적용해 사용해보는 시간이었다. 일단 직관적으로 코드가 굉장히 간결해져 코드의 가독성을 높일 수 있었던 것 같다. custom hook을 만들어서 관리하면 더욱더 간결해 질 수 있겠구나도 생각하였다. 또한 동일 데이터를 여러번 요청하면 option에 따라 요청시간 및 횟수를 조절할 수 있다는 점에서 기존에 해왔던 useEffect를 쓰지 않고 관리할 수 있다는 점에서 가장 큰 매력을 느꼈다.
