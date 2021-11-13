const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("mail");
const userid = document.getElementById("userid");
const printForm = document.getElementById("user");
const display = document.getElementById("form-result");

const handlePrint = (e) => {
    e.preventDefault();
    const fn = firstName.value
    console.log(firstName);
    const ln = lastName.value
    const em = email.value
    const id = userid.value
    const diplaySpan = display.querySelector("span");
    diplaySpan.innerHTML = `
    First Name is: ${fn}<br>
    Last Name is: ${ln}<br>
    E-mail is: ${em}<br>
    ID is: ${id}`;
};
printForm.addEventListener("submit", handlePrint);
// 이벤트 감지 함수