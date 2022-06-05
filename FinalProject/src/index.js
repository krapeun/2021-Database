// 12171788 박지은

// import modules
import express from "express";
import logger from "morgan";
import path from "path";

// import user files
import loginRouter from "../routes/login";          // login

// Admin
import adminRouter from "../routes/admin";          // 관리자
import airportRouter from "../routes/airport";      // 공항 관리
import airplaneRouter from "../routes/airplane";    // 항공기 관리
import flightRouter from "../routes/flight";        // 항공편 관리

// User
import userRouter from "../routes/user";            // 사용자
import checkRouter from "../routes/check";         // 조회
import reservationRouter from "../routes/reservation";   // 예약

const PORT = 3002;

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

app.use('/admin', adminRouter);
app.use('/airport', airportRouter);
app.use('/airplane', airplaneRouter);
app.use('/flight', flightRouter);

app.use('/user', userRouter);
app.use('/check', checkRouter);                  // 조회
app.use('/reservation', reservationRouter);      // 예약

// server
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


