# 💻 TEAM NOTE - Backend

## 🏠 [Home Page Link](https://teamnote.co.kr)

#

## 소개 영상 [youtube]

<hr>
<br>

## 🗂️ 목차

### 1. [프로젝트 소개](#-프로젝트-소개)

### 2. [팀 구성](#-팀-구성)

### 3. [기술 스텍](#-기술스택-why)

### 4. [라이브러리](#-라이브러리-why)

### 5. [주요 기능](#️-주요-기능)

### 6. [아키텍쳐](#-백엔드-아키텍처)

### 7. [최종 성과](#최종-성과)

### 8. [트러블 슈팅](#트러블-슈팅)

<hr>
<br>

## 📈 프로젝트 소개

실용적이고, 매력적인 UI로 협업에서 받는 스트레스를 줄여 드립니다!

함께 프로젝트를 하는 사람들과 일정을 공유하고, 정리하고, 대화를 나눠보세요!

Share your task ~! Share your Idea !

<br>

## 🗓 프로젝트 기간

- 2022년 6월 24일 ~ 2022년 8월 5일

<br>

###  팀 멤버

<table>
   <tr>
    <td align="center" ><b><a href="https://github.com/horang-e">김하연</a></b></td>
    <td align="center"><b><a href="https://github.com/appreciate87">전영준</a></b></td>
     <td align="center"><b><a href="https://github.com/sojin0106">이형섭</a></b></td>
  </tr>
  <tr>
     <td align="center"><a href="https://github.com/hayeonkimm"><img src="https://user-images.githubusercontent.com/105115805/182905584-e387b6d5-d48f-459c-a92b-8af68ee7a175.jpeg" width="200px" /></a></td>
     <td align="center"><a href="https://github.com/jyj9784"><img src="https://user-images.githubusercontent.com/105115805/182905519-359fd892-e3a6-4d91-94cc-5dbebdc0773b.jpeg?v=4" width="200px" /></a></td>
     <td align="center"><a href="https://github.com/vennydev"><img src="https://user-images.githubusercontent.com/105115805/182900945-8c414eb4-0d50-4741-8d61-38bf3f1bfeca.JPG?v=4" width="200px" /></a></td>
  
    
  </tr>
  <tr>
     <td align="center"><b>(L)Backend</b></td>
     <td align="center"><b>Backend</b></td>
     <td align="center"><b>(VL)Frontend</b></td>
  </tr>
</table>

<br/>
<br/>


| 이름       | 포지션       | 담당 기능 구현          |
| ---------- | ------------ | ------------------------------ |
| **김하연** | `백엔드` | 담당 기능 |
| **전영준** | `백엔드` | 담당 기능 |
| **이형섭** | `프론트엔드` | 담당 기능 |

<br>
<br>

## 🛠 기술스택 ([WHY?](https://sprout-dress-47a.notion.site/2d490dffed3f486ca5af157a68a64970))

| 기술스택   |        설명         |
| ---------- | :-----------------: |
| Node.js    | 자바스크립트 런타임 |
| Express    |    웹 프레임워크    |
| Git Action |      CI/CD 툴       |
| Nginx      |     Proxy 서버      |
| Docker     |       Docker        |
| MongoDB    |  NoSQL 비관계형 DB  |
| VsCode     |  소스 코드 편집기   |

<br>

## 📖 라이브러리 ([WHY?](https://spark-stove-6bf.notion.site/9064e96f94854aaca56925f80d978bdb))

| 라이브러리           |       설명       |
| -------------------- | :--------------: |
| bcrypt               | 비밀번호 암호화  |
| cors                 | 교차 리소스 공유 |
| dotenv               |  환경변수 관리   |
| express              |       서버       |
| helmet               |  HTTP 헤더 보안  |
| jest                 |   테스트 코드    |
| jsonwebtoken         |   서명 암호화    |
| moment               | 날짜 라이브러리  |
| morgan               |  Http Log 기록   |
| swagger--ui--express |    API 문서화    |

<br>

## 🕹️ 주요 기능

<!--


<hr>

<br>

## 🧱 서비스 아키텍처

![스크린샷 2022-08-01 오후 7 04 14](https://user-images.githubusercontent.com/85288036/182125010-ce7aed0f-3075-47b9-86ec-f40d42bccd11.png)
<br>



<br>

## 📂 [Project Notion](https://crawling-health-e0d.notion.site/Project-3b911ebdb6114fb7be4b54956a9579dd)

<br>

## ✍ Code Convention

- api url : dash case
- models : camel case
- file : dash case
- 변수 : lower case camel case
- function: camel case, 동사+명사

<br>

## 🐱 Git Rule

<br>

## 최종 성과

<img src="https://user-images.githubusercontent.com/86486778/144451851-c3a4a905-f7ab-4003-8028-6ccf611ae58e.png" width="300px">
<img src ="https://user-images.githubusercontent.com/86486778/144452071-7ad6e083-e561-4eeb-8647-89ede8ac650e.png" width="300px" height="200px">

<img src="https://user-images.githubusercontent.com/86486778/144451657-7d34f9fa-27b1-4b5d-8a96-a541c363e9ad.png" width="300px">

- redis hyperloglog를 이용한 일일 방문자 집계
- 광고 게시 5일간 방문자 수 총 1197명, 투표참여 수 1214회
- 121개의 게시글 작성
- 설문조사시 높은 만족도

#### 시간적 여유가 부족한 개인투자자들이 의견을 나눌 수 있는 쉽고 간편한 투표 커뮤니티라는 기획이 적중하여 만들어낸 결과라고 생각

<br>

## ❗트러블 슈팅

### 1. VPC

- **어떤 문제점을 겪었는가?**

  Elastic Cache를 사용하여 Redis를 구성 후 **다른 AWS 계정**으로 Elastic Cache에 접근했을 때. `Connection Error` 발생하는 이슈

- **왜 이런 문제가 발생했는가?**

  Elastic Cache는 RDS와는 다르게 **동일한 VPC 내부에서만 경우에 접근이 가능**하다.

  즉 서로 다른 AWS 계정은 서로 다른 VPC에 속하기 때문이다.

- **어떻게 해결했는가?**

  ![image](https://user-images.githubusercontent.com/84619866/144465228-7aa9f54f-489d-4209-9c70-c11e5edb6a96.png)

  `VPC Peering` 라는 기능을 AWS에서 제공을 해준다. 이 기능은 서로 다른 AWS 계정끼리 VPC를 공유할 수 있게 해준다.

  추가적으로 같은 `가용 영역`에 존재할 경우 `무료`요금이다. 신청자가 VPC Peering을 요청하면 수락자가 요청을 받고, 라우팅 테이블을 설정 후, 보안그룹(인바운드 규칙)을 설정해준다.

  VPC Peering 설정은 AWS 공식 문서에 정리가 잘 되어있다.

  > 참고문헌:https://docs.aws.amazon.com/ko_kr/vpc/latest/peering/working-with-vpc-peering.html

### 2. CI/CD

- **어떤 문제점을 겪었는가?**

  1. 보안 상 `.env`파일을 Github 저장소에 push하지 못하기에 젠킨스에서 테스트 코드를 검증할 시 **환경 변수를 참조 하지못하는 이슈**
  2. Dockerfile 를 빌드할 경우, `.env`파일을 참조해오지 못해서 CI/CD 배포 후 **컨테이너에 어플리케이션을 구동하기 위한 `.env`가 없는 이슈**

- **왜 이런 문제가 발생했는가?**

  1. `.env`은 보안상 예민한 정보를 담고있어 Public 저장소에 올릴 수 없었다.

     그러므로 Github 저장소 파일을 기준으로 동작하는 CI/CD 과정에서 테스트코드 검증 과정을 실패하여 에러가 발생했다.

  2. CD 단계에서 DockerFile를 build할 때 `.env`가 없었으므로 그 결과 해당 image로 만든 컨테이너안에는 `.env`가 없었다.

- **어떻게 해결했는가?**

  1. `Jenkins`내에서 환경 변수를 설정하여 테스트코드 실행 시 참조해올 수 있도록 설정하였다.
  2. EC2 호스트 영역에 미리 `.env`를 생성하고 docker run 할 때, -volumes 옵션으로 `.env`파일을 마운팅하여 컨테이너에서 외부 파일을 참조할 수 있게 설정하였다.

### 3. Nginx

- **어떤 문제점을 겪었는가?**

  ![image](https://user-images.githubusercontent.com/84619866/144455878-e89d7d5a-487a-495f-8999-9e7a815f172c.png)

  위와 같은 그림으로 EC2 서버의 Port 단위로 부하를 분산하는 인프라로 구성하였다.

  그러나 실제 부하테스트를 진행한 결과 **node 1개로 수행했을 때와 node 2개로 수행했을 경우 차이가 없었다**.

- **왜 이런 문제가 발생했는가?**

  위와 같은 그림으로는 만약 100개의 요청이 왔을 때, 요청을 분담하여 처리할 뿐 EC2 하나가 처리해야할 요청의 총량이 줄어드는 것이 아니다.

- **어떻게 해결했는가?**

  ![image](https://user-images.githubusercontent.com/84619866/144468346-5eb12e8b-66e7-4dd4-8216-aa66326e0586.png)

  Reverse Proxy를 로드 밸런서의 역할로도 사용하며 요청을 각각의 서버에 분산처리하도록 설계하였다.

  - 결과

    ![image](https://user-images.githubusercontent.com/84619866/144453387-0ab81c66-0d82-419a-8db7-69fb0f91baaf.png)

    > 물리적인 서버를 나눈 후 중개서버로 로드밸런싱을 하여 서버를 나누기 전/후 부하테스트를 진행한 사진

    - 기존에는 많은 요청을 감당하지 못해 에러가 확인되기도 하며 테스트 기간동안 3초 이상의 응답속도를 보임

    - 반면, 로드밸런싱 후에는 에러가 나지 않으며 서버 부하를 낮출 수 있도록 개선된 모습을 확인할 수 있음

### 4. Promise.all

- **어떤 문제점을 겪었는가?**

  - 변경 전 코드
    ```javascript
     ...
    const either = await sequelize.query(mainQuery.getMainForEither(), { type:QueryTypes.SELECT });
    const multi = await sequelize.query(mainQuery.getMainForMulti(), { type:QueryTypes.SELECT });
    const [eitherNum, multiNum] = await countPosting();
    const attendNum = await countAttend();
    ```
    위와 같이 코드를 구현할 경우, 해당 API 부하테스트 결과 최대 응답시간이 9초로 매우 느린 성능을 보여주었다.

- **왜 이런 문제가 발생했는가?**

  ![image](https://user-images.githubusercontent.com/84619866/144460615-b3295b13-9f92-4b5d-822f-95ca344437f3.png)

  위와 같이 연속적인 비동기 처리를 할 경우, async-await 함수를 **하나하나 기다리므**로 소요 시간이 오래 걸린다.

- **어떻게 해결했는가?**

  ![image](https://user-images.githubusercontent.com/84619866/144461227-3fc34121-44f7-4fec-b7ca-ceb39ab6f318.png)

  결과적으로 말하면 Promise.all 을 사용하였다. Promise.all 은 서로 영향을 끼치지 않는, 즉 **독립적으로 수행되는 비동기 함수를 병렬처리**해준다.

  그림으로보면 총 걸린 시간은 가장 오래걸린 수행 시간 3초로 `총 소요시간 = 가장 오래걸린 함수 시간` 이다.

  - 변경 후 코드
    ```javascript
    const [either, multi, [eitherNum, multiNum], attendNum]: [
      MainEither[],
      MainMulti[],
      number[],
      number
    ] = await Promise.all([
      //Promise.all로 각각의 데이터들(찬반투표 포스팅, 객관식 포스팅, 찬반투표 포스팅갯수, 객관식 포스팅갯수, 참여자수)를 병렬적으로 받아온다.
      sequelize.query(mainQuery.getMainForEither(), {
        type: QueryTypes.SELECT,
      }),
      sequelize.query(mainQuery.getMainForMulti(), { type: QueryTypes.SELECT }),
      countPosting(),
      countAttend(),
    ]);
    ```
    > 그림 참고:https://code-masterjung.tistory.com/91
