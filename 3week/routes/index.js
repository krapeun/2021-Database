import express from "express";
import sql from "../database/sql"

const router = express.Router();
/* GET home page. */
router.get('/', async function(req, res, next) {
  const users = await sql.getUsers()
  console.log(users);
  res.render('users', 
    { title: 'Express',
    users
  });
});

module.exports = router;
