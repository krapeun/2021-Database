// 12171788 박지은

// import user files
import express from "express";
import { selectSql, insertSql, updateSql, deleteSql } from "../database/sql";

const router = express.Router();   // router 객체 생성

router.get('/', async function(req, res) {
    // 객체에 저장
    const Airplane = await selectSql.getAirplane();

    res.render('Airplane', {
        title1: 'Airplane Information',
        title2: 'Insert Airplane',
        title3: 'Update Airplane',
        Airplane
    });
});

router.post('/', async (req, res) => {
    const vars = req.body;
    if(vars.insertbtn !== undefined){
        const Airplane_id = vars.Airplane_id;
        const Total_number_of_seats = vars.Total_number_of_seats;
        const Airplane_type = vars.Airplane_type;
        const Manufacture_date = vars.Manufacture_date;
        insertSql.setAirplane(Airplane_id, Total_number_of_seats, Airplane_type, Manufacture_date);
    }

    else if(vars.deletebtn !== undefined){
        const data = {
            Airplane_id: vars.deletebtn,
        };
        await deleteSql.deleteAirplane(data);   
    }

    else if(vars.updatebtn !== undefined){
        const data = {
            Airplane_id: vars.updatebtn,
            Total_number_of_seats: vars.Total_number_of_seats,
        };
        await updateSql.updateAirplane(data);
    }

    res.redirect('/airplane');
});

module.exports = router;

