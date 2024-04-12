# Weak? End. We Can Do!

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

대학교 시험 기간 중 힘들어하는 친구들을 응원하고 싶었으며,
작은 글귀를 모아둔 책자를 웹 사이트로 구현해보고 싶었습니다.

## 프로젝트 기간

### 프론트엔드
2022.10 ~ 2022.11 (6주)

### 백엔드
2024.04 ~ 

HTTP 통신규약과 RESTful API에 대한 개념에 대한 학습을 하였으며,
Django와 Spring Boot와 같은 Framework를 경험한 후에
서버 영역를 구현하기 시작하였습니다.

서버 로직을 구현하다보니 클라이언트에서 마음에 들지 않는 부분을 고쳤습니다.
... 아무래도 리팩토링을 해야할 듯 합니다.


## 개발 환경

- React 18.2.0
- NodeJS 18.12.1

## 프로젝트하며 느낀 점

### ⭐ 

### ⭐ 

### ⭐ 