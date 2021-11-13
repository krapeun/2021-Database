// 12171788 박지은

// import modules
import express from "express";
import logger from "morgan";
import path from "path";

// import user files
import loginRouter from "../routes/login";      // 로그인
import selectRouter from "../routes/select";    // 조회
import deleteRouter from "../routes/delete";    // 삭제

const PORT = 3000;

const app = express();  // http server connection

// data를 웹에서 다루기 편하게
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// using hbs files
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

// log files
app.use(logger("dev"));

// 해당 주소에 맞는 화면 출력
app.use('/', loginRouter);
app.use('/select', selectRouter);   // 조회
app.use('/delete', deleteRouter);   // 삭제

// server
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

