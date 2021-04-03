$("a.play").on("click", function (e) {
  e.preventDefault();
  $(this).hide();
  var video = '<iframe src="' + $(".play img").attr("data-video") + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  $(".video-placeholder").replaceWith(video);
});
