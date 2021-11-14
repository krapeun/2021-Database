// 12171788 박지은

// select module import
import express from "express"
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();   // router 객체 생성

// 기존의 입력 값 불러오기
router.get('/', async(req, res) => {
    const course = await selectSql.getCourse();

    res.render('delete', {
        title: "삭제 기능",
        course
    })
});

// 삭제 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/', async (req, res) => {
    console.log('delete router :', req.body.delBtn);

    const data = {
        Course_Number: req.body.delBtn,
    };

    await deleteSql.deleteCourse(data);

    res.redirect('/delete');
});

module.exports = router;

