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
});
