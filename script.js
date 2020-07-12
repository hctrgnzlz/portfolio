//javascript//

hamburgerMenu = function () {
  const menu = document.getElementById("nav__list");
  const close = document.getElementById("toggle");

  function handleMenuClick(event) {
    if (event.target instanceof HTMLAnchorElement) {
      close.checked = false;
    }
  }
  menu.addEventListener("click", handleMenuClick);
};
hamburgerMenu();

//jquery//
$(".eye").click(function () {
  $(this).addClass("active");
  $(".secret").fadeIn(300).addClass("active");
});

$(".close").click(function () {
  $(".eye").fadeIn(100).removeClass("active");
  $(".secret").removeClass("active").hide();
});
