// 12171788 박지은

// select module import
import express from "express";

const router = express.Router();    // router 객체 생성

router.get('/', async(req, res) => {
    res.render('user', {
        title: "Select Menu",
    });
    
});

router.post('/', async(req, res) => {
    if(req.body.reservationbtn !== undefined)
        res.redirect('/reservation');
    else if(req.body.checkbtn !== undefined)
        res.redirect('/check');
});

module.exports = router;

