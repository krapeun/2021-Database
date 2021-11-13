// 121717788 박지은

import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'week10',
    password: 'jepark1127',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);

// async / await 사용
const promisePool = pool.promise();

// select query
export const selectSql = {
  // select table
  getUsers : async () => {  // 동기화
    const [rows] = await promisePool.query(`select * from user`);
    console.log(rows)
    return rows
  },
  getDepartment : async () => {
    const [rows] = await promisePool.query(`select * from department`);
    return rows
  },
  getCourse : async () => {
    const [rows] = await promisePool.query(`select * from course`);
    return rows
  },
}

// delete query
export const deleteSql = {
  // deleteDepartment : async (data) => {
  //   console.log('deleteSql.deleteDepartment : ', data.Dnumber);
  //   // where문에 있는 내용에 맞게 delete
  //   const sql = `delete from department where Dnumber=${data.Dnumber}`;

  //   await promisePool.query(sql);
  // }

  deleteCourse : async (data) => {
    console.log('deleteSql.deleteCourse : ', data.Course_Number);
    // Course_Number가 같을 때 제거
    const sql = `delete from course where Course_Number=${data.Course_Number}`;

    await promisePool.query(sql);
  }
}

