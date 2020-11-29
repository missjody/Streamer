$(document).ready(function () {
  console.log("signup doc ready");

  // Getting references to our form and input
  var userNameInput = $("#signup-username")
  var emailInput = $("#signup-email");
  var passwordInput = $("#signup-pwd");

  $("#signUpForm").on("submit", function (event) {
    event.preventDefault();
    console.log("Did it do it?");
    var userData = {
      username: userNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData);
    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.email, userData.password);
    userNameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, email, password) {
    $.post("/api/signup", {
      username: username,
      email: email,
      password: password
    })
      .then(function (data) {
        // console.log(data);
        window.location.replace("/login");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
