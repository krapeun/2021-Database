# 2021-Database
- 데이터베이스 설계 

<br>
<br>

## 3주차 실습
1. Database 연결
    - MySQL과 연동하여 실제 생성한 데이터베이스 연결
    <pre>
    <code>
    // Nodejs, MySQL, Web

    const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인의 mysql user id
        database: '3week', // 본인이 만든 데이터베이스 이름
        password: 'password', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
    );
    </code>
    </pre>
2. MySQL Database 생성
    - STIDENT 테이블 생성
    - CREATE : num, id, name, major, grade, date, email 필드 생성
    - INSERT : 실제 데이터 삽입

<br>

- **STUDENT**

***
>num|id|name|major|grade|date|email
>---|---|---|---|---|---|---|
>1|12171788|박지은|정보통신공학과|4|2017.03.01|jieunpark@inha.edu
>2|12171748|고병찬|정보통신공학과|4|2017.03.01|12171748@inha.edu
>3|12171866|한대진|정보통신공학과|4|2017.03.01|12171866@inha.edu
***

<br>
<br>

## 8주차 실습

<br>
<br>

## 10주차 실습