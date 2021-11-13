import express from "express";
import { insertSql } from "../database/sql";
//데이터베이스에 데이터 삽입을 구현하는 파일이다.
//views폴더의 home.hbs파일과 연동한다.
const router = express.Router();

//home.hbs파일을 찾아서 그리겠다
router.get("/", (req, res) => {
  res.render("home");
});

router.post("/", (req, res) => {
  const vars = req.body;
  //데이터의 길이
  const var_length = Object.keys(req.body).length;
  //삽입을 했을 때 둘 다 post, home화면으로 넘기기 때문에
  //테이블 구별을 어떻게 하느냐
  //넘어오는 데이터 개수로
  if (var_length > 4) {
    const data = {
      //데이터 객체 생성
      //data 변수를 두 번 쓸 수 있는 이유는 둘 중 하나만 실행되기 때문.
      Fname: vars.fname,
      Minit: vars.minit,
      Lname: vars.lname,
      Ssn: vars.ssn,
      Bdate: vars.bdate,
      Address: vars.address,
      Sex: vars.sex,
      Salary: vars.salary,
      Super_ssn: vars.super_ssn,
      Dno: vars.dno,
    };
    insertSql.setEmployee(data);
  } else {
    const data = {
      Dname: vars.dname,
      Dnumber: vars.dnumber,
      Mgr_ssn: vars.mgr_ssn,
      Mgr_start_date: vars.mgr_start_date,
    };
    insertSql.setDepartment(data);
  }
  //입력 후에 다시 홈화면으로 간다. (새로고침)
  res.redirect("/");
});

module.exports = router;
