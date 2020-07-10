hamburgerMenu = function () {
  const menu = document.getElementById("nav__list");
  const closeIcon = document.getElementById("toggle");

  menu.addEventListener("click", handleMenuClick);

  function handleMenuClick(event) {
    if (event.target instanceof HTMLAnchorElement) {
      closeIcon.checked = false;
    }
  }
};

$(".eye").click(function () {
  $(this).addClass("active");
  $(".secret").fadeIn(300).addClass("active");
});

$(".close").click(function () {
  $(".eye").fadeIn(100).removeClass("active");
  $(".secret").removeClass("active").hide();
});
