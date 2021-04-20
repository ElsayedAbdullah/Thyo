$(function () {
  // $("a.play").on("click", function (e) {
  //   e.preventDefault();
  //   $(this).fadeOut();
  //   // var video = `
  //   // <video controls autoplay >
  //   //   <source src="videos/save_earth.mp4" type="video/mp4" />
  //   // </video>`;
  //   // $(".video-placeholder").replaceWith(video);
  // });

  var inputEmail = $("#email");
  // function to validate the email
  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
  }

  var emailError = true;
  var fNameError = true;
  var lNameError = true;
  var cityError = true;
  var stateError = true;
  var streetError = true;
  var zipError = true;
  var phoneError = true;
  var cardError = true;
  var cvcError = true;
  var monthError = true;
  var yearError = true;

  inputEmail.on("blur", function () {
    if (!validateEmail(inputEmail.val()) || inputEmail.val() == "") {
      $(this).addClass("validate-error");
      $(this).parent().addClass("not-validate").removeClass("validate");
      emailError = true;
    } else {
      $(this).removeClass("validate-error");
      $(this).parent().addClass("validate").removeClass("not-validate");
      emailError = false;
    }
  });

  // validation for the select box
  $("#state,#month,#year").on("blur", function () {
    if (!$(this).val()) {
      $(this).parents(".checkout_form").find(".select2-selection--single").addClass("validate-error");
      $(this).parent().addClass("not-validate").removeClass("validate");
      stateError = true;
      monthError = true;
      yearError = true;
    } else {
      $(this).parents(".checkout_form").find(".select2-selection--single").removeClass("validate-error");
      $(this).parent().addClass("validate").removeClass("not-validate");
      stateError = false;
      monthError = false;
      yearError = false;
    }
  });

  $("#city,#st-address,#lname,#fname,#zip,#phone,#card_num,#card_cvc").on("blur", function () {
    if ($(this).val() == "") {
      $(this).addClass("validate-error");
      $(this).parent().addClass("not-validate").removeClass("validate");
      cityError = true;
      streetError = true;
      fNameError = true;
      lNameError = true;
      zipError = true;
      phoneError = true;
      cardError = true;
      cvcError = true;
    } else {
      $(this).removeClass("validate-error");
      $(this).parent().addClass("validate").removeClass("not-validate");
      cityError = false;
      streetError = false;
      fNameError = false;
      lNameError = false;
      zipError = false;
      phoneError = false;
      cardError = false;
      cvcError = false;
    }
  });

  $(".checkout_form").on("submit", function (e) {
    e.preventDefault();
    if (emailError == true || fNameError == true || lNameError == true || cityError == true || stateError == true || streetError == true || zipError == true || phoneError == true || cardError == true || cvcError == true) {
      $("select#state").blur();
      $(inputEmail).blur();
      $("#fname").blur();
      $("#lname").blur();
      $("#city").blur();
      $("#st-address").blur();
      $("#zip").blur();
      $("#phone").blur();
      $("#card_num").blur();
      $("#card_cvc").blur();
    }
  });
});
