jQuery(function () {
  // redirect to signup page
  jQuery("button.join-for-free").on("click", function (e) {
    e.preventDefault();
    window.location = "/users";
  });

  // verify that password and confirm password are the same and handle form submission
  const pass = document.querySelector(`input[name="password"]`);
  const confirmPass = document.querySelector(`input[name="confirmPassword"]`);
  jQuery("#user").on("submit", function (e) {
    e.preventDefault();

    const mismatch = jQuery("p.p-mismatch");
    if (pass.value !== confirmPass.value) {
      mismatch
        .removeClass("d-none")
        .css("color", "red")
        .html("<b>Password doesn't match</b>");
      return;
    }

    const formElements = document.querySelector(`#user`).elements;
    let counter = 0;
    const survData = {};
    for (let i = 0; i < formElements.length; i++) {
      if (
        formElements[i].value !== "" &&
        formElements[i].type !== "submit" &&
        formElements[i].type !== "reset"
      ) {
        counter += 1;
        survData[formElements[i].name] = formElements[i].value;
      }
    }
    if (counter !== 8) {
      return window.alert(
        "Please you are required to complete all the fields in the form"
      );
    } else {
      $.ajax({
        method: jQuery("#user").attr("method"),
        url: jQuery("#user").attr("action"),
        data: survData,
        success: function ({status,data}) {
          if(status === "success"){
            const email = data;
            const domainName = email.slice(-15);
            if (domainName === "femossurvey.com") {
              window.location = "/admin";
            }else{
              window.location = "/";
            }
          }
        },
        error: function (error) {
          console.log(error.responseText);
          window.location = "/users-login";
        },
      });
      return false;
    }
  });

  // Form login
  jQuery("#login").on("submit", function (e) {
    e.preventDefault();
    const data = {};
    const elements = document.querySelector(`#login`).elements;
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].value !== "") {
        data[elements[i].name] = elements[i].value;
      }
    }
    $.ajax({
      method: jQuery("#login").attr("method"),
      url: jQuery("#login").attr("action"),
      data: data,
      success: function ({status, data}) {
        if(status === "success"){
          const email = data;
          const domainName = email.slice(-15);
          if (domainName === "femossurvey.com") {
            window.location = "/admin";
          }else{
            window.location = "/";
          }
        }
      },
      error: function (error) {
        console.log(error.responseText);
        window.location = "/users-login";
      },
    });
    return false;
  });

  //cancel button on user form
  jQuery(".form-reg-cancel").on("click", function (e) {
    e.preventDefault();
    const confirm = window.confirm(
      "Are you sure you want to cancel this registration process?"
    );
    if (confirm) {
      window.location = "/";
    }
  });

  // Survey form processing action
  jQuery("#surveyCapture").on("submit", function (e) {
    e.preventDefault();

    const formElements = document.querySelector(`#surveyCapture`).elements;
    let counter = 0;
    const survData = {};
    for (let i = 0; i < formElements.length; i++) {
      if (formElements[i].type === "radio") {
        if (formElements[i].checked) {
          counter += 1;
          survData[formElements[i].name] = formElements[i].value;
        }
      }
    }
    if (counter !== 10) {
      return window.alert(
        "Please you are required to provide answers to all the questions. Please attend to it diligently"
      );
    } else {
      $.ajax({
        method: "post",
        url: "/process-survey-submission",
        data: survData,
        success: function (result) {
          console.log(result);
        },
        error: function (error) {
          console.log(error.responseText);
        },
      });
      window.alert("Survey successfully captured. Thank you!");
      return false;
    }
  });

  // handle survey checkbox
  jQuery('form[class="form-check"]').css({
    "font-weight": 500,
    "font-size": "large",
  });

  const titlesCheck = document.querySelectorAll(`#title`);
  titlesCheck.forEach((val) => {
    val.addEventListener("click", (event) => {
      const nextSibling = val.nextElementSibling;
      let title = nextSibling.value;
      let id = nextSibling.nextElementSibling.value;
      window.open(
        "/survey-path?id=" + id + "&title=" + title,
        "survey",
        "width=1000,height=700,top=70,left=150"
      );
      titlesCheck.forEach((ele) => {
        if (ele.checked) {
          if (!ele.isSameNode(val)) {
            ele.checked = false;
          }
        }
      });
    });
  });

  // submit and cancel survey
  jQuery("#created-date").css({
    color: "#A5032F",
    "font-style": "italic",
    "font-weight": 600,
    "font-size": "larger",
  });

  jQuery("h1.suv-title").css({
    "text-transform": "uppercase",
    "text-align": "center",
    color: "#A5032F",
  });

  jQuery("button.cancel").on("click", function (e) {
    e.preventDefault();
    const resp = window.confirm("Are you sure want to close this survey?");
    if (resp) {
      window.location = "/";
      window.close();
    }
  });

  let myDate = document.querySelector(`#created-date`);
  const dateValue = myDate.nodeValue;
  const date = new Date(dateValue);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dateFormat = day + "-" + month + "-" + year;
  myDate.textContent = dateFormat;
  myDate.css("color", "green");
});
