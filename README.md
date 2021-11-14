# 2021-Database
- 데이터베이스 설계 

<br>

## 3주차 실습

<pre>
<code>
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

<br>

- <span style="color:red">테이블 작성법</span>

- **학생**

***
>num|id|name|major|grade|date|email
>---|---|---|---|---|---|---|
>1|12171788|박지은|정보통신공학과|4|2017.03.01|jieunpark@inha.edu
>2|12171748|고병찬|정보통신공학과|4|2017.03.01|12171748@inha.edu
>3|12171866|한대진|정보통신공학과|4|2017.03.01|12171866@inha.edu
***


## 8주차 실습


## 10주차 실습