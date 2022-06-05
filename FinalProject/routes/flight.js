// 12171788 박지은

// import user files
import express from "express";
import { selectSql, insertSql, updateSql, deleteSql } from "../database/sql";

const router = express.Router();   // router 객체 생성

router.get('/', async function(req, res) {  // select 의미
    // 객체에 저장
    const Flight = await selectSql.getFlight();

    res.render('Flight', {
        title1: 'Flight Information',
        title2: 'Insert Flight',
        title3: 'Update Flight',
        Flight
    });
});

// 삭제 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/', async (req, res) => {
    const vars = req.body;
    if(vars.insertbtn !== undefined){
        const Flight_number = vars.Flight_number;
        const Airline = vars.Airline;
        const Weekdays = vars.Weekdays;
        const Captain = vars.Captain;
        insertSql.setFlight(Flight_number, Airline, Weekdays, Captain);
    }

    else if(vars.deletebtn !== undefined){
        const data = {
            Flight_number: vars.deletebtn,
        };
        await deleteSql.deleteFlight(data);   
    }

    else if(vars.updatebtn !== undefined){
        const data = {
            Flight_number: vars.updatebtn,
            Captain: vars.Captain,
        };
        await updateSql.updateFlight(data);
    }

    res.redirect('/flight');
});

module.exports = router;

