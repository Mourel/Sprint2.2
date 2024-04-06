// Exercise 6
function validate() {
  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fEmail = document.getElementById("fEmail");
  var fEmail = document.getElementById("fEmail");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");
  var fAddress = document.getElementById("fAddress");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var errorEmail = document.getElementById("errorEmail");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");
  var errorAddress = document.getElementById("errorAddress");

  // Validate fields entered by the user: name, phone, password, and email
  if (fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {
    error++;
    fName.classList.add("is-invalid");
    errorName.textContent =
      "This field is required and must contain only letters with at least 3 characters.";
  } else {
    fName.classList.remove("is-invalid");
    errorName.textContent = "";
  }

  if (fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
    error++;
    fLastN.classList.add("is-invalid");
    errorLastN.textContent =
      "This field is required and must contain only letters with at least 3 characters.";
  } else {
    fLastN.classList.remove("is-invalid");
    errorLastN.textContent = "";
  }

  if (fEmail.value.length < 3 || !/\S+@\S+\.\S+/.test(fEmail.value)) {
    error++;
    fEmail.classList.add("is-invalid");
    errorEmail.textContent =
      "This field is required and must contain a valid email address.";
  } else {
    fEmail.classList.remove("is-invalid");
    errorEmail.textContent = "";
  }

  if (
    fPassword.value.length < 4 ||
    fPassword.value.length > 8 ||
    !/\d/.test(fPassword.value) ||
    !/[a-zA-Z]/.test(fPassword.value)
  ) {
    error++;
    fPassword.classList.add("is-invalid");
    errorPassword.textContent =
      "Password must be between 4 and 8 characters long and include both letters and numbers.";
  } else {
    fPassword.classList.remove("is-invalid");
    errorPassword.textContent = "";
  }

  if (fPhone.value.length !== 9 || isNaN(fPhone.value)) {
    error++;
    fPhone.classList.add("is-invalid");
    errorPhone.textContent =
      "Invalid phone number! It must be 9 digits with no letters.";
  } else {
    fPhone.classList.remove("is-invalid");
    errorPhone.textContent = "";
  }

  if (fAddress.value.length < 3) {
    error++;
    fAddress.classList.add("is-invalid");
    errorAddress.textContent =
      "This field is required and must have at least 3 characters.";
  } else {
    fAddress.classList.remove("is-invalid");
    errorAddress.textContent = "";
  }

  if (error > 0) {
    // If there are errors, prevent form submission
    alert(
      "There are errors in the form. Please correct them before submitting."
    );
  } else {
    // If no errors, proceed with form submission
    alert("Form submitted successfully!");
  }
}
