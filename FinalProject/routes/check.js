import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

router.get("/", async function(req, res) {
  const My_List = await selectSql.getCheck();
  res.render("check", {
    title: 'My Reservation Check',
    My_List
  });
});

router.post('/', async (req, res) => {

    res.redirect('/check');
});

module.exports = router;

