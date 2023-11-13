const form = document
  .querySelector("#contactForm")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    formValidation();
  });

const formValidation = () => {
  //DOM
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const subject = document.querySelector("#subject");
  const message = document.querySelector("#message");
  //Error span
  const nameError = document.querySelector("#nameError");
  const emailError = document.querySelector("#emailError");
  const subjectError = document.querySelector("#subjectError");
  const messageError = document.querySelector("#messageError");

  //Name
  if (name.value.trim() == "") {
    nameError.textContent = "Name can not be empty!";
  } else if (name.value.trim().length < 5) {
    nameError.textContent = "At least 5 characters*";
  }
  //Email
  if (email.value.trim() == "") {
    emailError.textContent = "E-mail can not be empty!";
  }
  //Subject
  if (subject.value.trim() == "") {
    subjectError.textContent = "Subject can not be empty!";
  }
  //Message
  if (message.value.trim() == "") {
    messageError.textContent = "Message can not be empty!";
  }
};
