$(function () {
  $("a.play").on("click", function (e) {
    e.preventDefault();
    $(this).fadeOut();
    var video = `
    <video controls autoplay >
      <source src="videos/save_earth.mp4" type="video/mp4" />
    </video>`;
    $(".video-placeholder").replaceWith(video);
  });

  var $video = $("#lp-video")
  $video.attr("controls", "");
  $video.prop("muted", true);
  $(".volume-mute").on("click", function () {
    $(this).fadeOut();
    if ($video.prop("muted")) {
      $video.prop("muted", false);
      $video.attr("controls", "");
    } else {
      $video.prop("muted", true);
    }
  });

});
