할 일

-   PostgreSQL 스키마 구성하기 (완료)
-   정적 리소스 (index, board) 배포하기 (완료)

    -   route
        -   / -> index.html
        -   /board -> board.html

-   스키마 만든 후, 테이블 만들고 거기에 더미데이터 넣기 (완료)

-   Node.js의 pg 라이브러리를 통해 서버와 DB 연동하기

    -   지금 문제점 : 정적리소스 배포하면 query문이 안 먹음

    -   REST API 구현하면서 쿼리 작업 시 필요하여 같이 진행할 것
    -   route별 DB 쿼리 작업하며 응답값 보내기

-   원하는 그림에 맞춰서 요청, 응답 API 구성 후 swagger로 배포하기

-   그리고 끝나는 대로 회의 열기.

https://stackoverflow.com/questions/56691205/node-postgres-query-not-firing-on-redirect-to-home-page-after-registering-a-user
