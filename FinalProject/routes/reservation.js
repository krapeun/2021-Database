import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

router.get("/", async function (req, res) {
  const Reservation_List = await selectSql.getReservation();
  res.render("reservation", {
    title: 'Reservation Flight',
    Reservation_List
  });
});
router.post('/', async (req, res) => {

    res.redirect('/reservation');
});

module.exports = router;

