$(function () {
  $("a.play").on("click", function (e) {
    e.preventDefault();
    $(this).hide();
    var video = '<iframe src="' + $(".play img").attr("data-video") + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    $(".video-placeholder").replaceWith(video);
  });

  $("#lp-video").prop("muted", true);
  $(".volume-mute").on("click", function () {
    $(this).fadeOut();
    if ($("#lp-video").prop("muted")) {
      $("#lp-video").prop("muted", false);
    } else {
      $("#lp-video").prop("muted", true);
    }
  });
});
