// 12171788 박지은

// import user files
import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();   // router 객체 생성

router.get('/', async function(req, res) {  // select 의미
    // 객체에 저장
    // const department = await selectSql.getDepartment(); 
    const course = await selectSql.getCourse(); 

    res.render('select', {  // select.hbs 파일에 넘겨줌
        title: 'IT 공대',
        course
    });
});

module.exports = router;
