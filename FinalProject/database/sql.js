// 121717788 박지은

import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'FinalProject',
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
  getUsers : async () => {  // 동기화
    const [rows] = await promisePool.query(`select * from User`);
    console.log(rows)
    return rows
  },
  getAirport : async () => {
    const [rows] = await promisePool.query(`select * from Airport`);
    console.log(rows)
    return rows
  },
  getAirplane : async () => {
    const [rows] = await promisePool.query(`select * from Airplane`);
    console.log(rows)
    return rows
  },
  getFlight : async () => {
    const [rows] = await promisePool.query(`select * from Flight`);
    console.log(rows)
    return rows
  },
  getCheck : async (User_id) => {
    // const [rows] = await promisePool.query(`select * from My_Reservation
    // where My_Reservation.User_id=${User_id}`);
    const [rows] = await promisePool.query(`select * from My_Reservation`);
    console.log(rows)
    return rows
  },
  getReservation : async () => {
    const [rows] = await promisePool.query(`select * from Reservation_List`);
    console.log(rows)
    return rows
  },
}

//insert query
export const insertSql = {
  //data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
  setAirport: async (Aiport_code, Name, City, State, Manager) => {
    //쿼리문
    // const sql = `insert into Airport values(
    //         ${data.Aiport_code},"${data.Name}","${data.City}","${data.State}")`;
    const sql = `insert into Airport values(
      ${Aiport_code}, "${Name}","${City}","${State}", "${Manager}")`;
    console.log(sql);
    await promisePool.query(sql);
  },
  setAirplane: async (Airplane_id, Total_number_of_seats, Airplane_type, Manufacture_date) => {
    const sql = `insert into Airplane values(
            ${Airplane_id},${Total_number_of_seats},"${Airplane_type}", "${Manufacture_date}")`;
    await promisePool.query(sql);
  },
  setFlight: async (Flight_number, Airline, Weekdays, Captain) => {
    const sql = `insert into Flight values(
            ${Flight_number},"${Airline}","${Weekdays}", "${Captain}")`;
    await promisePool.query(sql);
  },
};

//update query
//조건을 설정해 줘야 함 where
export const updateSql = {
  updateAirport: async (data) => {
    const sql = `update airport set Manager = "${data.Manager}"
    where Airport_code= "${data.Airport_code}"`;
    await promisePool.query(sql);
  },
  updateAirplane: async (data) => {
    const sql = `update airplane set Total_number_of_seats = "${data.Total_number_of_seats}",
    where Airplane_id= "${data.Airplane_id}"`;
    console.log(data.Total_number_of_seats);
    await promisePool.query(sql);
  },
  updateFlight: async (data) => {
    const sql = `update flight set Captain = "${data.Captain}"
    where Flight_number= "${data.Flight_number}"`;
    await promisePool.query(sql);
  },
};

// delete query
export const deleteSql = {
  deleteAirport : async (data) => {
    console.log('deleteSql.deleteAirport : ', data.Airport_code);
    const sql = `delete from Airport where Airport_code=${data.Airport_code}`;
    await promisePool.query(sql);
  },
  deleteAirplane : async (data) => {
    console.log('deleteSql.deleteAirplane : ', data.Airplane_id);
    const sql = `delete from Airport where Airplane_id=${data.Airplane_id}`;
    await promisePool.query(sql);
  },
  deleteFlight : async (data) => {
    console.log('deleteSql.deleteFlight : ', data.Flight_number);
    const sql = `delete from Flight where Flight_number=${data.Flight_number}`;
    await promisePool.query(sql);
  },
  deleteReservation : async (data) => {
    console.log('deleteSql.deleteReservation : ', data.Flight_number);
    const sql = `delete from Seat_reservation where Flight_number=${data.Flight_number}`;
    await promisePool.query(sql);
  },
}

