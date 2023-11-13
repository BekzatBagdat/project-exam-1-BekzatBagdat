const form = document
  .querySelector("#contactForm")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    formValidation();
  });

const formValidation = () => {
  //DOM inputs
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const subject = document.querySelector("#subject");
  const message = document.querySelector("#message");
  //Error span
  const nameError = document.querySelector("#nameError");
  const emailError = document.querySelector("#emailError");
  const subjectError = document.querySelector("#subjectError");
  const messageError = document.querySelector("#messageError");

  //Name validate
  if (name.value.trim() == "") {
    nameError.textContent = "Name can not be empty!";
    nameError.classList.add("errors");
    nameError.classList.remove("success");
  } else if (name.value.trim().length < 5) {
    nameError.textContent = "At least 5 characters*";
    nameError.classList.add("errors");
    nameError.classList.remove("success");
  } else if (name.value.trim().length >= 5) {
    nameError.textContent = "Name is valid ✅";
    nameError.classList.remove("errors");
    nameError.classList.add("success");
  }
  //Email validate
  if (email.value.trim() == "") {
    emailError.textContent = "E-mail can not be empty!";
    emailError.classList.add("errors");
    emailError.classList.remove("success");
  } else if (!isValidEmail(email.value)) {
    emailError.textContent = "E-mail address needs to be valid*";
    emailError.classList.add("errors");
    emailError.classList.remove("success");
  } else if (isValidEmail(email.value)) {
    emailError.textContent = "E-mail is valid ✅";
    emailError.classList.remove("errors");
    emailError.classList.add("success");
  }
  //Subject validate
  if (subject.value.trim() == "") {
    subjectError.textContent = "Subject can not be empty!";
    subjectError.classList.add("errors");
    subjectError.classList.remove("success");
  } else if (subject.value.trim().length < 15) {
    subjectError.textContent = "At least 15 characters*";
    subjectError.classList.add("errors");
    subjectError.classList.remove("success");
  } else if (subject.value.trim().length >= 15) {
    subjectError.textContent = "Subject is valid ✅";
    subjectError.classList.remove("errors");
    subjectError.classList.add("success");
  }
  //Message validate
  if (message.value.trim() == "") {
    messageError.textContent = "Message can not be empty!";
    messageError.classList.add("errors");
    messageError.classList.remove("success");
  } else if (message.value.trim().length < 25) {
    messageError.textContent = "At least 25 characters*";
    messageError.classList.add("errors");
    messageError.classList.remove("success");
  } else if (message.value.trim().length >= 25) {
    messageError.textContent = "Message is valid ✅";
    messageError.classList.remove("errors");
    messageError.classList.add("success");
  }
};

//Email Validator Function
const isValidEmail = (email) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
};
