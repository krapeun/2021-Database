// 12171788 박지은

// select module import
import express from "express";

const router = express.Router();    // router 객체 생성

router.get('/', async(req, res) => {
    res.render('admin', {
        title: "Select Menu",
    });
});

router.post('/', async(req, res) => {
    if(req.body.airportbtn !== undefined)
        res.redirect('/airport');
    else if(req.body.airplanebtn !== undefined)
        res.redirect('/airplane');
    else if(req.body.flightbtn !== undefined){
        res.redirect('/flight');
    }
});

module.exports = router;

