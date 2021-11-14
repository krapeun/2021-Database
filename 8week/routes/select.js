import express from "express";
//사용자가 만든 모듈 불러올 때 {}
import { selectSql } from "../database/sql";

const router = express.Router();
// /select를 /로 표현한 것임
router.get("/", async function (req, res) {
  const employee = await selectSql.getEmployee();
  const department = await selectSql.getDepartment();

  //hbs파일
  res.render("select", {
    title1: "직원테이블",
    title2: "부서테이블",
    employee,
    department,
  });
});

module.exports = router;
