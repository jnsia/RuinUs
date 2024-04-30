# Ruin Us

## 프로젝트 실행

### Git Clone
```
git clone https://github.com/jnsia/RuinUs.git
```

### Client 실행
```
cd client
npm install
npm run start
```
**http://localhost:3000/** 으로 접속하여 실행 확인

### Server 실행
로컬 환경에 MySQL server가 실행 중이며, "ruinus"라는 이름의 Schema가 생성되어 있어야 함

로컬 MySQL 환경에서 테스트용 관리자 계정을 생성

```
create user 'test'@'localhost' identified by 'test';
create user 'test'@'%' identified by 'test';

grant all privileges on ruinus.* to 'test'@'localhost';
grant all privileges on ruinus.* to 'test'@'%';
```

```
(프로젝트 최상위 폴더로 이동 후 시작)
cd server
npm install
npm run start
```

## 기획 의도

나쁜 감정이나 기억은 어쩌면 필연적인 것들이지만, 스스로를 기분을 슬프게 하거나 마음을 아프게 하고 심지어 몸을 망가뜨리기도 합니다.  힘들게 합니다. 나쁜 생각들이 우리를 찾아왔을 때 어떻게 하면 덜 힘들 수 있을까요...

개인적으로는 우선 글을 적어봅니다. 몸 속에 떠다니는 좋지 않은 생각들을 글로 쓰다보면 스스로가 무엇때문에 힘든지, 왜 힘든지 그리고 얼마나 힘든지를 제 눈으로 확인할 수 있게 되기 떄문이죠. 그렇게 현재 상황을 보다 분명하게 알게 되면 다음 단계가 쉬워지게 됩니다.

현재 당신의 감정을 분류해보는 것이 그 다음 단계입니다. 느껴지는 나쁜 감정들이 어떤 감정이고 어디서 왔는지 알게 되면 더 수월하게 극복할 수 있지 않을까요? 물론 극복하기 어려운 일들도 있겠지만요...

최대한 진심을 담아서 글을 적고 감정을 분류한 후에 작성한 내용들은 쓰레기통에 버리듯이 버려주시면 됩니다. 삭제 기한만 설정해주시면 알아서 불태우겠습니다.

우리를 망치는 나쁜 것들(The things that **Ruin Us**)은 여기에 버려주세요.

## 프로젝트 기간

### 프론트엔드
2022.10 ~ 2022.11 (6주)

### 백엔드
2024.04 ~ 2024.04 (2주)

HTTP 통신규약과 RESTful API에 대한 개념에 대한 학습을 하였으며,
Django와 Spring Boot와 같은 Framework를 경험한 후에
서버 영역를 구현하기 시작하였습니다.

서버 로직을 구현하다보니 클라이언트에서 마음에 들지 않는 부분을 고쳤습니다.
... 아무래도 리팩토링을 해야할 듯 합니다.


## 개발 환경

- React 18.2.0
- NodeJS 18.12.1
- express 4.18.2
- MySQL 8.0

## 프로젝트하며 느낀 점

### ⭐ 

### ⭐ 

### ⭐ 