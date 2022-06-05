// 12171788 박지은

// import user files
import express from "express";
import { selectSql, insertSql, updateSql, deleteSql } from "../database/sql";

const router = express.Router();   // router 객체 생성

router.get('/', async function(req, res) {  // select 의미
    // 객체에 저장
    const Airport = await selectSql.getAirport();

    res.render('Airport', {  // Airport.hbs 파일에 넘겨줌
        title1: 'Airport Information',
        title2: 'Insert Airport',
        title3: 'Update Airport',
        Airport
    });
});

router.post('/', async (req, res) => {
    const vars = req.body;
    if(vars.insertbtn !== undefined){
        const Airport_code = vars.Airport_code;
        const Name = vars.Name;
        const City = vars.City;
        const State = vars.State;
        const Manager = vars.Manager;
        insertSql.setAirport(Airport_code, Name, City, State, Manager);
    }

    else if(vars.deletebtn !== undefined){
        const data = {
            Airport_code: vars.deletebtn,
        };
        await deleteSql.deleteAirport(data);   
    }

    else if(vars.updatebtn !== undefined){
        const data = {
            Airport_code: vars.updatebtn,
            Manager: vars.Manager,
        };
        await updateSql.updateAirport(data);
    }

    res.redirect('/airport');
});

module.exports = router;

