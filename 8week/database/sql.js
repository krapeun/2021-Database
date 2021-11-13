import mysql from "mysql2";

//database 연결

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: "localhost",
    user: "root",
    database: "week8",
    password: "jepark1127",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);

//async / await 사용
const promisePool = pool.promise();

//select query
//async 존재시 await가 끝날때 까지 wait해주겠다.
export const selectSql = {
  getEmployee: async () => {
    const [rows] = await promisePool.query(`select * from employee`);
    console.log(rows);
    return rows;
  },
  getDepartment: async () => {
    const [rows] = await promisePool.query(`select * from department`);
    return rows;
  },
};

//insert query
//외부에서 함수 쓰기위해 export
export const insertSql = {
  //data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
  setEmployee: async (data) => {
    //쿼리문
    //``백틱은 변수를 사용 위해서 씀
    const sql = `insert into employee values(
            "${data.Fname}","${data.Minit}","${data.Lname}","${data.Ssn}", "${data.Bdate}","${data.Address}","${data.Sex}","${data.Salary}
            ","${data.Super_ssn}","${data.Dno}")`;
    await promisePool.query(sql);
  },
  setDepartment: async (data) => {
    const sql = `insert into department values(
            "${data.Dname}","${data.Dnumber}","${data.Mgr_ssn}","${data.Mgr_start_date}")`;
    await promisePool.query(sql);
  },
};

//update query
//조건을 설정해 줘야 함 where
export const updateSql = {
  updateEmployee: async (data) => {
    //where 조건을 만족하는 행에 대해서 salary 수정
    const sql = `update employee set salary = 2000 where Dno = "1"`;
    await promisePool.query(sql);
  },
  updateDepartment: async (data) => {
    const sql = `update department set dname = "${data.Dname}"where Dnumber="2"`;
    await promisePool.query(sql);
  },
};
