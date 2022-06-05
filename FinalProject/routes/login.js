// 12171788 박지은

// select module import
import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();    // router 객체 생성

router.get('/', (req, res) => {
    res.render('login');    // login.hbs render
});

// login에서 넘겨 받은 데이터가 저장됨
router.post('/', async(req, res) => {
    const vars = req.body;
    const users = await selectSql.getUsers();
    let whoAmI = '';    // check id
    let checkLogin = false; // check login

    users.map((users) => {
        if(vars.User_id === users.User_id && vars.Password === users.Password){
            console.log('login sucess!');
            checkLogin = true;

            // check login
            if(vars.User_id === 'admin'){
                whoAmI = 'admin';
            } else {
                whoAmI = 'user';
            }
        }
    })

    // Redirect Page
    if(checkLogin && whoAmI === 'admin')
        res.redirect('/admin');    // admin 계정으로 로그인하면 admin으로 이동
    else if (checkLogin && whoAmI === 'user'){
        res.redirect('/user');    // user 계정으로 로그인하면 user로 이동
    }
    else {
        console.log('login failed!');
        // send로 HTML Tag를 보내줌
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/'; </script>");
    }
})

module.exports = router;

