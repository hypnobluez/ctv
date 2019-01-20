//CV swap divs
$(document).ready(function () {
    $("#tech").html($("#skills").html());

});
//pull content for cv
$(document).ready(function () {
    $('a.cv').click(function () {
        $('#content-fill').load('../cv/index.html #w');

    });
});

$(document).scroll(function () {
    $("#tech").html($("#skills").html());
});


//Expand/collapse
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

//Bootstrap Collapsibles
$(document).ready(function () {
    $(".collapse").on("shown.bs.collapse", function () {
        $(this)
            .parent()
            .find(".glyphicon-plus")
            .removeClass("glyphicon-plus")
            .addClass("glyphicon-minus");
    });
});
$(document).ready(function () {
    $(".collapse").on("hidden.bs.collapse", function () {
        $(this)
            .parent()
            .find(".glyphicon-minus")
            .removeClass("glyphicon-minus")
            .addClass("glyphicon-plus");
    });
});



