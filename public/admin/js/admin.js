jQuery(function () {
  if (!localStorage.getItem("key")) {
    $("#staticBackdrop").modal("show");
  }

  $("button.cls").on("click", function (e) {
    e.preventDefault();
    window.location = "/users-login";
  });

  
  const perms = {};
  $('input[name="perm"]').on("change", function (e) {
    perms.perm = e.target.value;
  });

  $('input[name="supAdmin"]').on("change", function (e) {
    perms.supAdmin = e.target.value;
  });

  // Handle activation button
  $("button.activate").on("click", function (e) {
    e.preventDefault();
    if (Object.keys(perms).length === 0) {
      const ans = window.confirm(
        "Do you want to abort without providing your key?"
      );
      if (ans) {
        window.location = "/users-login";
      }
    }
    $.ajax({
      method: "post",
      url: "/admin",
      data: perms,
      success: function (result) {
        if (result.status === "success") {
          $("#staticBackdrop").modal("hide");
          const token = result.data;
          localStorage.setItem("key", token);
        }
      },
      error: function (e) {
        window.location = "/users-login";
      },
    });
    return false;
  });

  // survey form
  $("#survey").on("submit", function(e){
    e.preventDefault();
    const data = {};
    const elements = $(this).elements;
    for(let i = 0; i < elements.length; i++){
      data[elements[i].name] = elements[i].value;
    }
    $.ajax({
      method: $(this).attr("method"),
      url: $(this).attr("action"),
      data: data,
      success: function(result){
        console.log(result);
      },
      error: function(error){
        console.log(error);
      }
    });
    return false;
  });

  // survey cancel
  $(".cancel").on("click", function(e){
    e.preventDefault();
    let ans = window.confirm("Do you want to terminate process?");
    if(ans){
      window.location = "/admin";
    }
  });

  tinymce.init({
    selector: 'textarea',
    plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
    toolbar_mode: 'floating',
 });

});
