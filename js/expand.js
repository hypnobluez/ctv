$(document).ready(function () {
  $(".pnt-toggle > div").click(function () {
    $(this)
      .find("div.itm-toggle")
      .not($(this).siblings())
      .slideUp();
    $(this)
      .siblings(".itm-toggle")
      .slideToggle();
    $(this)
      .find(".x-plus")
      .toggleClass("x-minus");
  });
});
