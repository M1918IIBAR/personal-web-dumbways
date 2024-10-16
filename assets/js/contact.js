function SendToMail(event) {
    event.preventDefault();

    const inputName = document.getElementById("input-name").value
    const inputEmail = document.getElementById("input-email").value
    const inputPhone = document.getElementById("input-phone").value
    const inputSubject = document.getElementById("input-subject").value
    const inputMessage = document.getElementById("input-message").value

    if (inputName == "") {
        return alert("Name can't be empty!");
      } else if (inputEmail == "") {
        return alert("Email can't be empty!");
      } else if (inputPhone == "") {
        return alert("Phone can't be empty!");
      } else if (inputSubject == "") {
        return alert("Subject can't be empty!");
      } else if (inputMessage == "") {
        return alert("Message can't be empty!");
      }    

    console.log(inputName)
    console.log(inputEmail)
    console.log(inputPhone)
    console.log(inputSubject)
    console.log(inputMessage)

    const a = document.createElement("a");
  a.href = `mailto:${inputEmail}?subject=${inputSubject}&body=${inputMessage}`;
  a.click()

}