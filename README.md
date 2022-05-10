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
>1|12171788|박지은|정보통신공학과|4|2017-03-01|jieunpark@inha.edu
>2|12171748|고병찬|정보통신공학과|4|2017-03-01|12171748@inha.edu
>3|12171866|한대진|정보통신공학과|4|2017-03-01|12171866@inha.edu
***

<br>
<br>

## 8주차 실습
1. Database 수정, 조회, 삽입 기능 구현
2. Web 상에서 작동
3. MySQL Database 생성
    - EMPLOYEE : Fname, Minit, Lname, Ssn, Bdate, Address, Sex, Salary, Super_ssn, Dno
    - <sapn style="color:red">EMPLOYEE Primary Key : Ssn</span>
    - DEPARTMENT : Dname, Dnumber, Mgr_ssn, Mgr_start_date
    - <sapn style="color:red">DEPARTMENT Foreign Key : Mgr_Ssn</span>

<br>

- **EMPLOYEE**

***
>Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
>---|---|---|---|---|---|---|---|---|---|
>지은|P|박|12171788|1998-11-27|남양주시|여|1000|12171788|1
>대진|H|한|12171700|1997-03-29|수원시|남|300|12171788|2
>병찬|K|고|12171717|1997-10-24|성남시|남|100|12171788|1
>태민|H|허|12181818|1998-12-12|서울시|남|500|12171700|2
>수영|Y|유|12191919|1999-01-01|제주도|남|600|12191919|3

***

<br>

- **DEPARTMENT**
    - EMPLOYEE 테이블에 있는 Ssn을 참조함 (Mgr_ssn)

***
>Dname|Dnumber|Mgr_ssn|Mgr_start_date
>---|---|---|---|
>개발부|1|12171788|2014-02-05
>경리부|2|12171700|2011-10-31
>회계부|3|12191919|2002-01-05
***

<br>
<br>

## 10주차 실습
1. Database 로그인, 조회, 삭제 기능 구현
2. Web 상에서 작동
3. admin / test 계정 두가지로 로그인 후, 서로 다른 기능 구현

- **USER**
    - 사용자 계정 데이터베이스
    - admin : 관리자 계정으로 로그인 시, 데이터 삭제 페이지로 이동
    - test : 일반 사용자 계정으로 로그인 시, 데이터 조회 페이지로 이동
    - 그 외 계정으로 로그인 시 로그인 실패 메시지 출력

***
>Id|Password|Role
>---|---|---|
>admin|admin1234|admin
>test|test1234|users
***

<br>

- **DEPARTMENT**
    - IT 공대 학과 데이터베이스

***
>Dname|Dnumber
>---|---|
>정보통신공학과|0
>컴퓨터공학과|1
>전기공학과|2
>전자공학과|3
***

<br>

- **COURSE**
    - 과목 데이터베이스

***
>Course_Name|Course_Number|Credit_Hours
>---|---|---|
>데이터베이스설계|1|4
>알고리즘설계|2|4
>자료구조론|3|3
>정보보호론|4|3
>시스템프로그래밍|5|3
***
